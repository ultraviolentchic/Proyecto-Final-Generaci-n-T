import { React } from 'react'
import { Route, Routes } from 'react-router-dom'
import Destinos from './paginas/destinos.jsx'
import Principal from './paginas/pagina principal/pagprincipal.jsx'
import Titulo from './componentes/titulo/titulo.jsx'
import Video from './componentes/video/elvideo.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Principal/>} />
      <Route path="/destinos" element={<Destinos/>} />
      </Routes>


    </>
  )
}

export default App
