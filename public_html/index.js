var f1game;
var equipos;
var numEquipo;
var vidaMaxima;

$(document).ready(function () {
    equipos = ['mer', 'fer', 'wil', 'red', 'ind', 'ren', 'tor', 'sau', 'mcl', 'man', 'has'];
    numEquipo = getRandomInt(0,11);
    $("#equipo").attr("src", "assests/img/equipos/" + equipos[numEquipo] + ".jpg");
    modalDificultad();
});

function onDropHuecoTablero(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    if(f1game.coincidePilotoEnEquipo(data)){
        //pintar();
    } else {
        pintar();
        $("#" + data).css("filter", "grayscale(100%)");
    }
    //event.target.appendChild(document.getElementById(data));
}

function onDragOverHuecoTablero(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function pintar() {
    $("#numeroVidas").attr("src", "assests/img/" + f1game.getNumVidas() + "vida.jpg");
}

function modalDificultad() {
    btns = "<button id='5' data-dismiss='modal'>Fácil</button><button id='3' data-dismiss='modal'>Normal</button><button id='1' data-dismiss='modal'>Difícil</button>";
    
    $("#f1ModalBody").append(btns);
    
    $("#f1Modal").modal("show");
    
    
    $("#5").click(function(){
        vidaMaxima = 5;
        f1game = new F1Game(equipos[numEquipo], vidaMaxima);
        
        $("#numeroVidas").attr("src", "assests/img/vidas/" + vidaMaxima + "-" + f1game.getNumVidas() + ".jpg");
    });
    
    $("#3").click(function(){
        vidaMaxima = 3;
        f1game = new F1Game(equipos[numEquipo], vidaMaxima);
        
        $("#numeroVidas").attr("src", "assests/img/vidas/" + vidaMaxima + "-" + f1game.getNumVidas() + ".jpg");
    });
    
    $("#1").click(function(){
        vidaMaxima = 1;
        f1game = new F1Game(equipos[numEquipo], vidaMaxima);
        
        $("#numeroVidas").attr("src", "assests/img/vidas/" + vidaMaxima + "-" + f1game.getNumVidas() + ".jpg");
    });
}



// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}