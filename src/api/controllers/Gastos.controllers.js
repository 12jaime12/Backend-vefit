const Gastos = require("../models/Gastos.model");

const create = async (req, res, next) => {
  try {
    await Gastos.syncIndexes();
    const newGastos = new Gastos(req.body);
    const GastosSave = await newGastos.save();
    if (GastosSave) {
      return res.status(200).json({ [GastosSave.name]: "creado" });
    } else {
      return res.status(404).json("Error en la creacion del alimento");
    }
  } catch (error) {
    return next(error);
  }
};
const deleteGastos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const GastosDelete = await Gastos.findByIdAndDelete(id);
    if (GastosDelete) {
      if (await Gastos.findById(id)) {
        return res.status(404).json("Error al borrar");
      } else {
        return res.status(202).json({
          deleteObject: GastosDelete,
          test: (await Gastos.findById(id)) ? "no ok delete" : "ok delete",
        });
      }
    } else {
      return res.status(404).json("no se ha encontrado el gasto a borrar");
    }
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  create,
  deleteGastos,
};
