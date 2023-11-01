const Reflexion = require("../models/Reflexion.model");

const create = async (req, res, next) => {
  try {
    await Reflexion.syncIndexes();
    const newReflexion = new Reflexion(req.body);
    const ReflexionSave = newReflexion.save();
    if (ReflexionSave) {
      return res.status(200).json({ [ReflexionSave.name]: "creada" });
    } else {
      return res.status(404).json("error al crear la reflexion");
    }
  } catch (error) {
    return next(error);
  }
};

const deleteReflexion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ReflexionToDelete = await Reflexion.findByIdAndDelete(id);
    if (ReflexionToDelete) {
      if (await Reflexion.findById(id)) {
        return res.status(404).json("error al borrar");
      } else {
        return res.status(200).json({
          deleteObject: ReflexionToDelete,
          test: (await Reflexion.findById(id)) ? "no ok delete" : "ok delete",
        });
      }
    } else {
      return res.status(404).json("no se ha encontrado la reflexion a borrar");
    }
  } catch (error) {
    return next(error);
  }
};
module.exports = { create, deleteReflexion };
