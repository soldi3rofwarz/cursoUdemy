import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Pokedex from './pokedex/pokedex';
import NavBar from './componentes/navbar';



const Rutas = () => {
    return ( 
        <Router>
            <NavBar/>
            <Routes>
               
                <Route path="/" element={<Pokedex/>}/> 
            </Routes>
        </Router>
    )
}
 
export default Rutas;