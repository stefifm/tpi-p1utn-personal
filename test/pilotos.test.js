const request = require("supertest");
const app = require("../index.js");

const pilotoAlta = {
  NombrePiloto: "Piloto " + (() => (Math.random() + 1).toString(36).substring(2))(),
  FechaNacimiento: new Date().toISOString(),
  IdEquipoF1: 1,
  CantidadCarreras: 100
};

const pilotoModificacion = {
  IdPiloto: 13,
  NombrePiloto: "Piloto " + (() => (Math.random() + 1).toString(36).substring(2))(),
  FechaNacimiento: new Date().toISOString(),
  IdEquipoF1: 2,
  CantidadCarreras: 200
};

describe("GET /api/pilotos", () => {
  it("Debería devolver todos los pilotos", async () => {
    const res = await request(app).get("/api/pilotos");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        items: expect.arrayContaining([
          expect.objectContaining({
            IdPiloto: expect.any(Number),
            NombrePiloto: expect.any(String),
            FechaNacimiento: expect.any(String),
            IdEquipoF1: expect.any(Number),
            CantidadCarreras: expect.any(Number)
          })
        ]),
        RegistrosTotal: expect.any(Number)
      })
    );
  });
});

describe("GET /api/pilotos/:id", () => {
  it("Debería devolver un piloto con el id 1", async () => {
    const res = await request(app).get("/api/pilotos/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        IdPiloto: expect.any(Number),
        NombrePiloto: expect.any(String),
        FechaNacimiento: expect.any(String),
        IdEquipoF1: expect.any(Number),
        CantidadCarreras: expect.any(Number)
      })
    );
  });
});

describe("POST /api/pilotos", () => {
  it("Debería devolver el piloto recién creado", async () => {
    const res = await request(app).post("/api/pilotos").send(pilotoAlta);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        IdPiloto: expect.any(Number),
        NombrePiloto: expect.any(String),
        FechaNacimiento: expect.any(String),
        IdEquipoF1: expect.any(Number),
        CantidadCarreras: expect.any(Number)
      })
    );
  });
});

describe("PUT /api/pilotos/:id", () => {
  it("Debería devolver el piloto con el id 13 modificado", async () => {
    const res = await request(app).put("/api/pilotos/13").send(pilotoModificacion);
    expect(res.statusCode).toEqual(200);
  });
});

describe("DELETE /api/pilotos/:id", () => {
  it("Debería devolver el piloto con el id 13 eliminado", async () => {
    const res = await request(app).delete("/api/pilotos/13");
    expect(res.statusCode).toEqual(200);
  });
});
