const mongoose = require("mongoose");

const GastosSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    rol: { type: String, enum: ["positivo", "negativo"] },
    cantidad: { type: Number, trim: true, required: true },
    descripcion: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

const Gastos = mongoose.model("Gastos", GastosSchema);
module.exports = Gastos;
