import React from "react";
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Stack } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';


export const Navbar = () => {


    return (
        <AppBar position='static'>
            <Toolbar>
                <NavLink to='/' size='large' edge='start' color='white' aria-label='logo'><MovieIcon />
                </NavLink>~

                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                 MovieLive
                </Typography>
              
                <Stack direction='row' spacing={2}>
                    <NavLink to='SignIn'color='inherit'>Sign In</NavLink>
                    {/* <NavLink to='Post' color='inherit'>Post</NavLink> */}
                    <NavLink to='inputPost' color='inherit'>Input Review</NavLink>
                    <input type='search' placeholder='Search ' />

                </Stack>
            </Toolbar>
        </AppBar>
                    
            )
}