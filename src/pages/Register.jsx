import React, { useState } from "react";
// firebase
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
// material
import { Grid, TextField, Button, Alert } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
// images input
import images from "../assets/Register.png";
// components
import RegisterHeadding from "../components/RegisterHeadding";
import { Link, useNavigate } from "react-router-dom";

let inishalvalue = {
    email: "",
    name: "",
    password: "",
    error: "",
    loadding: true,
};
const Register = () => {
    const auth = getAuth();
    let [value, setvalue] = useState(inishalvalue);
    let navigate = useNavigate();

    //handlevalus
    let handlevalus = (e) => {
        setvalue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };
    //handlesubmit
    let handlesubmit = () => {
        let { email, name, password } = value;
        if (!email) {
            setvalue({
                ...value,
                error: "Please Your email",
            });
            return;
        }
        if (!name) {
            setvalue({
                ...value,
                error: "Please Your name",
            });
            return;
        }
        if (!password) {
            setvalue({
                ...value,
                error: "Please Your password",
            });
            return;
        }
        setvalue({
            ...value,
            loadding: false,
        });

        console.log("ddddddd");
        createUserWithEmailAndPassword(auth, email, password).then((user) => {
            sendEmailVerification(auth.currentUser).then(() => {
                // Email verification sent!
                console.log("Email verification sent!");
            });
            navigate("/login");
            setvalue({
                email: "",
                name: "",
                password: "",
                error: "",
                loadding: true,
            });
        });
    };
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
                            value={value.email}
                            name="email"
                            onChange={handlevalus}
                        />
                        {value.error.includes("email") && (
                            <div className="regalert">
                                <Alert severity="error">{value.error}</Alert>
                            </div>
                        )}
                    </div>
                    <div className="regInput">
                        <TextField
                            id="outlined-basic"
                            label="Ful name"
                            variant="outlined"
                            value={value.name}
                            name="name"
                            onChange={handlevalus}
                        />
                        {value.error.includes("name") && (
                            <div className="regalert">
                                <Alert severity="error">{value.error}</Alert>
                            </div>
                        )}
                    </div>
                    <div className="regInput">
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type="password"
                            value={value.password}
                            name="password"
                            onChange={handlevalus}
                        />
                        {value.error.includes("password") && (
                            <div className="regalert">
                                <Alert severity="error">{value.error}</Alert>
                            </div>
                        )}
                    </div>
                    {/* lodding button */}
                    <div></div>
                    <div onClick={handlesubmit} className="regbutton">
                        {value.loadding ? (
                            <Button variant="text">Sign up</Button>
                        ) : (
                            <LoadingButton
                                className="regload"
                                loading
                                variant="outlined"
                            >
                                Submit
                            </LoadingButton>
                        )}
                    </div>
                    <div>
                        <span className="rgbspan">
                            Already have an account ?{" "}
                            <Link to="/login" className="reglink">
                                Sign In
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

export default Register;
