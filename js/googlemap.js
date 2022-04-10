function init(){
  //alert('it work!');
  var el = document.getElementById('canvas');
  var myLatLng = new google.maps.LatLng(31.236360996459716, 121.50208326905782);
  var mapOptions = {
    zoom:17,
    center:myLatLng,
    mapTypeId: 'satellite'

  };
  var map =new google.maps.Map(el,mapOptions);
}


google.maps.event.addDomListener(window, 'load', init);

