// The init function needs to run on load
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'page:load', initialize);

function initialize() {

  // var coords = new google.maps.LatLng (34, -118);

  // Find the map DIV (if it exists)
  var el = document.getElementById('address-map')

  // Bail out if there's not an address map on the page
  if(!el) return

  // Get an instance of the geocoder
  var geocoder = new google.maps.Geocoder()

  // Get the page's marker data from the JSON API
  var url = window.location.origin + window.location.pathname + ".json"

  // Ajax the data URL (this retrieves the contents of that JSON url above)
  $.get(url, function(results){

      console.log("Data returned from " + url, results)

      // Wrap the data in an array if it's not one already
      if(!(results instanceof Array)) results = [results]

      // Perform geocoding for all addresses using promises to coordinate the results
      var geo_promises = []

      // Geocode each address to be displayed
      // Realistically, this should be done in the Model when data is saved
      for(var i = 0; i < results.length; i++){

          // This creates promises using the jQuery Deferred library
          var promise = $.Deferred(function(deferred){
              geocoder.geocode({'address': results[i].court_address}, function(geo_results, status){
                  deferred.resolve(geo_results)
              })
          })
          geo_promises.push(promise)

      }

      // Dispatch the promises
      Promise.all(geo_promises).then(function(promise_results){

          // Create a map
          var mapProps = {
              mapTypeId: google.maps.MapTypeId.ROADMAP
          }
          var map = new google.maps.Map(el, mapProps)

          // Bounds are cool because they center our map for us
          var bounds = new google.maps.LatLngBounds()

          // Track an array of our markers
          var markers = []

          // Loop over the promise results
          for(var i = 0; i < promise_results.length; i++){

              var promise_result = promise_results[i][0]

              // result now represents a single geocoded address
              var coord = promise_result.geometry.location

              // Create and place a marker
              var marker = new google.maps.Marker({position: coord})
              marker.setMap(map)
              markers.push(marker)

              // Add the coordinates to the bounds (so we can center the map)
              bounds.extend(coord)

              // Create an info window
              var infowindow = new google.maps.InfoWindow({
                  content: "<h1>" + results[i].title + "</h1>" + promise_result.formatted_address
              })

              // Open it above the marker
              infowindow.open(map, markers[i])

          }

          // Center and fit the map using the bounds
          map.fitBounds(bounds)

      })

  })
}





// function load_my_map(){
//
//     var coords = new google.maps.LatLng(34.0129923,-118.495094);
//
//     var mapProperties = {
//         center: coords,
//         zoom: 13,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
//
//     var my_map = new google.maps.Map(document.getElementById("map-target"), mapProperties);
//
//     var marker = new google.maps.Marker({
//         position: coords
//     })
//     marker.setMap(my_map);
//     //create info windo
//     var infowindow = new google.maps.InfoWindow({
//         content:"<h1>Don't bother me im in the bathroom</h1> This is an <b>HTML</b> caption"
//
//     })
//     infowindow.open(my_map,marker)
// }
// load_my_map();
