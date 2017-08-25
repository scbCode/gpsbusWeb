
    var map ;
    var marker =[];
    var position = [-1.91289, -47.92582];
    var latlng = new google.maps.LatLng(position[0], position[1]);
    var lt=0;
    var lg=0;

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
    var lat_lng = {lat: -1.508672, lng: -47.42444};  
    var icon;
    var rota;

   var markerIcon= [];
   var markerImage = new google.maps.MarkerImage("icons/01.png",
                new google.maps.Size(32, 32),
                new google.maps.Point(0, 0),
                new google.maps.Point(32, 32));

   markerIcon.push(markerImage);
   var markerImage2 = new google.maps.MarkerImage("icons/02.png",
                new google.maps.Size(32, 32),
                new google.maps.Point(0, 0),
                new google.maps.Point(32, 32));
   markerIcon.push(markerImage2);
   var markerImage3 = new google.maps.MarkerImage("icons/03.png",
                new google.maps.Size(32, 32),
                new google.maps.Point(0, 0),
                new google.maps.Point(32, 32));
   markerIcon.push(markerImage3);
    var markerImage4 = new google.maps.MarkerImage("icons/04.png",
                new google.maps.Size(32, 32),
                new google.maps.Point(0, 0),
                new google.maps.Point(32, 32));
   markerIcon.push(markerImage4);

   var markerImage5 = new google.maps.MarkerImage("icons/05.png",
                new google.maps.Size(32, 32),
                new google.maps.Point(0, 0),
                new google.maps.Point(32, 32));
   markerIcon.push(markerImage5);


    var Linha01 = [
          {lat: -1.293621, lng: -47.924505},
          {lat: -1.296507, lng: -47.924360},
          {lat: -1.296291, lng: -47.921473},
          {lat: -1.296291, lng: -47.921473},
          {lat:-1.296435, lng: -47.918983},
          {lat:-1.300151, lng: -47.918695},
          {lat:-1.301522, lng: -47.918622},
          {lat:-1.303415, lng: -47.917777},
          {lat:-1.303484, lng: -47.918875},
          {lat:-1.301102, lng: -47.918993},
          {lat:-1.301702, lng: -47.920838},
          {lat:-1.300490, lng: -47.920935},
          {lat:-1.297702, lng: -47.921064},
          {lat:-1.296240, lng: -47.921146},
          {lat:-1.293462, lng: -47.921362},
          {lat:-1.293621, lng: -47.924505}
        ]; 


    var Linha02 = [
          {lat: -1.93621, lng: -47.924505},
          {lat: -1.296507, lng: -47.924360},
          {lat: -1.296291, lng: -47.921473},
          {lat: -1.296291, lng: -47.921473},
          {lat:-1.296435, lng: -47.918983},
          {lat:-1.300151, lng: -47.918695},
          {lat:-1.301522, lng: -47.918622},
          {lat:-1.303415, lng: -47.917777},
          {lat:-1.303484, lng: -47.918875},
          {lat:-1.301102, lng: -47.918993},
          {lat:-1.301702, lng: -47.920838},
          {lat:-1.300490, lng: -47.920935},
          {lat:-1.297702, lng: -47.921064},
          {lat:-1.296240, lng: -47.921146},
          {lat:-1.293462, lng: -47.921362},
          {lat:-1.293621, lng: -47.924505}
        ]; 
  
initMap();
  
function initMap() {  

  map = new google.maps.Map(document.getElementById('map'), {  
    zoom: 7,  
    center: lat_lng,  
    mapTypeId: google.maps.MapTypeId.TERRAIN  
  });  
     
$('#btnBuscar').on('click', function(){

    selectRota();  
    joinRoom(idroom); 
    addMarker(lat_lng);

});

}  


function selectRota(linha){
    if (linha == "Linha 01" ){drawRota(Linha01);}
    if (linha == "Linha 02" ){drawRota(Linha02);}
}

function drawRota(rotaCoord){
rota = new google.maps.Polyline({
          path: rotaCoord,
          geodesic: true,
          strokeColor: '#FF1000',
          strokeOpacity: 1.0,
          strokeWeight: 3
        });

  rota.setMap(map);
}


function addMarker(posit) { 

for (var i = 0; i <= 4; i++) {
icon=markerIcon[i];
  var marker = new google.maps.Marker({  
    position: posit,  
    map: map,
    icon: icon
  });  
  markers.push(marker);  
}
}


function transition(result){

        positi[idMark][0] = result[0];
        positi[idMark][1] = result[1];

        lt =  positi[idMark][0];
        lg =  positi[idMark][1];

        var coord = new google.maps.LatLng(lt,lg);    

        markers[idMark].setPosition(coord);
        markers[idMark].setVisible(true);

    }
    


function removerMarcadores(){

   markers = [];

 }



function removerRota(){
  rota.setMap(null);     

}





