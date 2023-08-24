const mongoose = require("mongoose");

const HabitosSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    rol: { type: String, enum: ["positivo", "negativo"] },
    descripcion: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

const Habitos = mongoose.model("Habitos", HabitosSchema);
module.exports = Habitos;
