// The init function needs to run on load
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'page:load', initialize);

function initialize() {
  var coords = new google.maps.LatLng (34, -118);

  var mapProperties = {
    center: coords,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var my_map = new google.maps.Map(document.getElementById("address-map"), mapProperties);

}
