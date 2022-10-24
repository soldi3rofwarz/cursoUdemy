import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Pokedex from './pokedex/pokedex';
import PokeDetails from './componentes/PokeDetails';
import NavBar from './componentes/navbar';



const Rutas = () => {
    return ( 
        <Router>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Pokedex/>}/> 
                <Route exact path={`/pokemon/:id`} element={<PokeDetails/>}/> 
            </Routes>
        </Router>
    )
}
export default Rutas;