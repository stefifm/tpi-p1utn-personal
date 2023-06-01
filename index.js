const express = require("express");
const cors = require("cors");
require("./base-orm/sqlite-init.js");
const equiposRoutes = require("./routes/equipos.routes.js");
const pilotosRoutes = require("./routes/pilotos.routes.js");

require("dotenv").config();
console.log("WEBSITE_SITE_NAME", process.env.WEBSITE_SITE_NAME);

if (process.env.WEBSITE_SITE_NAME) {
  process.env.base = process.env.base_azure;
}

console.log("base", process.env.base);
console.log("NODE_ENV", process.env.NODE_ENV);

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

module.exports = app;
