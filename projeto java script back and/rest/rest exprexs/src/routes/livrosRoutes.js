import express from "express";
import LivroController from "../controller/livroController.js";
import paginar from "../middewares/paginar.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros, paginar);
routes.get("/livros/busca", LivroController.listarLivrosPorFiltro, paginar);// <--- sempre deve estar na rodem correta porque o expres mistura com o :id 
routes.get("/livros/:id", LivroController.listarLivroPorId);               
routes.post("/livros", LivroController.cadastrarlivros);
routes.put("/livros", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.excluirLivro);




export default routes;
