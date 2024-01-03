import NaoEncontrado from "../Erros/NaoEncontrado.js";
import {livro, autor} from "../models/index.js";

class LivroControler {

  static async listarLivros(req,res, next){
    try{
      const buscaLivros = livro.find();

      req.resultado = buscaLivros;

      next();
    }catch(erro){
      next(erro);
    }
  }
  // controller chama o model Livro através 
  // do método livro.find({})
  static async listarLivroPorId(req,res,next){
    try{
      const id = req.params.id;
      const livroResultado = await livro.findById(id)
        .populate("autor", "nome")
        .exec();
      if (livroResultado !== null) {
        res.status(200).send(livroResultado);
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    }catch(erro){
      next(erro);
    }
  }

  static async cadastrarlivros(req, res,next){
    try{
      const novoLivro = await livro.create(req.body);
      res.status(200).json({message: "criado com sucesso", livro: novoLivro});
    } catch(erro){
      next(erro);
    }
  }

  static async atualizarLivro(req,res,next){
    try{
      const id = req.params.id;
      // !!!!!!!!!!!!!!!!!!!!!!!        
      const livroResultado = await livro.findByIdAndUpdate(id, req.body);
      if (livroResultado !== null) {
        res.status(200).send({message: "Livro atualizado com sucesso"});
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    }catch(erro){
      next(erro);
    }
  }

  static async excluirLivro (req, res,next) {
    try {
      const id = req.params.id;
      const livroResultado = await livro.findByIdAndDelete(id);
      if (livroResultado !== null) {
        res.status(200).send({message: "Livro removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async listarLivrosPorFiltro( req,res,next){
    
    try {
      const busca = await processaBusca(req.query);

      if (busca !== null){
        const livrosPorEditora = livro
          .find(busca)
          .populate("autor");

        req.resultado = livrosPorEditora;
        next();
      }else{
        res.status(200).send([]);
      }
    } catch(erro){
      next(erro);
    }
  }

 
}
async function processaBusca(parametros){
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;

  const regex = new RegExp(titulo, "i"); // primeira forma do regex

  let busca ={};
  // Observe que o regex e uma forma de abranger mais  as buscas  e tem duas formas de se fazer 
  if (editora) busca.editora = { $regex: editora, /* O "i" é para virar case sensitive"*/$options: "i" }; //sengunda forma do regex
  if (titulo) busca.titulo = regex;//quando esta na mesma linha nao precisa de {}
  // regex faz conque nao precise adicionar todo o testo
  if (minPaginas || maxPaginas) busca.Paginas = {};

  if (minPaginas) busca.Paginas.$gte = minPaginas;
  if (maxPaginas) busca.Paginas.$lte = maxPaginas;
  if(nomeAutor){
    const autores = await autor.findOne({nome: nomeAutor});
    if (autores !== null){
      busca.autores =autores._id;
    }else{
      busca = null;
    }
    
  }

  return busca; 
}
export default LivroControler;