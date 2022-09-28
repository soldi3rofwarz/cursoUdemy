import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import './navbar.css'
import { makeStyles } from '@mui/styles';

const useStyle= makeStyles((theme)=>({
    AppBar:{
        background:'#A1EB82',
    },
    title:{
        cursor:'pointer',
        color:'#fff'
    }
}))


const NavBar = (props) => {
    const classes = useStyle()
    return ( 
        <Box sx={{ flexGrow: 1 }} className='box'>
            <AppBar  className='appbar' position='fixed'>
                <Toolbar variant="dense"> 
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Link to="/" className='link'>
                        <Typography variant="h6" color="inherit" component="div" className={classes.title}>
                            Pokedex
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar> 
        </Box>
    );
}
export default NavBar;