const express = require("express");
const {
  getAllPilotos,
  getPilotoById,
  createPiloto,
  updatePiloto,
  deletePiloto
} = require("../controllers/pilotos.controllers.js");

const router = express.Router();

router.get("/api/pilotos", getAllPilotos);
router.get("/api/pilotos/:id", getPilotoById);
router.post("/api/pilotos", createPiloto);
router.put("/api/pilotos/:id", updatePiloto);
router.delete("/api/pilotos/:id", deletePiloto);

module.exports = router;
