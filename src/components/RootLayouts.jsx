import React from "react";
import { getAuth, signOut } from "firebase/auth";
import Grid from "@mui/material/Grid";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineSetting } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import profile from "../assets/login.png";

const RootLayouts = () => {
    const auth = getAuth();
    const location = useLocation();
    const navigate = useNavigate();

    let habdleLogouts = () => {
        signOut(auth)
            .then(() => {
                navigate("/login")
            })
            .catch((error) => {
                // An error happened.
            });
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={1}>
                <div className="navcontant">
                    <div className="navbar">
                        <img className="profile" src={profile} alt="Profile" />
                        <ul>
                            <li>
                                <Link to="/bachal/home">
                                    <AiFillHome
                                        className={
                                            location.pathname == "/bachal/home"
                                                ? "active"
                                                : "icon"
                                        }
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to="/bachal/massges">
                                    <BsChatDots
                                        className={
                                            location.pathname ==
                                            "/bachal/massges"
                                                ? "active"
                                                : "icon"
                                        }
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to="/bachal/Notification">
                                    <IoIosNotificationsOutline
                                        className={
                                            location.pathname ==
                                            "/bachal/Notification"
                                                ? "active"
                                                : "icon"
                                        }
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to="/bachal/settinge">
                                    <AiOutlineSetting
                                        className={
                                            location.pathname ==
                                            "/bachal/settinge"
                                                ? "active"
                                                : "icon"
                                        }
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <BiLogIn
                                        onClick={habdleLogouts}
                                        className="icon"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Grid>
            <Grid item xs={11}>
                <Outlet />
            </Grid>
        </Grid>

        // <div className="Rootlauout">
        //     <div className="Rootleft">
        //         <div className="rootavater">
        //             <Avatar
        //                 alt="Remy Sharp"
        //                 src="/static/images/avatar/1.jpg"
        //             />
        //         </div>
        //         <div className="rooticon">
        //             <div className="icon">1</div>
        //             <div>2</div>
        //             <div>3</div>
        //             <div>5</div>
        //         </div>
        //     </div>
        //     <div className="Rootright">
        //         <Outlet />
        //     </div>
        // </div>
    );
};

export default RootLayouts;
