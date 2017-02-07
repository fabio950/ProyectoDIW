var f1game;
var equipos;
var numEquipo;

$(document).ready(function () {
    equipos = ['mer', 'fer', 'wil', 'red', 'ind', 'ren', 'tor', 'sau', 'mcl', 'man', 'has'];
    numEquipo = getRandomInt(0, 11);

    $("#equipo").attr("src", "assests/img/equipos/" + equipos[numEquipo] + ".jpg");

    modalDificultad();
});

function onDropCajaEquipo(event) {
    event.preventDefault();
    var idPiloto = event.dataTransfer.getData("text");
    var idEquipo = document.getElementById(idPiloto).getAttribute("id-equipo");

    $("#" + idPiloto).attr("draggable", "false");

    if (f1game.coincidePilotoEnEquipo(idEquipo)) {
        f1game.anyadirAcierto();

        $("#" + idPiloto).addClass("animated flip");
        $("#" + idPiloto).css("border", "2px solid green");

        if (f1game.victoria()) {
            modalVictoria();
        }
    } else {
        pintarVidasRestantes();

        $("#" + idPiloto).addClass("animated shake");
        $("#" + idPiloto).css("border", "2px solid red");

        if (f1game.derrota()) {
            modalDerrota();
        }
    }
}

function onDragOverCajaEquipo(event) {
    event.preventDefault();
}

function onDragStartPiloto(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function pintarVidasRestantes() {
    $("#numeroVidas").attr("src", "assests/img/vidas/" + f1game.getNumVidas() + "-" + f1game.getNumVidasMaximas() + ".jpg");
}

function modalDificultad() {
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

function modalVictoria() {
    $("#f1ModalBody").children().remove();

    $(".modal-title").text("¡¡¡VICTORIA!!!");

    $("#f1Modal").modal("show");

    imgVictoria = "<img class='img-responsive center-block animated rubberBand' src='assests/img/trofeo.jpg'>";
    btnReintentar = "<button id='btnJugarDeNuevo' class='center-block btn btn-primary'>Jugar de nuevo</button>";

    $("#f1ModalBody").append(imgVictoria);
    $("#f1ModalFooter").append(btnReintentar);

    $("#btnJugarDeNuevo").click(function () {
        location.reload();
    });
}

function modalDerrota() {
    $("#f1ModalBody").children().remove();

    $(".modal-title").text("Derrota...");

    $("#f1Modal").modal("show");

    imgVictoria = "<img class='img-responsive center-block animated zoomIn' src='assests/img/game-over.jpg'>";
    btnReintentar = "<button id='btnReintentar' class='center-block btn btn-danger'>Reintentar</button>";

    $("#f1ModalBody").append(imgVictoria);
    $("#f1ModalFooter").append(btnReintentar);

    $("#btnReintentar").click(function () {
        location.reload();
    });
}

function onMouseOverAnimacionPiloto(event) {
    $("#" + event.target.id).css("transform", "scale(1.3, 1.3)");
}

function onMouseOutAnimacionPiloto(event) {
    $("#" + event.target.id).css("transform", "scale(1, 1)");
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}