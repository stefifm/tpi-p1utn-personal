import axios from 'axios'

const data = axios.create({
  baseURL: 'http://localhost:3000/api'
})

const getEquipos = () => data.get('/equipos')

export { getEquipos }
