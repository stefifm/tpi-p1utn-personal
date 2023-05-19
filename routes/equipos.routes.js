const express = require("express");
const {
  getAllEquipos,
  getEquipoById,
  createEquipo,
  updateEquipo,
  deleteEquipo
} = require("../controllers/equipos.controllers.js");

const router = express.Router();

router.get("/api/equipos", getAllEquipos);
router.get("/api/equipos/:id", getEquipoById);
router.post("/api/equipos", createEquipo);
router.put("/api/equipos/:id", updateEquipo);
router.delete("/api/equipos/:id", deleteEquipo);

module.exports = router;
