const express = require("express");
const { create, deleteLibros } = require("../controllers/Libros.controllers");

const LibrosRouter = express.Router();

LibrosRouter.post("/create", create);
LibrosRouter.delete("/delete/:id", deleteLibros);

module.exports = { LibrosRouter };
