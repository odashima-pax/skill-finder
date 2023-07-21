import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(({}) => ({
    backgroundColor: '#363636',
    borderBottom: '1px solid white',
}));

const StyledImage = styled('img')({
    height: '55px',
    transition: 'all .4s cubic-bezier(0,.55,.45,1)', // Add transition
    cursor: 'pointer',
});

const Header = () => {
    return (
        <StyledAppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <StyledImage src="/images/pax.png" alt="logo"/>
                </Typography>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;