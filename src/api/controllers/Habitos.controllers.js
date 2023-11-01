const Habitos = require("../models/Habitos.model");

const create = async (req, res, next) => {
  try {
    await Habitos.syncIndexes();
    const newHabitos = new Habitos(req.body);
    const HabitosSave = await newHabitos.save();
    if (HabitosSave) {
      return res.status(200).json({ [HabitosSave.name]: "creado" });
    } else {
      return res.status(404).json("error en la creacion del habito");
    }
  } catch (error) {
    return next(error);
  }
};

const deleteHabitos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const HabitoToDelete = await Habitos.findByIdAndDelete(id);
    if (HabitoToDelete) {
      if (await Habitos.findById(id)) {
        return res.status(404).json("error al borrar el habito");
      } else {
        return res.status(200).json({
          deleteObject: HabitoToDelete,
          test: (await Habitos.findById(id)) ? "no ok delete" : "ok delete",
        });
      }
    } else {
      return res.status(404).json("no se ha encontrado el habito buscado");
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { create, deleteHabitos };
