import { CardMedia, Grid,Card, CardContent, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react'

const useStyle= makeStyles((theme)=>({
    card:{
        cursor: 'pointer',
        background: "lightblue",
        color: 'white',
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
    }
}))

const PokeCart = ({pokemon,image}) => {
    const classes = useStyle();
    const {id, name}= pokemon
    return ( 
        <Grid item xs={12} sm={2} key={id}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={image}></CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography>
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
export default PokeCart;