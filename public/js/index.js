if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/src/sw.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope:',  registration.scope);
  }).catch(function(error) {
    console.log('ServiceWorker registration failed:', errror);
  });
}

function scrollDir(){
  if(window.pageYOffset >= 10){
    document.getElementById("header").style.boxShadow = '0 1px 5px 0 #0000001a';
    // document.getElementById("header").style.boxShadow = '0 10px 10px 0 black';
    // document.getElementById("header").style.backgroundColor = '#FCFCFC';
  }else{
    document.getElementById("header").style.boxShadow = 'none';
    document.getElementById("header").style.backgroundColor = 'none';
  }
}