function Puzzle(numPiezas){
    if(numPiezas<1)
         throw "El numero de piezas debe ser mayor de 0";
    else{
        this.numPiezas = numPiezas;
        this.estado = [];
        this.reset();
    }
};

Puzzle.prototype.reset=function(){
    this.estado = [];
    numeroPiezas = this.getNumPiezas();
    for(i=0;i<numeroPiezas;i++){
        this.estado.push(-(i+1));
    }
};
Puzzle.prototype.getNumPosicionPiezaEnCaja=function(idPieza){
    if (idPieza < 1){
        throw "El numero de pieza debe ser mayor de 0";
    }
    if( idPieza > this.idPiezas){
        throw "El numero de pieza debe ser menor de " + this.idPiezas;
    }
    if(this.isColocadaPieza(idPieza)){
         throw "La pieza no está en la caja";
    }
    return -this.estado[idPieza-1];
};
Puzzle.prototype.getNumPosicionPiezaEnTablero=function(idPieza){
    if (idPieza < 1){
        throw "El numero de pieza debe ser mayor de 0";
    }
    if( idPieza > this.idPiezas){
        throw "El numero de pieza debe ser menor de " + this.idPiezas;
    }
    if(this.isQuitadaPieza(idPieza)){
         throw "La pieza no está en en el tablero";
    }
    return this.estado[idPieza-1];
};

Puzzle.prototype.getNumPiezas = function(){
    return this.numPiezas;
};

Puzzle.prototype.isLibreHuecoTablero = function (idHuecoTablero){
    if(idHuecoTablero==0 || idHuecoTablero>this.numPiezas || idHuecoTablero <-this.numPiezas){
            throw "El numero del hueco de tablero es incorrecto";
    }else{
        i=0;
        while(i<this.estado.length){
            if(this.estado[i]===idHuecoTablero)
                return false;
            i++;
        }
        return true;
    }
};
Puzzle.prototype.isPermitidoColocarPieza = function (idPieza, idHuecoTablero){
    if(idPieza<1 || idPieza>this.numPiezas){
        throw "El numero de la pieza es incorrecto";
    }else{
        if(idHuecoTablero==0 || idHuecoTablero>this.numPiezas || idHuecoTablero <-this.numPiezas){
            throw "El numero del hueco de tablero es incorrecto";
        }
        else{
            if(this.isColocadaPieza(idPieza))
            return false;
        if(this.isLibreHuecoTablero(idHuecoTablero))
            return true;
        else
            return false;
        }        
    }
};
Puzzle.prototype.isPermitidoQuitarPieza = function (idPieza){
    if(idPieza<1 || idPieza>this.numPiezas){
        throw "El numero de la pieza es incorrecto";
    }else{
        if(this.isQuitadaPieza(idPieza))
            return false;
        else
            return true;
    }
    
};
Puzzle.prototype.isColocadaPieza = function(idPieza){
    if(idPieza<1 || idPieza>this.numPiezas){
        throw "El numero de la pieza es incorrecto";
    }else{
        if(this.estado[idPieza-1]>0)
            return true;
        else
            return false;
    }
};

Puzzle.prototype.isQuitadaPieza = function(idPieza){
    if(idPieza<1 || idPieza>this.numPiezas){
        throw "El numero de la pieza es incorrecto";
    }else{
        if(this.estado[idPieza-1]<0)
            return true;
    else
            return false; 
    }
    
};

Puzzle.prototype.colocarPieza = function(idPieza,idHuecoTablero){
    if(this.isPermitidoColocarPieza(idPieza,idHuecoTablero))
        this.estado[idPieza-1]=idHuecoTablero;
    else
        throw "La pieza no se puede colocar";
};
Puzzle.prototype.quitarPieza = function(idPieza){
    if(this.isPermitidoQuitarPieza(idPieza))
        this.estado[idPieza-1]=-idPieza;
    else
        throw "La pieza no se puede quitar";
};
Puzzle.prototype.isResuelto = function(){
    i=0;
    while(i<this.estado.length){
        if(this.estado[i]!=i+1)
            return false;
        i++;
    }
    return true;
    
};


Puzzle.prototype.onDragStartPiezaSinPoner = function(event){
    event.dataTransfer.setData("text",event.target.id);
};

Puzzle.prototype.onDragStartPiezaPuesta = function(event){
    event.dataTransfer.setData("text",event.target.id);
};

Puzzle.prototype.onDropPiezaSinPoner = function(event){
    //alert(event.target);
    event.preventDefault();
    var idNuevo = event.dataTransfer.getData("text");
    var srcAntigua = document.getElementById(idNuevo).src;
    document.getElementById(idNuevo).src = event.target.src;
    event.target.src = srcAntigua;
};

Puzzle.prototype.onDropPiezaPuesta = function(event){
    //alert(event.target);
    event.preventDefault();
    var idNuevo = event.dataTransfer.getData("text");
    //event.target.replaceChild(document.getElementById(idNuevo),event.target);
    var srcAntigua = document.getElementById(idNuevo).src;
    document.getElementById(idNuevo).src = event.target.src;
    event.target.src = srcAntigua;
};

Puzzle.prototype.onDragOverPiezaSinPoner = function(event){
    event.preventDefault();    
};

Puzzle.prototype.onDragOverPiezaPuesta = function(event){
    event.preventDefault();
};



