function init(){
  function myEventFunction(){
    alert('Welcome!');
  }
  var m1 = document.getElementById("main-header");

  m1.addEventListener('click', myEventFunction);
  m1.addEventListener('click',function(){
  	console.log('I was Clicked!');
  	m1.style.background = 'rgb(1,123,102)';
  });


}
window.addEventListener('load', init);