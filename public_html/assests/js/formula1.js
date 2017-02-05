function F1Game(equipo, vidas, vidasMaximas) {
    if (vidas < 1) {
        throw "El numero de vidas debe ser mayor de 0";
    } else {
        this.equipo = equipo;
        this.vidas = vidas;
        this.vidasMaximas = vidasMaximas; 
        this.reset();
    }
}

F1Game.prototype.reset = function () {

};

F1Game.prototype.getNumVidas = function () {
    return this.vidas;
};

F1Game.prototype.getNumVidasMaximas = function () {
    return this.vidasMaximas;
};

F1Game.prototype.eliminarUnaVida = function () {
    this.vidas--;
};

F1Game.prototype.coincidePilotoEnEquipo = function (idEquipoPiloto) {
    if (idEquipoPiloto === this.equipo) {
        return true;
    } else {
        this.eliminarUnaVida();
        return false;
    }
};