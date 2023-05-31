import axios from 'axios'

const urlResource = 'http://localhost:3000/api/pilotos'

const getPilotos = async (NombrePiloto, Campeon, Pagina) => {
  const res = await axios.get(urlResource, {
    params: {
      NombrePiloto,
      Campeon,
      Pagina
    }
  })

  return res.data
}

const getPiloto = async (piloto) => {
  const res = await axios.get(`${urlResource}/${piloto}`)
  return res.data
}

const createUpdatePiloto = async (piloto) => {
  if (piloto.IdPiloto === 0) {
    await axios.post(urlResource, piloto)
  } else {
    await axios.put(`${urlResource}/${piloto.IdPiloto}`, piloto)
  }
}

const deletePiloto = async (piloto) => {
  await axios.delete(`${urlResource}/${piloto.IdPiloto}`)
}

export { getPilotos, getPiloto, createUpdatePiloto, deletePiloto }
