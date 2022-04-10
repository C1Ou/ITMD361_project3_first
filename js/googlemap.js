function init(){
  //alert('it work!');
  var el = document.getElementById('canvas');
  var myLatLng = new google.maps.LatLng(31.23594677380884, 121.5010792240964);
  var mapOptions = {
    zoom:17,
    center:myLatLng,
    mapTypeId: 'satellite'

  };
  var myMap =new google.maps.Map(el,mapOptions);

  var marker = new google.maps.Marker({
    position:myLatLng,
    map:myMap,
    animation: google.maps.Animation.BOUNCE,
    icon:'./images/shlogo.png'

  });


}


google.maps.event.addDomListener(window, 'load', init);

