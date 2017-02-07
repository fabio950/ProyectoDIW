function F1Game(equipo, vidas, vidaMaximas) {
    if (vidas < 1  || vidaMaximas < 1) {
        throw "El numero de vidas debe ser mayor de 0";
    } else {
        this.equipo = equipo;
        this.vidas = vidas;
        this.vidaMaximas = vidaMaximas; 
        this.aciertos = 0;
    }
}

F1Game.prototype.getEquipo = function () {
    return this.equipo;
};

F1Game.prototype.getNumVidas = function () {
    return this.vidas;
};

F1Game.prototype.getNumVidasMaximas = function () {
    return this.vidaMaximas;
};

F1Game.prototype.eliminarUnaVida = function () {
    this.vidas--;
};

F1Game.prototype.getNumAciertos = function () {
    return this.aciertos;
};

F1Game.prototype.anyadirAcierto = function () {
    this.aciertos++;
};

F1Game.prototype.coincidePilotoEnEquipo = function (idEquipoPiloto) {
    if (idEquipoPiloto === this.equipo) {
        return true;
    } else {
        this.eliminarUnaVida();
        return false;
    }
};

F1Game.prototype.victoria = function () {
    if(this.getNumAciertos()===2){
        return 1;
    }
};

F1Game.prototype.derrota = function () {
    if(this.getNumVidas()===0){
        return -1;
    }
};