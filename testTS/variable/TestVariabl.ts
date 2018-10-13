/*
Klasa testujaca zasieg roznych zmiennych w TS
 */

class TestVariabl {


  varFunction(){
    var i = 30;
    for(var i = 0; i<5; i++){
      console.log("VAR PETLA "+i);
    }
    console.log("VAR POZA PETLA: "+i)
  }

  letFunction(){
    let i = 50;
    for(let i = 0; i<5; i++){
      console.log("LET PETLA "+i);
    }
    console.log("LET POZA PETLA: "+i)
  }

  constFunction(){
    const i = 50;
    console.log('STALA WARTOSC i ' + i)
  }
}

let x = new TestVariabl();
x.constFunction();
x.letFunction()
x.varFunction()
