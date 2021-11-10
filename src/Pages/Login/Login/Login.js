import { Container, Grid, Typography, TextField, Button , CircularProgress,Alert} from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/login.png'

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const {login, error, isLoading, user, signInWithGoogle} = useAuth()

    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        login(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, history)
    }
    return (

        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        Login
                    </Typography>
                    { !isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your PassWord"
                            variant="standard"
                            name="password"
                            onChange={handleOnChange}
                            type="password" />
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Login</Button>
                        <br />
                        <NavLink style={{textDecoration:'none'}} to="/register">New User?<Button variant='text'>Register</Button></NavLink>
                    </form>
                    }
                    {isLoading && <CircularProgress />}
                    {user?.email &&  <Alert severity="success">Login Successfully!</Alert>}
                    {error &&  <Alert severity="error">{error}</Alert>}
                    <p>---------------------------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Login With Google</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;