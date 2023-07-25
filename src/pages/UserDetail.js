import React, { useEffect, useState } from 'react';
import { db } from '../config/firebaseConfig';
import { useParams } from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    marginTop: '40px',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    flexGrow: 1,
}));

function UserDetail() {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            const docRef = doc(db, 'users', id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const employeeData = docSnap.data();
                const imageRef = ref(getStorage(), employeeData.img_path);
                const url = await getDownloadURL(imageRef);

                setEmployee({
                    ...employeeData,
                    id: docSnap.id,
                    img_path: url,
                });
            } else {
                console.log("No such document")
            }
        };

        fetchEmployee();
    }, [id]);


    return (
        <div>
            {employee ? (
                <>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={3}>
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
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Grid container spacing={4}>
                                {/* {filteredEmployees.map((employee) => (
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
                                ))} */}
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserDetail;