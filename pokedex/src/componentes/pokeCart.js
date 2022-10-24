import { CardMedia, Grid,Card, CardContent, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {Link} from 'react-router-dom'

import React from 'react'

const useStyle= makeStyles((theme)=>({
    card:{
        cursor: 'pointer',
        background: "lightblue",
        color: 'white',
        boxShadow:"5px 10px 10px 0",
        borderRadius:'10px',
        "&:hover":{
            background:"pink"
        }
    },
    cardMedia:{
        margin: "auto",
        width: 130,
        height:130,
    },
    cardContent:{
        textAlign:'center',
    },
    link:{
        textDecoration:'none'
    }
}))

const PokeCart = ({pokemon,image}) => {
    const classes = useStyle();
    const {id, name}= pokemon
    return ( 
        <Grid item xs={12} sm={2} key={id}>
            <Link to={'/pokemon/'+ id} className={classes.link}>
            <div className={classes.card}>
                <CardMedia className={classes.cardMedia} image={image}></CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography>
                        {name}
                    </Typography>
                </CardContent>
            </div>
            </Link>
        </Grid>
    );
}
export default PokeCart;