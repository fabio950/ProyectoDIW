var f1game;
var equipos;
var numEquipo;

$(document).ready(function () {
    equipos = ['mer', 'fer', 'wil', 'red', 'ind', 'ren', 'tor', 'sau', 'mcl', 'man', 'has'];
    numEquipo = getRandomInt(0, 11);
    mostrarModalDificultad();
    pintarCajaEquipo();
});

function mostrarModalDificultad() {
    btns = "<div class='btn-group-vertical center-block botones-dificultad'>" +
            "<button id='btnFacil' type='button' class='btn btn-info' data-dismiss='modal'>Fácil</button>" +
            "<button id='btnNormal' type='button' class='btn btn-primary' data-dismiss='modal'>Normal</button>" +
            "<button id='btnDificil' type='button' class='btn btn-danger' data-dismiss='modal'>Difícil</button>" +
            "</div>";
    $(".modal-title").text("Elige el nivel de dificultad");
    $("#f1ModalBody").append(btns);
    $("#f1Modal").modal("show");

    $("#btnFacil").click(function () {
        iniciarJuego(5);
    });

    $("#btnNormal").click(function () {
        iniciarJuego(3);
    });

    $("#btnDificil").click(function () {
        iniciarJuego(1);
    });
}

function iniciarJuego(vidaMaxima) {
    f1game = new F1Game(equipos[numEquipo], vidaMaxima, vidaMaxima);
    $("#numeroVidas").attr("src", "assests/img/vidas/" + f1game.getNumVidas() + "-" + f1game.getNumVidasMaximas() + ".jpg");
}

function pintarCajaEquipo() {
    $("#equipo").attr("src", "assests/img/equipos/" + equipos[numEquipo] + ".jpg");
}

function pintarVidasRestantes() {
    $("#numeroVidas").attr("src", "assests/img/vidas/" + f1game.getNumVidas() + "-" + f1game.getNumVidasMaximas() + ".jpg");
}

function mostrarModalVictoria() {
    $("#f1ModalBody").children().remove();
    $(".modal-content").addClass("panel-success");
    $(".modal-title").text("¡¡¡VICTORIA!!! Te han sobrado " + f1game.getNumVidas() + " vida/as");
    $("#f1Modal").modal("show");
    
    imgVictoria = "<img class='img-responsive center-block animated rubberBand' src='assests/img/trofeo.jpg'>";
    botonesModal = "<div class='btn-group'>" + 
            "<button type='button' id='btnJugarDeNuevo' class='btn btn-success'>Jugar de nuevo</button>" +
            "<button type='button' id='btnSalir' class='btn btn-default'>Salir</button>" +
            "</div>";
    
    $("#f1ModalBody").append(imgVictoria);
    $("#f1ModalFooter").append(botonesModal);

    $("#btnJugarDeNuevo").click(function () {
        location.reload();
    });
    
    $("#btnSalir").click(function () {
        close();
    });
}

function mostrarModalDerrota() {
    $("#f1ModalBody").children().remove();
    $(".modal-content").addClass("panel-danger");
    $(".modal-title").text("Derrota... Te has quedado sin vidas");
    $("#f1Modal").modal("show");

    imgDerrota = "<img class='img-responsive center-block animated zoomIn' src='assests/img/game-over.jpg'>";
    botonesModal = "<div class='btn-group'>" + 
            "<button type='button' id='btnReintentar' class='btn btn-danger'>Reintentar</button>" +
            "<button type='button' id='btnSalir' class='btn btn-default'>Salir</button>" +
            "</div>";

    $("#f1ModalBody").append(imgDerrota);
    $("#f1ModalFooter").append(botonesModal);

    $("#btnReintentar").click(function () {
        location.reload();
    });
    
    $("#btnSalir").click(function () {
        close();
    });
}

function onDragStartPiloto(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function onDropCajaEquipo(event) {
    event.preventDefault();
    var idPiloto = event.dataTransfer.getData("text");
    $("#" + idPiloto).attr("draggable", "false");

    if (f1game.coincidePilotoEnEquipo(getEquipoFromIdPiloto(idPiloto))) {
        f1game.anyadirAcierto();
        $("#" + idPiloto).addClass("animated flip");
        $("#" + idPiloto).css("border", "2px solid green");
        if (f1game.isVictoria()) {
            mostrarModalVictoria();
        }
    } else {
        pintarVidasRestantes();
        $("#" + idPiloto).addClass("animated shake");
        $("#" + idPiloto).css("border", "2px solid red");
        if (f1game.isDerrota()) {
            mostrarModalDerrota();
        }
    }
}

function onDragOverCajaEquipo(event) {
    event.preventDefault();
}

function onMouseOverAnimacionPiloto(event) {
    $("#" + event.target.id).css("transform", "scale(1.3, 1.3)");
}

function onMouseOutAnimacionPiloto(event) {
    $("#" + event.target.id).css("transform", "scale(1, 1)");
}

function getEquipoFromIdPiloto(idPiloto){
    var equipo = $("#" + idPiloto).attr("id-equipo");
    return equipo;
};

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}