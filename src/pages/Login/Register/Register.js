import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import NavBar1 from "../../Home/NavBar1/NavBar1";

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { createUser, loading, user, authError, googleSignIn } = useAuth()

    const location = useLocation();
    const history = useHistory()
    
    const handleFormOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginInputSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert("Your password did not match");
            return
        }
        
        createUser(loginData.name, loginData.email, loginData.password, history)
        e.preventDefault();
    };

    // google popup sign
    const handleGoogleSignIn = () => {
        googleSignIn(location, history);
    }

    return (
        <>
            <div>
                <NavBar1></NavBar1>
            </div>
            <Container>
                <Grid container spacing={3}>
                    <Grid item sx={{ mt: 0, textAlign: "center" }} xs={0} sm={3} md={3} >
                    </Grid>
                    <Grid item sx={{ mt: 10, textAlign: "center" }} xs={12} sm={6} md={6} >
                        <Typography variant="h5" gutterBottom>
                            Register
                        </Typography>

                        {
                            !loading &&
                            <form style={{width: '90%', margin: '0 auto'}} onSubmit={handleLoginInputSubmit}>
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    sx={{ width: "100%", m: 1 }}
                                    label="Your Name"
                                    name="name"
                                    onBlur={handleFormOnBlur}
                                />
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    sx={{ width: "100%", m: 1 }}
                                    label="Email"
                                    name="email"
                                    type="email"
                                    onBlur={handleFormOnBlur}
                                />
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    sx={{ width: "100%", m: 1 }}
                                    type="password"
                                    label="Your Password"
                                    name="password"
                                    onBlur={handleFormOnBlur}
                                />
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    sx={{ width: "100%", m: 1 }}
                                    type="password"
                                    label="Conform Password"
                                    name="password2"
                                    onBlur={handleFormOnBlur}
                                />
                                <Button
                                    sx={{ width: "100%", m: 1 }}
                                    type="submit"
                                    variant="contained"
                                    style={{backgroundColor: '#1BA370'}}
                                >
                                    REGISTER
                                </Button>
                                <button style={{ border: "none", background: "none" }}>
                                    Already Registered?{" "}
                                    <Link style={{color: 'rgb(27 163 112)'}} to="/login">please login</Link>
                                </button>
                            </form>
                        }

                        <div style={{ margin: '0 auto', textAlign: 'left'}}>
                            <hr style={{marginTop: '40px', marginBottom: '15px'}} />
                            <Button
                                style={{ textTransform: 'capitalize', marginLeft: '30px', backgroundColor: 'rgb(27 163 112)' }}
                                onClick={handleGoogleSignIn}
                                variant="contained"
                            >Google SignIn</Button>
                        </div>

                        {user?.email && <Alert sx={{ mt: 3 }} severity="success">Successfully Registered</Alert>}
                        {authError && <Alert sx={{ mt: 3 }} severity="error">{authError}</Alert>}
                        <br />
                        {loading && <CircularProgress sx={{textAlign: 'center', mt: 10}} />}

                    </Grid>
                    <Grid item sx={{ mt: 0, textAlign: "center" }} xs={0} sm={3} md={3} >
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;
