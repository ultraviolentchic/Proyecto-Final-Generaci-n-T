import { Route, Routes } from 'react-router-dom'
import Titulo from '/src/componentes/titulo/titulo.jsx'
import Video from '/src/componentes/video/elvideo.jsx'
import MiBoton from '../../componentes/boton/botoncito'
import Footer from '../../componentes/footer/foot.jsx'

function Principal() {

  return (
    <>

        <Titulo></Titulo>
        <Video></Video>

        <MiBoton></MiBoton>
        <Footer />
        

    </>
  )
}

export default Principal

