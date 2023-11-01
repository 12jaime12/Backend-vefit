const express = require("express");
const {
  create,
  deleteReflexion,
} = require("../controllers/Reflexion.controllers");

const ReflexionRouter = express.Router();

ReflexionRouter.post("/create", create);
ReflexionRouter.delete("/delete/:id", deleteReflexion);

module.exports = ReflexionRouter;
