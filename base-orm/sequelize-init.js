const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqlite:" + "./.data/f1.db");

const equipos = sequelize.define(
  "equipos",
  {
    IdEquipoF1: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    NombreEquipo: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El nombre del equipo no puede estar vacío"
        },
        len: {
          args: [5, 30],
          msg: "El nombre del equipo debe tener entre 5 y 30 caracteres"
        }
      },
      unique: {
        args: true,
        msg: "El nombre del equipo ya existe en la tabla"
      }
    }
  },

  {
    hooks: {
      beforeValidate: (equipo, options) => {
        if (typeof equipo.NombreEquipo === "string") {
          equipo.NombreEquipo = equipo.NombreEquipo.trim().toUpperCase();
        }
      }
    },

    timestamps: false
  }
);

const pilotos = sequelize.define(
  "pilotos",
  {
    IdPiloto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    NombrePiloto: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El nombre del piloto no puede estar vacío"
        },
        len: {
          args: [5, 50],
          msg: "El nombre del piloto debe tener entre 5 y 50 caracteres"
        }
      },
      unique: {
        args: true,
        msg: "El nombre del piloto ya existe en la tabla"
      }
    },
    FechaNacimiento: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "La fecha de nacimiento no puede estar vacía"
        }
      }
    },
    IdEquipoF1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El Id del equipo no puede estar vacío"
        }
      }
    },

    CantidadCarreras: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "La cantidad de carreras no puede estar vacía"
        }
      }
    },
    Campeon: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El campo campeon no puede estar vacío"
        }
      }
    }
  },
  {
    hooks: {
      beforeValidate: (piloto, options) => {
        if (typeof piloto.NombrePiloto === "string") {
          piloto.NombrePiloto = piloto.NombrePiloto.trim().toUpperCase();
        }
      }
    },
    timestamps: false
  }
);

module.exports = {
  sequelize,
  equipos,
  pilotos
};
