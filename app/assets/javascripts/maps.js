// The init function needs to run on load
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'page:load', initialize)

function initialize_my_map() {
  var mapProperties = {
  center:new google.maps.LatLng(34.0129821,-118.495196),
  zoom: 17,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };
}
