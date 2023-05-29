import axios from 'axios'

const data = axios.create({
  baseURL: 'http://localhost:3000'
})

const getEquipos = () => data.get('/api/equipos')

export { getEquipos }
