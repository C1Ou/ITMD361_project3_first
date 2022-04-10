alert('it work!')
function initMap() {
  map = new google.maps.Map(document.getElementById("canvas"), {
    center: { lat: 31.234681121335083, lng: 121.50574082986076 },
    zoom: 17,
  });
}