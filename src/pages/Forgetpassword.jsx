import React from "react";
import { TextField, Button } from "@mui/material";

const Forgetpassword = () => {
    return (
        <div className="forget">
            <div className="forgetbody">
                <h2>Forgot Your Password </h2>
                <h6>Please Enter Your Email address</h6>
                <TextField
                    id="outlined-basic"
                    label="Forgot Password"
                    variant="outlined"
                />
                <div className="forbutton">
                    <Button variant="contained">Contained</Button>
                </div>
            </div>
        </div>
    );
};

export default Forgetpassword;
