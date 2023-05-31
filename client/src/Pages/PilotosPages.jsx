import { useContext } from 'react'
import { F1Context } from '../Context/Context'

import PilotosBuscar from '../components/Pilotos/PilotosBuscar'
import PilotosListados from '../components/Pilotos/PilotosListados'

function PilotosPages() {
  const { TituloAccionABMC, AccionABMC, pilotos } = useContext(F1Context)

  return (
    <>
      {AccionABMC === 'L' && <PilotosBuscar />}
      {AccionABMC === 'L' && pilotos?.length > 0 && <PilotosListados />}
    </>
  )
}

export default PilotosPages
