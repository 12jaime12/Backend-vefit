const mongoose = require("mongoose");

const AlimentosSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    cal: { type: Number, required: true },
    supermercado: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Alimentos = mongoose.model("Alimentos", AlimentosSchema);
module.exports = Alimentos;
