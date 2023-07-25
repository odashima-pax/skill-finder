import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'

const StyledAppBar = styled(AppBar)(({}) => ({
    backgroundColor: '#363636',
    borderBottom: '1px solid white',
}));

const StyledImage = styled('img')({
    height: '55px',
    transition: 'all .4s cubic-bezier(0,.55,.45,1)',
    cursor: 'pointer',
    '&:hover': {
        filter: 'blur(0.5px)',
    }
});

const Header = () => {
    return (
        <StyledAppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <Link to={`/`} style={{paddingTop: '8px',}}><StyledImage src="/images/pax.png" alt="logo" /></Link>
                </Typography>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;