const { pilotos } = require("../base-orm/sequelize-init.js");
const { Op, ValidationError } = require("sequelize");

const getAllPilotos = async (req, res) => {
  try {
    const where = {};

    if (req.query.NombrePiloto !== undefined && req.query.NombrePiloto !== "") {
      where.NombrePiloto = {
        [Op.like]: `%${req.query.NombrePiloto}%`
      };
    }

    const Pagina = req.query.Pagina ?? 1;

    const TamanioPagina = 10;

    const { count, rows } = await pilotos.findAndCountAll({
      attributes: ["IdPiloto", "NombrePiloto", "FechaNacimiento", "IdEquipoF1", "CantidadCarreras"],
      order: [["NombrePiloto", "ASC"]],
      where,
      offset: (Pagina - 1) * TamanioPagina,
      limit: TamanioPagina
    });

    return res.json({
      items: rows,
      RegistrosTotal: count
    });
  } catch (error) {
    res.status(500).send({
      message: "Error al obtener los pilotos"
    });
  }
};

const getPilotoById = async (req, res, next) => {
  try {
    const items = await pilotos.findOne({
      attributes: ["IdPiloto", "NombrePiloto", "FechaNacimiento", "IdEquipoF1", "CantidadCarreras"],
      where: { IdPiloto: req.params.id }
    });

    if (items !== null) {
      res.json(items);
    } else {
      res.status(404).send({
        message: "No se encontró el piloto"
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error al obtener el piloto"
    });
  }
};

const createPiloto = async (req, res, next) => {
  try {
    const data = await pilotos.create({
      NombrePiloto: req.body.NombrePiloto,
      FechaNacimiento: req.body.FechaNacimiento,
      IdEquipoF1: req.body.IdEquipoF1,
      CantidadCarreras: req.body.CantidadCarreras
    });

    res.status(200).json(data.dataValues);
  } catch (error) {
    if (error instanceof ValidationError) {
      let msg = "";
      error.errors.forEach((element) => {
        msg += (element.path ?? "campo") + ": " + element.message + "\n";
      });
      res.status(400).send({
        message: msg
      });
    } else {
      throw error;
    }
  }
};

const updatePiloto = async (req, res, next) => {
  try {
    const data = await pilotos.update(
      {
        NombrePiloto: req.body.NombrePiloto,
        FechaNacimiento: req.body.FechaNacimiento,
        IdEquipoF1: req.body.IdEquipoF1,
        CantidadCarreras: req.body.CantidadCarreras
      },
      {
        where: { IdPiloto: req.params.id }
      }
    );

    if (!data)
      return res.status(404).send({
        message: "No se encontró el piloto"
      });

    res.sendStatus(200);
  } catch (error) {
    if (error instanceof ValidationError) {
      let msg = "";
      error.errors.forEach((element) => {
        msg += element.path + ": " + element.message + "\n";
      });
      res.status(400).send({
        message: msg
      });
    } else {
      throw error;
    }
  }
};

const deletePiloto = async (req, res, next) => {
  try {
    const filasBorradas = await pilotos.destroy({
      where: { IdPiloto: req.params.id }
    });

    if (filasBorradas === 0) {
      res.status(404).send({
        message: "No se encontró el piloto"
      });
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      const messages = error.errors.map((x) => x.message);
      res.status(400).send({
        message: messages
      });
    } else {
      throw error;
    }
  }
};

module.exports = {
  getAllPilotos,
  getPilotoById,
  createPiloto,
  updatePiloto,
  deletePiloto
};
