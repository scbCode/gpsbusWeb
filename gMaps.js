
    var map ;
    var marker =[];
    var position = [-1.91289, -47.92582];
    var latlng = new google.maps.LatLng(position[0], position[1]);

    var markers = [];

    var numDeltas = 100;
    var delay = 1; //milliseconds
    var i = 0;
    var deltaLat;
    var deltaLng;
    var idMark;
    var bounds;
    var ne;
    var sw;
    var positi= [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]; 

   // var positf= [{lat: -1.508672, lng: -47.42444},lat: -1.508672, lng: -47.42444}]; 


    var flightPlanCoordinates = [
          {lat: 37.772, lng: -122.214},
          {lat: 21.291, lng: -157.821},
          {lat: -18.142, lng: 178.431},
          {lat: -27.467, lng: 153.027}
        ]; 
  
initMap();
  var lat_lng = {lat: -1.508672, lng: -47.42444};  
  
function initMap() {  

  
  map = new google.maps.Map(document.getElementById('map'), {  
    zoom: 7,  
    center: lat_lng,  
    mapTypeId: google.maps.MapTypeId.TERRAIN  
  });  
  
    
$('#btnBuscar').on('click', function(){
   
    joinRoom(idroom); 
    addMarker(lat_lng);
    drawRota();

});


}  

function addMarker(posit) { 

for (var i = 0; i <= 3; i++) {

  var marker = new google.maps.Marker({  
    position: posit,  
    map: map  
  });  
  markers.push(marker);  
}
setMapOnAll();
}


function drawRota(){
 var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
}


function transition(result){

        i = 0;

       deltaLat = (result[0] -  positi[idMark][0])/numDeltas;
       deltaLng = (result[1] -  positi[idMark][1])/numDeltas;
       
       moveMarker();

    }
    
function moveMarker(){

        positi[idMark][0] += deltaLat;
        positi[idMark][1] += deltaLng;

        latlng =  {lat: positi[idMark][0], lng: positi[idMark][1] };

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


