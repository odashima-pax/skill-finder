import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { indigo } from '@mui/material/colors';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '1px 6px 7px rgba(0, 0, 0, 0.1)', // 影を追加
    borderBottom: `4px solid ${indigo[300]}`, // 最下部にボーダーの色を追加
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    flexGrow: 1,
}));



const employees = [
    // サンプルデータ
    { id: 1, name: 'yuu', position: 'developer', image: 'https://source.unsplash.com/random?sig=1' },
    { id: 2, name: 'go', position: 'manager', image: 'https://source.unsplash.com/random?sig=2' },
    { id: 3, name: 'el', position: 'designer', image: 'https://source.unsplash.com/random?sig=3' },
    { id: 4, name: 'eiwlc', position: 'designer', image: 'https://source.unsplash.com/random?sig=4' },
    { id: 5, name: 'yuu', position: 'developer', image: 'https://source.unsplash.com/random?sig=1' },
    { id: 6, name: 'go', position: 'manager', image: 'https://source.unsplash.com/random?sig=2' },
    { id: 7, name: 'el', position: 'designer', image: 'https://source.unsplash.com/random?sig=3' },
    { id: 8, name: 'eiwlc', position: 'designer', image: 'https://source.unsplash.com/random?sig=4' },
]


const MainPage = () => {
    return (
        <Container className="container" maxWidth="md">
            <Grid container spacing={4}>
                {employees.map((employee) => (
                    <Grid item key={employee.id} xs={12} sm={6} md={4}>
                        <StyledCard>
                            <CardMedia
                                component="img"
                                height="140"
                                image={employee.image}
                                alt={employee.name}
                            />
                            <StyledCardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {employee.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {employee.position}
                                </Typography>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default MainPage;