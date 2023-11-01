const express = require("express");
const { deleteHabitos, create } = require("../controllers/Habitos.controllers");

const HabitosRoutes = express.Router();

HabitosRoutes.post("/create", create);
HabitosRoutes.delete("/delete/:id", deleteHabitos);

module.exports = HabitosRoutes;
