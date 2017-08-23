
    var map ;
    var marker =[];
    var position = [-1.91289, -47.92582];
    var latlng = new google.maps.LatLng(position[0], position[1]);

    var markers = [];

    var numDeltas = 100;
    var delay = 10; //milliseconds
    var i = 0;
    var deltaLat;
    var deltaLng;
    var idMark;
    var bounds;
    var ne;
    var sw;
    var posit= {lat: -1.508672, lng: -47.42444};  
  
initMap();
  
function initMap() {  

  var lat_lng = {lat: -1.508672, lng: -47.42444};  
  
  map = new google.maps.Map(document.getElementById('map'), {  
    zoom: 7,  
    center: lat_lng,  
    mapTypeId: google.maps.MapTypeId.TERRAIN  
  });  
  
    
$('#btnBuscar').on('click', function(){
   
    joinRoom(idroom); 
    addMarker(posit);

});


}  

function addMarker(posit) { 

for (var i = 0; i < 3; i++) {
  var marker = new google.maps.Marker({  
    position: posit,  
    map: map  
  });  
  markers.push(marker);  
}
setMapOnAll();
}


function transition(result){
        i = 0;
        deltaLat = (result[0] - position[0])/numDeltas;
        deltaLng = (result[1] - position[1])/numDeltas;
            console.log(result[0]);

        moveMarker();
    }
    
function moveMarker(){

        position[0] += deltaLat;
        position[1] += deltaLng;

        var latlng =  {lat: position[0], lng: position[1] };

        markers[idMark].setPosition(latlng);
        if(i!=numDeltas){
            i++;
            setTimeout(moveMarker, delay);
        }
    }


    

 function setMapOffAll() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
      }

 function setMapOnAll() {
         for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }


function removerMarcadores(){

         markers = [];

    }


