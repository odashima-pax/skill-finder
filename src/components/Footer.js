import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 3 }}>
            <Container maxWidth="sm">
                <Typography variant="body1" align="center">
                    &copy; {new Date().getFullYear()} PAXCREATION
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;