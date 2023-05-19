const db = require("aa-sqlite");

const crearBaseDatos = async () => {
  await db.open("./.data/f1.db");

  let existe = false;
  let res = null;

  // TABLA EQUIPOS
  res = await db.get(
    `
      SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table'
      and name = 'equipos'
    `,
    []
  );

  if (res.contar > 0) existe = true;

  if (!existe) {
    await db.run(
      `
        CREATE table IF NOT EXISTS equipos (
          IdEquipoF1 INTEGER PRIMARY KEY AUTOINCREMENT,
          NombreEquipo TEXT NOT NULL UNIQUE
        );
      `
    );
    console.log("Tabla equipos creada!!");

    await db.run(
      `
        INSERT INTO equipos values 
          (1, "FERRARI"), (2, "RED BULL RACING"), (3, "MERCEDES"), (4, "ASTON MARTIN"), (5, "ALPINE"), 
          (6, "ALFA ROMEO"), (7, "WILLIAMS"), (8, "ALPHA TAURI"), (9, "HAAS F1 TEAM"), (10, "MCLAREN")
      `
    );
  }

  existe = false;

  // TABLA PILOTOS
  res = await db.get(
    `
      SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table'
      and name = 'pilotos'
    `,
    []
  );

  if (res.contar > 0) existe = true;

  if (!existe) {
    await db.run(
      `
        CREATE table IF NOT EXISTS pilotos (
          IdPiloto INTEGER PRIMARY KEY AUTOINCREMENT,
          NombrePiloto TEXT NOT NULL UNIQUE,
          FechaNacimiento TEXT NOT NULL,
          IdEquipoF1 INTEGER NOT NULL,
          CantidadCarreras INTEGER NOT NULL,
          FOREIGN KEY (IdEquipoF1) REFERENCES equipos (IdEquipoF1)
        );
      `
    );
    console.log("Tabla pilotos creada!!");

    await db.run(
      `
        INSERT INTO pilotos values 
        (1, "FERNANDO ALONSO", "1981-07-29", 4, 361),
        (2, "CHARLES LECLERC", "1997-10-16", 1, 107),
        (3, "ALEXANDER ALBON", "1996-03-23", 7, 64),
        (4, "VALTTERI BOTTAS", "1989-08-28", 6, 205),
        (5, "MAX VERSTAPPEN", "1997-09-30", 2, 168),
        (6, "KEVIN MAGNUSSEN", "1992-10-05", 9, 146),
        (7, "LANDO NORRIS", "1999-11-13", 10, 87),
        (8, "GEORGE RUSSELL", "1998-02-15", 3, 87),
        (9, "PIERRE GASLY", "1996-02-07", 5, 113),
        (10, "YUKI TSUNODA", "2000-05-11", 8, 47)
      `
    );
  }

  db.close();
};

crearBaseDatos();

module.exports = crearBaseDatos;
