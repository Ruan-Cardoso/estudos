/* eslint-disable no-unused-vars */
import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middewares/manipuladorDeErros.js";
import manipulador404 from "./middewares/manioulador404.js";

// documentacao moogodb
//https://www.mongodb.com/docs/manual/core/data-model-design/#std-label-data-modeling-embedding

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
});

const app = express();
routes(app);

app.use(manipulador404);

app.use(manipuladorDeErros);

export default app;
