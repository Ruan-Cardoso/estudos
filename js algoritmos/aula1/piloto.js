const livros = require("./listaLivros")

//let atual = 0; ja esta no for

function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;

for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
  if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
    maisBarato = atual
  }
  console.log(livros[maisBarato])
}
return maisBarato
}

module.exports = menorValor;


//console.log(livros[maisBarato])