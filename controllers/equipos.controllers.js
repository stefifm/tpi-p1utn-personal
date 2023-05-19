const { equipos } = require("../base-orm/sequelize-init.js");

const getAllEquipos = async (req, res) => {
  try {
    const equiposList = await equipos.findAll({
      attributes: ["IdEquipoF1", "NombreEquipo"]
    });
    res.status(200).json(equiposList);
  } catch (error) {
    res.status(500).send({
      message: "Error al obtener los equipos"
    });
  }
};

const getEquipoById = async (req, res) => {
  try {
    const equipo = await equipos.findOne({
      where: { IdEquipoF1: req.params.id },
      attributes: ["IdEquipoF1", "NombreEquipo"]
    });

    if (equipo) {
      res.status(200).json(equipo);
    } else {
      res.status(404).send({
        message: "No existe el equipo con el Id indicado"
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error al obtener el equipo por Id"
    });
  }
};

const createEquipo = async (req, res) => {
  try {
    const equipo = await equipos.create({
      NombreEquipo: req.body.NombreEquipo
    });

    res.status(201).json(equipo);
  } catch (error) {
    res.status(500).send({
      message: "Error al crear el equipo"
    });
  }
};

const updateEquipo = async (req, res) => {
  try {
    const equipo = await equipos.findOne({
      where: { IdEquipoF1: req.params.id },
      attributes: ["IdEquipoF1", "NombreEquipo"]
    });

    if (equipo) {
      const { NombreEquipo } = req.body;
      equipo.NombreEquipo = NombreEquipo;
      await equipo.save();
      res.status(200).json(equipo);
    } else {
      res.status(404).send({
        message: "No existe el equipo con el Id indicado"
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error al actualizar el equipo"
    });
  }
};

const deleteEquipo = async (req, res) => {
  try {
    const result = await equipos.destroy({
      where: { IdEquipoF1: req.params.id }
    });

    if (result === 0) {
      res.status(404).send({
        message: "No existe el equipo con el Id indicado"
      });
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    res.status(500).send({
      message: "Error al eliminar el equipo"
    });
  }
};

module.exports = {
  getAllEquipos,
  getEquipoById,
  createEquipo,
  updateEquipo,
  deleteEquipo
};
