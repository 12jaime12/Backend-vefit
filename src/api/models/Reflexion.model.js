const mongoose = require("mongoose");

const ReflexionSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    contenido: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Reflexion = mongoose.model("Reflexion", ReflexionSchema);
module.exports = Reflexion;
