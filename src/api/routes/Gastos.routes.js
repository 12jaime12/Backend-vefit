const express = require("express");
const { create, deleteGastos } = require("../controllers/Gastos.controllers");

const GastosRoutes = express.Router();

GastosRoutes.post("/create", create);
GastosRoutes.delete("/delete/:id", deleteGastos);

module.exports = GastosRoutes;
