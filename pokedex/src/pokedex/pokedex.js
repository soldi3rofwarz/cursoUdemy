import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import axios from 'axios'
import { API_IMG, API_URL } from '../api/data';

const Pokedex = () => {
    const [pokedata, setpokedata] = useState([])
    useEffect(() => {
       axios.get(API_URL+"?limit=800").then((response)=>{
            if(response.status >= 200 && response.status<300){
            const {results} = response.data
            
            let pokemonsdatos =[]
            results.forEach((pokemon, index) => {
                index++
                const objetos={
                    id: index,
                    url: API_IMG+index+".png",
                    name: pokemon.name
                }
                pokemonsdatos.push(objetos)
            });
            setpokedata(pokemonsdatos)
        }
        })
    }, [])
    return ( 
        <Box>
            {pokedata? pokedata.map((poke)=>{
                return <h2>{poke.name}</h2>
            }): "nada chatel"}
        </Box>
    );
}
 
export default Pokedex;