import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase {
  constructor(mensagem = "um ou mais dados formnecidos estao incorretos"){
    super(mensagem, 400);
  }
}
export default RequisicaoIncorreta;