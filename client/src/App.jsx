import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import PilotosPages from './Pages/PilotosPages'
import EquiposPages from './Pages/EquiposPages'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='divBody'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/equipos'
            element={<EquiposPages />}
          />
          <Route
            path='/pilotos'
            element={<PilotosPages />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
