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
    draggable:true,
    title:"Shanghai Tower",
    animation: google.maps.Animation.DROP,
    icon:'./images/shlogo.png'

  });
  marker.addListener("click",toggleBounce);

function toggleBounce(){
  if (marker.getAnimation() !==null){
    marker.setAnimation(null);
  }else{
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
  var contentString = "<h1>Shanghai Tower</h1><p>Shanghai Tower is a 128-story,632-meter-tall megatall skyscraper in Lujiazui,Pudong,Shanghai.It is the world's third-tallest building by height to architectural top and it shares the record of having the world's highest observation deck within a building or structure at 562m. </p>" ;
  var infowindow = new google.maps.InfoWindow({
    content:contentString,
  });
  marker.addListener("click",() => {
    infowindow.open({
      map:myMap,
      anchor:marker,
      shouldFocus:false,
    });
  });


}



google.maps.event.addDomListener(window, 'load', init);

