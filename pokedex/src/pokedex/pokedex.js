import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import axios from 'axios'
import { API_IMG, API_URL } from '../api/data';
import { CircularProgress, Grid } from '@mui/material';
import PokeCart from '../componentes/pokeCart';
import { makeStyles } from '@mui/styles';

const useStyle= makeStyles((theme)=>({
    pokedexcontainer:{
        textAlign:'center',
        padding:'80px 10px 0 10px'
    }
}))


const Pokedex = () => {
    const classes= useStyle();
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
            {pokedata? 
            <Grid container spacing={2} className={classes.pokedexcontainer}>
                {pokedata.map((poke)=>{
                return <PokeCart pokemon={poke} image={poke.url} key={poke.id}/>
            })}
            </Grid>: <CircularProgress style={{marginTop: "100px"}}/>}
        </Box>
    );
}
 
export default Pokedex;