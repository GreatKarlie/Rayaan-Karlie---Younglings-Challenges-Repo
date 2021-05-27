const latitudeA =  -33.957314;

const longitudeB = 18.403306;



function getLocation() { 

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(ready);

        function ready(lat,long){
            
            var test = document.getElementById("demo");
            var test1 = document.getElementById("demo1");
            var test2 = document.getElementById("demo2");
            
            var valuex;
            var valuey;
            var a = false;
        
            valuex = lat.coords.latitude - latitudeA;
            valuey = lat.coords.longitude - longitudeB;

            console.log((valuex * valuex + valuey * valuey )/111,139 *1000);
        

           if(distance >= 5){
                document.getElementById("form1").style.visibility = visible;
            }
            else {
                alert("you're out of bounds");
            }
        }
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }


