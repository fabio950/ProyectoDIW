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
    var idEquipo = document.getElementById(data).getAttribute("id-equipo");
    
    $("#" + data).attr("draggable","false");
    
    if(f1game.coincidePilotoEnEquipo(idEquipo)){
        f1game.anyadirAcierto();
        $("#" + data).addClass("animated flip");
        $("#" + data).css("border", "2px solid green");
        
        if(f1game.victoria()){
            modalVictoria();
        }
    } else {
        pintar();
        $("#" + data).addClass("animated shake");
        //$("#" + data).css("filter", "grayscale(100%)");
        $("#" + data).css("border", "2px solid red");
        if(f1game.derrota()){
            modalDerrota();
        }
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
    $("#numeroVidas").attr("src", "assests/img/vidas/" + f1game.getNumVidas() + "-" + vidaMaxima + ".jpg");
}

function modalDificultad() {
    btns = "<div class='btn-group-vertical center-block botones-dificultad'>" + 
            "<button id='5' type='button' class='btn btn-info' data-dismiss='modal'>Fácil</button>" + 
            "<button id='3' type='button' class='btn btn-primary' data-dismiss='modal'>Normal</button>" + 
            "<button id='1' type='button' class='btn btn-danger' data-dismiss='modal'>Difícil</button>" + 
            "</div>";
    
    $("#f1ModalBody").append(btns);
    
    $("#f1Modal").modal("show");
    
    
    $("#5").click(function(){
        vidaMaxima = 5;
        f1game = new F1Game(equipos[numEquipo], vidaMaxima);
        
        $("#numeroVidas").attr("src", "assests/img/vidas/" + f1game.getNumVidas() + "-" + vidaMaxima + ".jpg");
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

function modalVictoria(){
    $("#f1ModalBody").children().remove();
    
    $("#f1Modal").modal("show");
    
    imgVictoria = "<img class='img-responsive center-block animated rubberBand' src='assests/img/trofeo.jpg'>";
    btnReintentar = "<button id='asd' class='center-block btn btn-primary'>Jugar de nuevo</button>";
    
    $("#f1ModalBody").append(imgVictoria);
    $("#f1ModalFooter").append(btnReintentar);
    
    $("#asd").click(function (){
        location.reload();
    });
}

function modalDerrota(){
    $("#f1ModalBody").children().remove();
    
    $("#f1Modal").modal("show");
    
    imgVictoria = "<img class='img-responsive center-block animated zoomIn' src='assests/img/game-over.jpg'>";
    btnReintentar = "<button id='asd' class='center-block btn btn-danger'>Reintentar</button>";
    
    $("#f1ModalBody").append(imgVictoria);
    $("#f1ModalFooter").append(btnReintentar);
    
    $("#asd").click(function (){
        location.reload();
    });
}



// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function onMouseOverAnimacionPiloto(event) {
    $("#" + event.target.id).css("transform", "scale(1.3, 1.3)");
}

function onMouseOutAnimacionPiloto(event) {
    $("#" + event.target.id).css("transform", "scale(1, 1)");
}