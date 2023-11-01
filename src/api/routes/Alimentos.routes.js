const express = require("express");
const {
  create,
  deleteAlimentos,
} = require("../controllers/Alimentos.controllers");

const AlimentosRoutes = express.Router();

AlimentosRoutes.post("/create", create);
AlimentosRoutes.delete("/delete/:id", deleteAlimentos);

module.exports = AlimentosRoutes;
