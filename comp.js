import carros from "./carros.js"

 let containercarros = document.getElementById("container-carros")

 for(let carro of carros){

    let textoHTML = `
    <div class="carros">
    <table>
        <ul class="começo">
            <li>MARCA: ${carro.marca}</li>
            <li>MODELO: ${carro.modelo}</li> 
            <li>PREÇO: ${carro.preço}</li>
        </ul>
    </table>
    <img src="${carro.img}">
    <table>
        <ul>
            <li>ACELERAÇÃO: ${carro.aceleração}</li>
            <li>ARRANCADA: ${carro.arrancada}</li>
            <li>CONTROLE: ${carro.controle}</li>
            <li>FRENAGEM: ${carro.frenagem}</li>
            <li>VELOCIDADE: ${carro.velocidade}</li>
        </ul>
    </table>
   </div>
   <hr> 
    `

    containercarros.innerHTML += textoHTML 
 }