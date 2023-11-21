


function iniciou() {
    let home=document.getElementById("home");
    let body=document.getElementById("body");
    let animacao=document.getElementById("animacao");

  home.style.borderBottom="3px solid red";
  setTimeout (()=> {
  body.classList.remove("animacao");
},2000);
}


function enviar() {
  reposta= document.getElementById("resultado").innerHTML="Cadastrado com Sucesso!";

  let envia= document.getElementsByClassName(".envia");

  document.addEventListener("keypress", function(click) {
    if (click.key === "enter") {
    envia.click()
  }
  
  })
  
}


function aparece() {
  let sobre= document.getElementById("sobreNos");
  sobre.style.borderBottom="red solid 3px";
}


function midia() {
  let midia=document.getElementById("multimidia");
  midia.style.borderBottom="red solid 3px";
}

function conctos() {
  let contato=document.getElementById("contato");
  contato.style.borderBottom="red solid 3px";
}













function clique() {
 let artigo= document.getElementById("artigo");

  artigo.classList.add("my-element");
  setTimeout (()=> {
    artigo.classList.remove("my-element"); 
  },3000);
  AOS.init();

   
}

function girar() {
  let girar=document.getElementById("mudar");
  girar.classList.add("my-element");
  setTimeout(()=> {
    girar.classList.remove("my-element");
  },5000);

 li=girar.getElementsByTagName("li");
 for (i=0; i< girar.length; i++) {
  a=li[i].getElementsByTagName("a")[0];

 }

}


let dataBR= data.tolocalString('pt-br');
alert(dataBR);



