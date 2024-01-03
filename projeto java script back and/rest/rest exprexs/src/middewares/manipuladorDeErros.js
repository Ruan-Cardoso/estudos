/* eslint-disable no-unused-vars */
import mongoose from "mongoose";
import ErroBase from "../Erros/ErroBase.js";
import RequisicaoIncorreta from "../Erros/RequisicaoIncorreta.js";
import ErroValidacao from "../Erros/ErroValidacao.js";
import NaoEncontrado from "../Erros/NaoEncontrado.js";

function manipuladorDeErros(erro, req, res, next){ // <=== middleware** inteceptador de erros
  
  console.log(erro);

  if(erro instanceof mongoose.Error.CastError){
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError){
    new ErroValidacao(erro).enviarResposta(res);
  }
  else if(erro instanceof ErroBase){
    erro.enviarResposta(res);
  }
  else{
    new ErroBase().enviarResposta(res);
  }
}



export default manipuladorDeErros;