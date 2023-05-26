import React from "react";
// material
import { Grid, TextField, Button } from "@mui/material";
// images input
import images from "../assets/Register.png";
// components
import RegisterHeadding from "../components/RegisterHeadding";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className="regleft">
                    <RegisterHeadding
                        className="regheadding"
                        title="Get started with easily register"
                    />
                    <p className="">Free register and you can enjoy it</p>
                    <div className="regInput">
                        <TextField
                            id="outlined-basic"
                            label="Email Address"
                            variant="outlined"
                        />
                    </div>
                    <div className="regInput">
                        <TextField
                            id="outlined-basic"
                            label="Ful name"
                            variant="outlined"
                        />
                    </div>
                    <div className="regInput">
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                        />
                    </div>
                    <div className="regbutton">
                        <Button variant="text">Sign up</Button>
                    </div>
                    <div>
                        <span className="rgbspan">Already  have an account ? <Link to="/login" className="reglink">Sign In</Link></span>
                    </div>
                </div>
            </Grid>
            <Grid item xs={6}>
                <img className="regimg" src={images} />
            </Grid>
        </Grid>
    );
};

export default Register;
