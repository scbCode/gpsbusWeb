
var idroom;
var qntd;

// select dropdown-item
$('#dropdown li a').on('click', function(){

    // titulo descricao Linha
   $('#descricaoTitulo').html ($(this).text());

   //Mostrar descricao da Linha
   $('#descricaoLinha').fadeIn();
   $('#btnBuscar').fadeIn();

//linhas estaticas
if ($(this).text() == "Linha 01"){  idroom="1521598624"; }
if ($(this).text() == "Linha 02"){  idroom="126938133";}

//sair room anterior
  leaveRoom();
  setMapOffAll()
});
