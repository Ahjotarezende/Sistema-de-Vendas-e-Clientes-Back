//config inicial
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();

//forma de ler json
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const port = process.env.PORT || 5000;

//entregar uma porta
const DB_USER = process.env.DB_USER;
const DB_PWD = process.env.DB_PWD;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PWD}@apiloja.3hkm7zg.mongodb.net/bancoLoja?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port);
    console.log("Conectado");
  })
  .catch((err) => {
    console.log(err);
  });

//rotas
const personRoutes = require("./Routes/RoutesLoja");
app.use("/client", personRoutes);
app.use("/item", personRoutes);
app.use("/sale", personRoutes);
