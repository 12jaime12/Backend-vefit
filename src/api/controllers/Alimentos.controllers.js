const Alimentos = require("../models/Alimentos.model");

const create = async (req, res, next) => {
  try {
    await Alimentos.syncIndexes();
    const newAlimento = new Alimentos(req.body);
    const AlimentosSave = await newAlimento.save();
    if (AlimentosSave) {
      return res.status(200).json({ [AlimentosSave.name]: "creada" });
    } else {
      return res.status(404).json("error en la creacion del Alimento");
    }
  } catch (error) {
    return next(error);
  }
};

const deleteAlimentos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const AlimentoDelete = await Alimentos.findByIdAndDelete(id);
    if (AlimentoDelete) {
      if (await Alimentos.findById(id)) {
        next("Error en el borrado del alimento");
      }
      return res.status(200).json({
        deleteObject: AlimentoDelete,
        test: (await Alimentos.findById(id)) ? "no ok delete" : "ok delete",
      });
    } else {
      return res.status(404).json("no se ha encontrado el alimento buscado");
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
  deleteAlimentos,
};
