
$(document).ready(() => {
  initMap();
});

function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(52.255168, 10.526868),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true,
        streetViewControl: true,
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: mapOptions.center,
      map: map,
    });
    var markerString = "<span>AT Architektur</span></br>"
      + "<span>Hennebergstraße X</span></br>"
      + "<span>38100 Braunschweig</span>";
    var infowindow = new google.maps.InfoWindow({
     content: markerString
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
 });


}
