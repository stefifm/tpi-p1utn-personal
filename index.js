const express = require("express");
require("./base-orm/sqlite-init.js");
const equiposRoutes = require("./routes/equipos.routes.js");
const pilotosRoutes = require("./routes/pilotos.routes.js");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenidos a la REST APi de F1!!!");
});

// Rutas de equipos

app.use(equiposRoutes);

// Rutas de pilotos

app.use(pilotosRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
