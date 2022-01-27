let prato = "";
let bebida = "";
let sobremesa ="";
let valorPrato;
let valorBebida;
let valorSobremesa;


document.querySelector("#botao").disabled=true;


function habilitarBotao(){  
    if(prato !== "" && bebida !== "" && sobremesa !== ""){  
        document.querySelector("#botao").disabled=false;      
        document.getElementById("botao").style.background = "green";
        document.getElementById("botao").innerHTML="<p>Finalizar pedido</p>";
    }
}

function escolherFrango(){   
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("sushi").style.borderColor = "white";
    document.getElementById("peixe").style.borderColor = "white";
    prato = "Frango Yin Yang";
    valorPrato = 16.90;
    habilitarBotao()
    
}
function escolherSushi(){
    document.getElementById("sushi").style.borderColor = "green";
    document.getElementById("peixe").style.borderColor = "white";   
    document.getElementById("frango").style.borderColor = "white";
    prato = "Barca Sushi";
    valorPrato = 30.90;
    habilitarBotao()
}
function escolherPeixe(){
    document.getElementById("peixe").style.borderColor = "green";
    document.getElementById("sushi").style.borderColor = "white";
    document.getElementById("frango").style.borderColor = "white";
    prato = "Peixe Frito";
    valorPrato = 19.90;
    habilitarBotao()
}
function escolherCoca(){   
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("fanta").style.borderColor = "white";
    document.getElementById("heineken").style.borderColor = "white";
    bebida = "Coca-Cola 350ml";
    valorBebida = 7.90;
    habilitarBotao()
}
function escolherFanta(){
    document.getElementById("fanta").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";   
    document.getElementById("heineken").style.borderColor = "white";
    bebida = "Fanta 350ml";
    valorBebida = 6.90;
    habilitarBotao()
}
function escolherHeineken(){
    document.getElementById("heineken").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("fanta").style.borderColor = "white";
    bebida = "Heineken 330ml";
    valorBebida = 5.90;
    habilitarBotao()
}
function escolherPudim(){   
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("morango").style.borderColor = "white";
    document.getElementById("crumble").style.borderColor = "white";
    sobremesa = "Pudim";
    valorSobremesa = 7.90;
    habilitarBotao()
}
function escolherMorango(){
    document.getElementById("morango").style.borderColor = "green";
    document.getElementById("pudim").style.borderColor = "white";   
    document.getElementById("crumble").style.borderColor = "white";
    sobremesa = "Torta de Morango";
    valorSobremesa = 10.90;
    habilitarBotao()
}
function escolherCrumble(){
    document.getElementById("crumble").style.borderColor = "green";
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("morango").style.borderColor = "white";
    sobremesa = "Torta Crumble";
    valorSobremesa = 12.90;
    habilitarBotao()
}

function finalizarPedido(){
    let total = valorPrato+valorBebida+valorSobremesa;
    alert ("teste");
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}