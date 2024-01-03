import express from "express";
import AutoresControler from "../controller/autorController.js";

const routes = express.Router();

routes.get("/autores", AutoresControler.listarAutores);
routes.get("/autores/:id", AutoresControler.listarAutorPorId);
routes.post("/autores", AutoresControler.cadastrarAutor);
routes.put("/autores", AutoresControler.atualizarAutor);
routes.delete("/autores", AutoresControler.excluirAutor);


export default routes;
