import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Forgetpassword = () => {
    const auth = getAuth();
    let navigate = useNavigate();
    let [text, settext] = useState("");
    let handleforgot = () => {
        sendPasswordResetEmail(auth, text)
            .then(() => {
                // Password reset email sent!
                // ..
                navigate("/login");
                console.log("forget");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };
    return (
        <div className="forget">
            <div className="forgetbody">
                <h2>Forgot Your Password </h2>
                <h6>Please Enter Your Email address</h6>
                <TextField
                    id="outlined-basic"
                    label="Forgot Password"
                    variant="outlined"
                    onChange={(e) => settext(e.target.value)}
                />
                <div className="forbutton">
                    <Button onClick={handleforgot} variant="contained">
                        Forgrt Your Password
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Forgetpassword;
