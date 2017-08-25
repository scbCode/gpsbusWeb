            var _warpclient;
            var nameId = Math.random();;
            var roomsText = "";
            var inRoom = false;
            var roomId = "";
            var latitude="";
            var longitude="";
            var apiKey = "7e3ed36d2af8881d64a6dc61bf8fcb5a628c673088ae592915134f82b1a68c18";
            var secreteKey = "27e844a911519c4d01d5ad6a91edc7ac94465a64f8ccfce911f41394f86b71cf";

            function onConnectDone(res)
            {
                    _warpclient.getAllRooms();


            }
            
            function onGetAllRoomsDone(rooms)
            {
              console.log("conect");
               //warpclient.getLiveRoomInfo("1521598624");

            }

            
            function onGetLiveRoomInfo(room)
            {
            }
            
            function onJoinRoomDone(room)
            {
                if(room.getResult() == AppWarp.ResultCode.Success)
                {
                    _warpclient.subscribeRoom(room.getRoomId());
                }
            }
            
            function onSubscribeRoomDone(room)
            {
                if(room.getResult() == AppWarp.ResultCode.Success)
                {
                    inRoom = true;
                    roomId = room.getRoomId();

                //Adicionar Nome linha em barra superior
                $("#linhaBarraSup").html("<h3> : "+room.getName()+"</h3>") ;

                }
            }
            
            function onLeaveRoomDone(room)
            {
                if(room.getResult() == AppWarp.ResultCode.Success)
                {
                    _warpclient.unsubscribeRoom(room.getRoomId());
                }
            }
            
            function onUnsubscribeRoomDone(room)
            {
                if(room.getResult() == AppWarp.ResultCode.Success)
                {
                    inRoom = false;
                    _warpclient.getAllRooms();
                //     $("#chat").html("");

                }
            }
            var coordenadas;
            

            function onChatReceived(chat)
            {

            coordenadas = ""+chat.getChat();

            // var result = [coordenadas[0], coordenadas[1]];
            //transition(result);
            filtroMsg(coordenadas);
            console.log(coordenadas);
            }


            function filtroMsg(msg){

                var coord;         
                var cdnda= JSON.parse(msg);

                 console.log(cdnda["id"]);

                 latitude = cdnda["latt"];
                 longitude = cdnda["log"];
                 idMark=cdnda["id"];
                 coord=[latitude,longitude];
                 
                 transition(coord);
            

            }
            
            function joinRoom(id)
            {
                if(inRoom == false)
                {
                    console.log("rooomjoin");
                    _warpclient.joinRoom(id);
                }
            }
            
            function leaveRoom()
            {
                _warpclient.leaveRoom(roomId);
                // $("#roomInfo").html("Connected");
            }

$(document).ready(function(){
         
                        AppWarp.WarpClient.initialize(apiKey, secreteKey);

                        _warpclient = AppWarp.WarpClient.getInstance();
                        _warpclient.setResponseListener(AppWarp.Events.onConnectDone, onConnectDone);
                        _warpclient.setResponseListener(AppWarp.Events.onGetAllRoomsDone, onGetAllRoomsDone);
                        _warpclient.setResponseListener(AppWarp.Events.onGetLiveRoomInfoDone, onGetLiveRoomInfo);
                        _warpclient.setResponseListener(AppWarp.Events.onJoinRoomDone, onJoinRoomDone);
                        _warpclient.setResponseListener(AppWarp.Events.onSubscribeRoomDone, onSubscribeRoomDone);
                        _warpclient.setResponseListener(AppWarp.Events.onLeaveRoomDone, onLeaveRoomDone);
                        _warpclient.setResponseListener(AppWarp.Events.onUnsubscribeRoomDone, onUnsubscribeRoomDone);
                        _warpclient.setNotifyListener(AppWarp.Events.onChatReceived, onChatReceived);
                        _warpclient.connect(nameId);
                   
                });





