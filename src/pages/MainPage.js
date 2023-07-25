import { React, useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { db } from '../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.05)'
    },
    cursor: 'pointer',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    flexGrow: 1,
}));

const StyledButton = styled(Button)({
    fontFamily: 'acumin-pro, "Noto Sans JP", sans-serif',
    textAlign: 'left',
    color: '#fff',
    fontSize: 'large',
    fontWeight: 'bold',
    transition: 'transform 0.3s',
    textTransform: 'none',
    position: 'sticky',
    top: 0,
    '&:hover': {
        transform: 'scale(1.07)',
    },
    margin: '3px 0',
    justifyContent: 'flex-start',
});


const MainPage = () => {
    const [employees, setEmployees] = useState([]);
    const [filter, setFilter] = useState('All')

    useEffect(() => {
        const fetchEmployees = async () => {

            const storage = getStorage();
            const data = await getDocs(collection(db, 'users'));
            const employeesList = await Promise.all(data.docs.map(async doc => {
                const employee = doc.data();
                const imageRef = ref(storage, employee.img_path);
                const url = await getDownloadURL(imageRef);

                return {
                    ...employee,
                    id: doc.id,
                    img_path: url,
                }
            }))
            setEmployees(employeesList);
        };

        fetchEmployees();
    }, []);

    const filteredEmployees = filter === 'All' ? employees : employees.filter(employee => employee.position === filter);

    return (
        <>
            <Typography variant="h1" style={{
                fontFamily: 'acumin-pro, "Noto Sans JP", sans-serif',
                fontWeight: 700,
                fontSize: 144,
                lineHeight: '144px',
                color: '#fff',
                textAlign: 'start',
                margin: '40px 0',
                // marginBottom: '40px',
            }}>
                Members
            </Typography>
            <Container className="container" maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={3}>
                        <Box display="flex" flexDirection="column">
                            <StyledButton onClick={() => setFilter('All')}>All</StyledButton>
                            <StyledButton onClick={() => setFilter('Software Engineer')}>Software Engineer 🟢</StyledButton>
                            <StyledButton onClick={() => setFilter('UX/UI Designer')}>UX/UI Designer 🔵</StyledButton>
                            <StyledButton onClick={() => setFilter('Project Director')}>Project Director 🟠</StyledButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Grid container spacing={4}>
                            {filteredEmployees.map((employee) => (
                                <Grid item key={employee.id} xs={12} sm={6} md={4}>
                                    <Link to={`/user/${employee.id}`}>
                                        <StyledCard>
                                            <CardMedia
                                                component="img"
                                                image={employee.img_path}
                                                height='auto'
                                                alt={employee.user_name}
                                            />
                                            <StyledCardContent style={{ backgroundColor: '#363636', fontWeight: 'bold', }}>
                                                <Typography gutterBottom variant="h5" component="div" style={{ color: '#fff', fontWeight: 'bold', }}>
                                                    {employee.user_name}
                                                </Typography>
                                                <Typography variant="body2" style={{ color: '#bdbdbd', fontWeight: 'bold', }}>
                                                    {employee.position}
                                                </Typography>
                                            </StyledCardContent>
                                        </StyledCard>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default MainPage;