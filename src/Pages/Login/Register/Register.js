
import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { user,registerUser, isLoading,error} = useAuth()
    const history = useHistory()
   
   
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your Password didnot match')
            return
        }
        registerUser(loginData.email , loginData.password, history)     
        e.preventDefault()
                  
        
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    { !isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" 
                            required />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" 
                            required />

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your PassWord"
                            variant="standard"
                            name="password"
                            onBlur={handleOnBlur}
                            type="password" 
                            required />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Re-submit PassWord"
                            variant="standard"
                            name="password2"
                            onBlur={handleOnBlur}
                            type="password" />
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Register</Button>
                        <br />
                        <NavLink style={{textDecoration:'none'}} to="/login">Alreday Register?<Button variant='text'>Register</Button></NavLink>
                    </form>
                    }
                    {isLoading && <CircularProgress />}
                    {user?.email &&  <Alert severity="success">Congratulations!</Alert>}
                    {error &&  <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;