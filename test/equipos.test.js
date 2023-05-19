const request = require("supertest");
const app = require("../index.js");

const equipoAlta = {
  NombreEquipo: "Equipo " + (() => (Math.random() + 1).toString(36).substring(2))()
};

const equipoModificacion = {
  IdEquipoF1: 12,
  NombreEquipo: "Equipo " + (() => (Math.random() + 1).toString(36).substring(2))()
};

describe("GET /api/equipos", () => {
  it("Debería devolver todos los equipos", async () => {
    const res = await request(app).get("/api/equipos").set("content-type", "application/json");
    expect(res.headers["content-type"]).toEqual("application/json; charset=utf-8");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          IdEquipoF1: expect.any(Number),
          NombreEquipo: expect.any(String)
        })
      ])
    );
  });
});

describe("GET /api/equipos/:id", () => {
  it("Debería devolver un equipo de F1", async () => {
    const res = await request(app).get("/api/equipos/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        IdEquipoF1: 1,
        NombreEquipo: expect.any(String)
      })
    );
  });
});

describe("POST /api/equipos", () => {
  it("Debería crear un equipo de F1", async () => {
    const res = await request(app).post("/api/equipos").send(equipoAlta);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        IdEquipoF1: expect.any(Number),
        NombreEquipo: expect.any(String)
      })
    );
  });
});

describe("PUT /api/equipos", () => {
  it("Debería devolver el equipo con el id 12 modificado", async () => {
    const res = await request(app).put("/api/equipos/12").send(equipoModificacion);
    expect(res.statusCode).toEqual(200);
  });
});

describe("DELETE /api/equipos", () => {
  it("Debería devolver el equipo con el id 12 eliminado", async () => {
    const res = await request(app).delete("/api/equipos/12");
    expect(res.statusCode).toEqual(200);
  });
});
