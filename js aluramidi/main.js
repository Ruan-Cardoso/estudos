//function tocaSom(){
//  document.querySelector('#som_tecla_pom').play()
//}

const listaDeTeclas =document.querySelectorAll('.tecla')

function tocaSom(seletorAudio){
  const elemento = document.querySelector(seletorAudio)
  if(elemento === null){
    alert('Elemento nao encontrado')
  }
 else if ( elemento != null ){
  elemento.play()

  }
}

let contador= 0

/*while(contador < listaDeTeclas.length ) {

  const tecla= listaDeTeclas[contador]
  const instrumento= tecla.classList[1];
  const idAldio = `#som_${instrumento}`
  tecla.onclick = function(){
    tocaSom(idAldio)
  }
  contador = contador + 1 ;
}*/
for(let contador= 0; contador < listaDeTeclas.length; contador++) {

  const tecla= listaDeTeclas[contador]
  const instrumento= tecla.classList[1];
  const idAldio = `#som_${instrumento}`
  tecla.onclick = function(){
    tocaSom(idAldio)
  }
   
tecla.onkeydown = function(event){
 if(event.code === 'Enter'|| event.code === 'Space'){
tecla.classList.add('ativa')
 }
}

tecla.onkeyup = function(){
  tecla.classList.remove('ativa')
}

}

