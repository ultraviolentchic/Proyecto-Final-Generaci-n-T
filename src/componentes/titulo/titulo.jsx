import { React } from 'react'
import './titulo.css'
import '/src/componentes/colores.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Titulo() {
  return (


    <div className='arriba'>

      <section className='titulo'>

        <h1>TURISMO EN EL NOROESTE</h1>
        <h2>de Argentina para el mundo</h2>

        </section>

        <nav>
          <ul>
            <li><Link to={"/alojamientos"}>Alojamientos</Link></li>
            <li>Inicio</li>
            <li><Link to={"/destinos"}>Destinos</Link>
            </li>
            

          </ul>
        </nav>

      <div className='abajo'>
        <h4></h4>
        <h4></h4>
        <h4></h4>

      </div>


    </div>
  )
}

export default Titulo