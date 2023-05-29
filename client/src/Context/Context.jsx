import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getEquipos } from '../api/equipos-server'

export const F1Context = createContext()

export const F1ContextProvider = ({ children }) => {
  const [equipos, setEquipos] = useState([])

  const getEquiposData = async () => {
    const { data } = await getEquipos()
    setEquipos(data)
  }

  useEffect(() => {
    getEquiposData()
  }, [])

  return <F1Context.Provider value={{ equipos }}>{children}</F1Context.Provider>
}

F1ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
