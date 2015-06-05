// The init function needs to run on load
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'page:load', initialize);

function initialize() {

  // var coords = new google.maps.LatLng (34, -118);

  var mapProperties = {
    center: new google.maps.LatLng (34, -118),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var my_map = new google.maps.Map(document.getElementById("address-map"), mapProperties);

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
