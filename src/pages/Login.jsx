import React from "react";
// material
import { Grid, TextField, Button } from "@mui/material";
// images input
import images from "../assets/login.png";
import google from "../assets/google.png";
// components
import RegisterHeadding from "../components/RegisterHeadding";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className="regleft">
                    <RegisterHeadding
                        className="regheadding"
                        title="Login to your account!"
                    />
                    <div>
                        <img className="logingoogle" src={google} />
                    </div>
                    <div className="loginInput">
                        <TextField
                            id="standard-basic"
                            label="Email Addres"
                            variant="standard"
                        />
                    </div>
                    <div className="loginInput">
                        <TextField
                            id="standard-basic"
                            label="Password"
                            variant="standard"
                        />
                    </div>

                    <div className="regbutton">
                        <Button variant="text">Login to Continue</Button>
                    </div>
                    <div>
                        <span className="rgbspan">
                            Don’t have an account ?{" "}
                            <Link to="/" className="reglink">
                                Sign up
                            </Link>
                        </span>
                    </div>
                </div>
            </Grid>
            <Grid item xs={6}>
                <img className="regimg" src={images} />
            </Grid>
        </Grid>
    );
};

export default Login;
