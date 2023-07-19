import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack 
    direction='row' 
    alignItems='center' 
    p={2} 
    sx={{postion:'sticky',background : '#000', justifyContent:"space-between"}} >
    <Link to='/' style = {{ display: 'flex', alignItems:'center' }}>
    <img src='/images/logo.png' alt='logo' height={45} />
    <Typography color="#e3e3e3" variant="h6" fontWeight='400' p={1} >Youtube</Typography>
    </Link>
    <SearchBar />
    </Stack>
)
export default Navbar