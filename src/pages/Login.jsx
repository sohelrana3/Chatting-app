import React, { useEffect, useState } from "react";
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
// material
import { Grid, TextField, Button, Alert } from "@mui/material";
// images input
import images from "../assets/login.png";
import google from "../assets/google.png";
// components
import RegisterHeadding from "../components/RegisterHeadding";
import { Link, useNavigate } from "react-router-dom";
// react-redux
import { useSelector, useDispatch } from "react-redux";
import { userdata } from "../slice/user/userSlice";
import { toast } from "react-toastify";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

//
let inishalvalue = {
    email: "",
    password: "",
    error: "",
    errorpass: "",
    eye: false,
};

const Login = () => {
    const auth = getAuth();
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const provider = new GoogleAuthProvider();
    let [value, setvalue] = useState(inishalvalue);
    let users = useSelector((state) => state.loggedUser.LoginUser);

    //const notify ;
    const notify = (massges) => toast(massges);

    useEffect(() => {
        // if(users !== null){
        //     navigate("/bachal/home")
        // }

        // if(localStorage.user == user){
        //     console.log("nnn");
        //     navigate("/bachal/home")
        // }

        console.log(localStorage);
    }, []);

    //handlevalues
    let handlevalues = (e) => {
        setvalue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };
    //handlesing
    let handlesing = () => {
        let { email, password } = value;
        if (!email) {
            setvalue({
                ...value,
                error: "Please Your email",
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
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setvalue({
                    error: "",
                    email: "",
                    password: "",
                });
                localStorage.setItem("user", JSON.stringify(user.user));
                dispatch(userdata(user.user));
                notify("login success");
                navigate("/bachal/home");
            })
            .catch((error) => {
                setvalue({
                    error: "email or password not march",
                });
            });
    };
    //handleGoogle
    let handleGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {});
    };

    ///
    // let handlekey = (e) => {

    // }

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className="regleft">
                    <RegisterHeadding
                        className="regheadding"
                        title="Login to your account!"
                    />
                    <div>
                        <Link>
                            <img
                                onClick={handleGoogle}
                                className="logingoogle"
                                src={google}
                            />
                        </Link>
                    </div>
                    <div className="loginInput">
                        <TextField
                            id="standard-basic"
                            label="Email Addres"
                            variant="standard"
                            value={value.email}
                            name="email"
                            onChange={handlevalues}
                        />
                        {value.error.includes("email") && (
                            <div className="regalert">
                                <Alert severity="error">{value.error}</Alert>
                            </div>
                        )}
                    </div>
                    <div className="loginInput">
                        <TextField
                            id="standard-basic"
                            label="Password"
                            variant="standard"
                            name="password"
                            value={value.password}
                            type={value.eye ? "text" : "password"}
                            onChange={handlevalues}
                        />
                        <div
                            onClick={() =>
                                setvalue({ ...value, eye: !value.eye })
                            }
                            className="eye"
                        >
                            {value.eye ? (
                                <AiOutlineEye />
                            ) : (
                                <AiOutlineEyeInvisible />
                            )}
                        </div>
                        {value.error.includes("password") && (
                            <div className="regalert">
                                <Alert severity="error">{value.error}</Alert>
                            </div>
                        )}
                    </div>
                    <div onClick={handlesing} className="regbutton">
                        <Button variant="text">Login to Continue</Button>
                    </div>
                    <div>
                        <Link to="/foregetpassword">Forget Password</Link>
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
