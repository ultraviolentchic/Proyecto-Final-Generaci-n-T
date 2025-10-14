import { Route, Routes } from "react-router-dom";
import Titulo from "../../componentes/titulo/titulo";
import Tarjeta from "./tarjeta/tarjeta";

function Destinos() {
    return (
        <>
        <Titulo></Titulo>
        <Tarjeta data={destinosdata.json}></Tarjeta>

        </>
    )
}

export default Destinos