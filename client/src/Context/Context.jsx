import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getEquipos } from '../api/equipos-server'
import { getPilotos, getPiloto, createUpdatePiloto, deletePiloto } from '../api/pilotos-service'

export const F1Context = createContext()

export const F1ContextProvider = ({ children }) => {
  const [equipos, setEquipos] = useState([])

  const TituloAccionABMC = {
    A: '(Agregar)',
    B: '(Eliminar)',
    M: '(Modificar)',
    C: '(Consultar)',
    L: '(Listado)'
  }
  const [AccionABMC, setAccionABMC] = useState('L')

  const [NombrePiloto, setNombrePiloto] = useState('')
  const [Campeon, setCampeon] = useState('')

  const [pilotos, setPilotos] = useState(null)
  const [piloto, setPiloto] = useState(null)
  const [RegistrosTotal, setRegistrosTotal] = useState(0)
  const [Pagina, setPagina] = useState(1)
  const [Paginas, setPaginas] = useState([])

  const getEquiposData = async () => {
    const { data } = await getEquipos()
    setEquipos(data)
  }

  useEffect(() => {
    getEquiposData()
  }, [])

  const buscarPilotos = async (_pagina) => {
    if (_pagina && _pagina !== Pagina) {
      setPagina(_pagina)
    } else {
      _pagina = Pagina
    }

    const data = await getPilotos(NombrePiloto, Campeon, _pagina)
    setPilotos(data.Items)
    setRegistrosTotal(data.RegistrosTotal)

    const arrPaginas = []
    for (let i = 1; i <= Math.ceil(data.RegistrosTotal / 10); i++) {
      arrPaginas.push(i)
    }
    setPaginas(arrPaginas)
  }

  return (
    <F1Context.Provider
      value={{
        equipos,
        NombrePiloto,
        setNombrePiloto,
        Campeon,
        setCampeon,
        pilotos,
        setPilotos,
        piloto,
        setPiloto,
        RegistrosTotal,
        setRegistrosTotal,
        Pagina,
        setPagina,
        Paginas,
        setPaginas,
        TituloAccionABMC,
        AccionABMC,
        setAccionABMC,
        buscarPilotos
      }}>
      {children}
    </F1Context.Provider>
  )
}

F1ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
