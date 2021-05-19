
 function mic(){
navigator.mediaDevices.getUserMedia({ audio: true })
.then(function(stream) {
    console.log('You let me use your mic!')
  })
  .catch(function(err) {
    console.log('No mic for you!')
  });
}
 

            //Mic permission 


function handleImageUpload() 
{

var image = document.getElementById("upload").files[0];

    var reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById("display-image").src = e.target.result;
    }

    reader.readAsDataURL(image);
  }         
  
            //image uploader 

  
  function getLocation(){
    var x = document.getElementById("feedback");
    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(showPosition);
    }

    else{
      x.innerHTML="Geolocation not supported";
    }
    function showPosition(position){
      x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    }
  }
  
  //Get location

   function webCamera(){
    var video=document.querySelector("#videoElement");
    navigator.getUserMedia=navigator.getUserMedia||navigator. webkitGetUsermedia||navigator.msGetUserMedia||navigator.oGetUserMedia;
    if(navigator.getUserMedia){
      navigator.getUserMedia({video:true},handleVidoe,videoError);
        
    }
    function handleVideo(stream){
      video.src=window.URL.createObjectURL(stream);
    }

    function videoError(e){

    }

  }
  
  //web camera 

  /*function messageMe(){
    if(!("Notification" in window)){
      alert("This browser does not support desktop notification");
    }

    else if(Notification.permission === "granted") {
      var notification = new notification("Hi there");
    }

    else if(Notification.permission !== "denied") {
      Notification.requestPermission().then(function(permission){
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
      });
    }
  } */

  //Notifications