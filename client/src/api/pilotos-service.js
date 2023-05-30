import axios from 'axios'

const data = axios.create({
  baseURL: 'http://localhost:3000/api'
})

const getPilotos = (Nombre, Campeon, Pagina) =>
  data.get('/pilotos', { params: { Nombre, Campeon, Pagina } })
const getPiloto = (id) => data.get(`/pilotos/${id}`)
const createPiloto = (newPiloto) => data.post('/pilotos', newPiloto)
const updatePiloto = (id, updatedPiloto) => data.put(`/pilotos/${id}`, updatedPiloto)
const deletePiloto = (id) => data.delete(`/pilotos/${id}`)

export { getPilotos, getPiloto, createPiloto, updatePiloto, deletePiloto }
