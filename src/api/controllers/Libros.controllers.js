const Libros = require("../models/Libros.model");

const create = async (req, res, next) => {
  try {
    await Libros.syncIndexes();
    const newLibro = new Libros(req.body);
    const LibroSave = await newLibro.save();
    if (LibroSave) {
      return res.status(200).json({ [LibroSave.name]: "creado" });
    } else {
      return res.status(404).json("error en la creacion del libro");
    }
  } catch (error) {
    return next(error);
  }
};

const deleteLibros = async (req, res, next) => {
  try {
    const { id } = req.params;
    const LibroToDelete = await Libros.findByIdAndDelete(id);
    if (LibroToDelete) {
      if (await Libros.findById(id)) {
        return res.status(404).json("error al borrar el libro");
      } else {
        return res.status(404).json({
          deleteObject: LibroToDelete,
          test: (await Libros.findById(id)) ? "no ok delete" : "ok delete",
        });
      }
    } else {
      return res.status(404).json("no se ha encontrado el libro buscado");
    }
  } catch (error) {
    return next(error);
  }
};
module.exports = { create, deleteLibros };
