const express = require("express");
const cors = require("cors");
require("./base-orm/sqlite-init.js");
const equiposRoutes = require("./routes/equipos.routes.js");
const pilotosRoutes = require("./routes/pilotos.routes.js");

const app = express();
app.use(express.json());
app.use(cors());

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
