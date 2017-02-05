{
    var puzzle_test=new Puzzle(4);
    try{
        puzzle_test.isColocadaPieza(0);
        alert("ERROR en isColocadaPieza");
    }catch(ex){
        
    }
}



{
    var puzzle_test=new Puzzle(4);
    if(!puzzle_test.isColocadaPieza(1)===false){
        alert("Error en el test de isColocadaPieza");
    }
}

{
    var puzzle_test=new Puzzle(4);
    if(!puzzle_test.isQuitadaPieza(1)===true){
        alert("Error en el test de isQuitadaPieza");
    }
}

{
    var puzzle_test=new Puzzle(4);
    if(!puzzle_test.isColocadaPieza(1)===false)
        alert("Error en el isColocadaPieza");
    if(!puzzle_test.isLibreHuecoTablero(1)===true)
        alert("Error en el isLibreHuecoTablero");
    if(!puzzle_test.isPermitidoColocarPieza(1,3)===true){
        alert("Error en el is Permitido Colocar Pieza");
    }
    puzzle_test.colocarPieza(1,3);
    if(!puzzle_test.isColocadaPieza(1)===true){
        alert("Error en el ColocarPieza");
    }
    if(!puzzle_test.isQuitadaPieza(1)===false){
        alert("Error en el test de isQuitadaPieza");
    }
    if(!puzzle_test.getNumPosicionPiezaEnTablero(1)===3){
        alert("Error en el getNumPosicionPiezaEnTablero");
    }
}

{
    var puzzle_test=new Puzzle(4);
    puzzle_test.colocarPieza(1,3);
    
    if(!puzzle_test.isPermitidoQuitarPieza(1)===true){
        alert("Error en el isPermitidoQuitarPieza");
    }
    puzzle_test.quitarPieza(1);
    if(!puzzle_test.isQuitadaPieza(1)===true){
        alert("Error en el ColocarPieza");
    }
    if(!puzzle_test.isColocadaPieza(1)===false){
        alert("Error en el test de isQuitadaPieza");
    }
    if(!puzzle_test.getNumPosicionPiezaEnCaja(1)===1){
        alert("Error en el getNumPosicionPiezaEnTablero");
    }
}



{
    var puzzle_test=new Puzzle(4);
    if(!puzzle_test.isPermitidoColocarPieza(1,2)===true){
        alert("Error en el is Permitido Colocar Pieza");
    }
}

function assertTrue(sentence,phrase){
    if(sentence!==true){
        alert(phrase);
    }
}

function assertTrue(sentence,phrase){
    if(sentence!==false){
        alert(phrase);
    }
}

{
    var puzzle_test = new Puzzle(4);
    try{
        var puzzle_test = new Puzzle(0);
        alert("");
    }catch(ex){
        
    }
}

