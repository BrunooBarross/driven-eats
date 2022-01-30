let prato;
let bebida;
let sobremesa;
let valorPrato;
let valorBebida;
let valorSobremesa;
let total;

document.querySelector("#botao").disabled=true;
function habilitarBotao(){  
    if(prato !== undefined && bebida !== undefined && sobremesa !== undefined){  
        document.querySelector("#botao").disabled=false;      
        document.getElementById("botao").style.background = "#32B72F";
        document.getElementById("botao").innerHTML="<p>Finalizar pedido</p>";        
    }    
}
function escolherFrango(){   
    document.getElementById("frango").style.borderColor = "#32B72F";
    document.getElementById("sushi").style.borderColor = "white";
    document.getElementById("peixe").style.borderColor = "white";
    document.getElementById("check_frango").style.display= "block";
    document.getElementById("check_sushi").style.display= "none";
    document.getElementById("check_peixe").style.display= "none";
    prato = "Frango Yin Yang";
    valorPrato = 16.90;
    habilitarBotao()
    
}
function escolherSushi(){
    document.getElementById("sushi").style.borderColor = "#32B72F";
    document.getElementById("peixe").style.borderColor = "white";   
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("check_frango").style.display= "none";
    document.getElementById("check_sushi").style.display= "block";
    document.getElementById("check_peixe").style.display= "none";
    prato = "Barca Sushi";
    valorPrato = 30.90;
    habilitarBotao()
}
function escolherPeixe(){
    document.getElementById("peixe").style.borderColor = "#32B72F";
    document.getElementById("sushi").style.borderColor = "white";
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("check_frango").style.display= "none";
    document.getElementById("check_sushi").style.display= "none";
    document.getElementById("check_peixe").style.display= "block";
    prato = "Peixe Frito";
    valorPrato = 19.90;
    habilitarBotao()
}
function escolherCoca(){   
    document.getElementById("coca").style.borderColor = "#32B72F";
    document.getElementById("fanta").style.borderColor = "white";
    document.getElementById("heineken").style.borderColor = "white";
    document.getElementById("check_coca").style.display= "block";
    document.getElementById("check_fanta").style.display= "none";
    document.getElementById("check_heineken").style.display= "none";
    bebida = "Coca-Cola 350ml";
    valorBebida = 7.90;
    habilitarBotao()
}
function escolherFanta(){
    document.getElementById("fanta").style.borderColor = "#32B72F";
    document.getElementById("coca").style.borderColor = "white";   
    document.getElementById("heineken").style.borderColor = "white";
    document.getElementById("check_coca").style.display= "none";
    document.getElementById("check_fanta").style.display= "block";
    document.getElementById("check_heineken").style.display= "none";
    bebida = "Fanta 350ml";
    valorBebida = 6.90;
    habilitarBotao()
}
function escolherHeineken(){
    document.getElementById("heineken").style.borderColor = "#32B72F";
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("fanta").style.borderColor = "white";
    document.getElementById("check_coca").style.display= "none";
    document.getElementById("check_fanta").style.display= "none";
    document.getElementById("check_heineken").style.display= "block";
    bebida = "Heineken 330ml";
    valorBebida = 5.90;
    habilitarBotao()
}
function escolherPudim(){   
    document.getElementById("pudim").style.borderColor = "#32B72F";
    document.getElementById("morango").style.borderColor = "white";
    document.getElementById("crumble").style.borderColor = "white";
    document.getElementById("check_pudim").style.display= "block";
    document.getElementById("check_torta_morango").style.display= "none";
    document.getElementById("check_torta_crumble").style.display= "none";
    sobremesa = "Pudim";
    valorSobremesa = 7.90;
    habilitarBotao()
}
function escolherMorango(){
    document.getElementById("morango").style.borderColor = "#32B72F";
    document.getElementById("pudim").style.borderColor = "white";   
    document.getElementById("crumble").style.borderColor = "white";
    document.getElementById("check_pudim").style.display= "none";
    document.getElementById("check_torta_morango").style.display= "block";
    document.getElementById("check_torta_crumble").style.display= "none";
    sobremesa = "Torta de Morango";
    valorSobremesa = 10.90;
    habilitarBotao()
}
function escolherCrumble(){
    document.getElementById("crumble").style.borderColor = "#32B72F";
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("morango").style.borderColor = "white";
    document.getElementById("check_pudim").style.display= "none";
    document.getElementById("check_torta_morango").style.display= "none";
    document.getElementById("check_torta_crumble").style.display= "block";
    sobremesa = "Torta Crumble";
    valorSobremesa = 12.90;
    habilitarBotao()
}

const sombra = document.querySelector(".sombra");

function abrirModal(){
    sombra.classList.add('mostrar-sombra');
    total = valorPrato+valorBebida+valorSobremesa;    
    document.getElementById("comida").innerHTML = prato;
    document.getElementById("comida-preco").innerHTML = valorPrato.toFixed(2).toString().replace(".",",");
    document.getElementById("bebida").innerHTML = bebida;
    document.getElementById("bebida-preco").innerHTML = valorBebida.toFixed(2).toString().replace(".",",");
    document.getElementById("sobremesa").innerHTML = sobremesa;
    document.getElementById("sobremesa-preco").innerHTML = valorSobremesa.toFixed(2).toString().replace(".",",");
    document.getElementById("total").innerHTML = "R$ " + total.toFixed(2).toString().replace(".",",");
    const modal = document.querySelector(".modal-container");
    modal.classList.add('mostrar');    
}
function cancelarPedido(){    
    sombra.classList.remove('mostrar-sombra');
    const modal = document.querySelector(".modal-container");
    modal.classList.remove('mostrar');    
}
function finalizarPedido(){
    total = valorPrato+valorBebida+valorSobremesa;
    total  = total.toFixed(2);
    let mensagem;
    mensagem = "Olá, gostaria de fazer o pedido:"
    +"\n - Prato: "+ prato
    +"\n - Bebida: "+bebida
    +"\n - Sobremesa: "+sobremesa
    +"\nTotal: R$ "+total;    
    const url = "https://wa.me/5521999521936?text="
    +encodeURIComponent(mensagem)
    window.open(url, "_blank");
}

