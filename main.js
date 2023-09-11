alert('Hello World')
//pom
function TocaSomPom (idElementAudio) {
  document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


//enquanto
while (contador < listaDeTeclas.length) {

const tecla = listaDeTeclas[contador];

const instrumento = tecla.classList[1];

console.log(instrumento)

const idAudio = `#som_$(instrumento)`;

tecla.onclick = function () {
   tocaSom[idAudio]
}

listaDeTeclas[contador].onclick = function (){  
  tocaSom('#som_tecla_pom');
}

contador = contador + 1;

console.log(contador);
}