import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './botoncito.css'

function MiBoton() {
  return (
    <section className="textoboton">
    <h3>¿Listo para conocer las joyas escondidas en nuestro paisaje argentino?</h3>
    <Link to="/destinos">
      <button>VER LOS DESTINOS</button>
    </Link>
    </section>
  )
}

export default MiBoton