const express = require("express");
const cors = require("cors");
require("express-async-errors");
require("./base-orm/sqlite-init.js");
const equiposRoutes = require("./routes/equipos.routes.js");
const pilotosRoutes = require("./routes/pilotos.routes.js");

require("dotenv").config();
console.log("WEBSITE_SITE_NAME", process.env.WEBSITE_SITE_NAME);

const app = express();
app.use(express.json());

// Para permitir CORS desde cualquier origen
app.use(
  cors({
    origin: "*"
  })
);

app.get("/", (req, res) => {
  res.send("Bienvenidos a la REST APi de F1!!!");
});

// Rutas de equipos

app.use(equiposRoutes);

// Rutas de pilotos

app.use(pilotosRoutes);

if (!module.parent) {
  const port = process.env.PORT || 3000;
  app.locals.fechaInicio = new Date();
  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
}

process.on("uncaughtException", (err) => {
  // si se cae el sevidor, logueamos la causa para poder analizarlo y corregirlo a posterior.
  console.log(`Uncaught Exception: ${err.message}`);
  process.exit(1);
  // el servidor se cae, tendria que haber otra app monitoriando el servidor y levantandolo nuevamente, ej pm2 (Process Manager 2)
});

module.exports = app;
