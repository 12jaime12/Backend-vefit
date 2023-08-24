const mongoose = require("mongoose");

const LibrosSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    paginas: { type: Number, required: true },
    tematica: { type: String, required: true, trim: true },
    tiempoLectura: { type: String, required: true },
    rol: { type: String, enum: ["actual", "leido"] },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Libros = mongoose.model("Libros", LibrosSchema);
module.exports = Libros;
