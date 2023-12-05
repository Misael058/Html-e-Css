let titulo= document.getElementById("titulo");

function iniciou() {
  alert("alooo");
   titulo.style.borderBottom="4px solid red";
}


function verificar() {    
    let peso= document.getElementById("peso");
    let altura=document.getElementById("altura");
    let resultado = peso.value / (altura.value * altura.value) ;
    if (resultado < 18.5) {
        document.getElementById("resposta").innerHTML= math.floor(resultado )+ ": você esta a baixo do peso";
        
    }


      else if (resultado == 18.5 || resultado <= 24.99) {
        document.getElementById("resposta").innerHTML= math.floor(resultado ) + ": você esta no peso normal";
    }

      else if (resultado == 25 || resultado <= 29.99) {
        document.getElementById("resposta").innerHTML= math.floor(resultado )+ ": você esta com sobre peso";
    }
      else if ( resultado > 30) {
        document.getElementById("resposta").innerHTML= math.floor(resultado ) + ": você esta com obesidade";
    }


    alert("Obrigado, volte sempre!!")
}