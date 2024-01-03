
// esse coloca  os menores antes do pivo e os maiores depois do pivo

const listaLivros = require('./array')

function encontraMenores(pivo, array){
  let menores = 0;

  for(let atual = 0; atual < array.length; atual++){
    let produtoAtual = array[atual]

    //elementos menores que o pivo 
    if ( produtoAtual.preco < pivo.preco){
      menores++
    }
  }

  trocaLugar(array, array.indexOf(pivo), menores)
  
  return array
}

function trocaLugar(array, de, para){
  const elem1 = array[de]
  const elem2 = array[para]

  array[para] = elem1
  array[de] = elem2 
}

function divideNoPivo(array) {
  let pivo = array[Math.floor(array.length / 2)]
  encontraMenores(pivo, array)
  let valoresMenores = 0 

  for (let analisado = 0; analisado < array.length; analisado++) {
    let atual = array[analisado];
    if (atual.preco <= pivo.preco && atual !== pivo){
      trocaLugar(array, analisado, valoresMenores)
      valoresMenores++
    }
  }

  return array 
}

console.log(divideNoPivo(listaLivros))
//console.log(encontraMenores(listaLivros[2], listaLivros))

module.exports = trocaLugar