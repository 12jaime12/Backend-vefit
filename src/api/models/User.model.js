const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    apellidos: { type: String, required: true },
    telefono: { type: Number, required: true, trim: true, unique: true },
    gmail: { type: String, required: true, trim: true, unique: true },
    fechaN: { type: String, required: true },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: [validator.isStrongPassword],
      minlength: [8, "Min 8 characters"],
    },
    direccion: { type: String, required: true, trim: true },
    ciudad: { type: String, required: true, trim: true },
    provincia: { type: String, required: true, trim: true },
    pais: { type: String, required: true, trim: true },
    genero: { type: String, enum: ["hombre", "mujer"], required: true },
    rol: { type: String, enum: ["admin", "client"], default: "client" },
    icono: { type: String },
    confirmationCode: { type: Number, required: true },
    check: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    console.log(error);
    next("Error hashing password", error);
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
