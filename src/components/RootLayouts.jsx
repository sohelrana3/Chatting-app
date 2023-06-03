import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Link, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import profile from "../assets/login.png"

const RootLayouts = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={1}>
                <div className="navcontant">
                    <div className="navbar">
                        <img className="profile" src={profile} alt="Profile" />
                        <ul>
                            <li>
                                <Link to="/bachal/home">
                                    <AiFillHome />
                                </Link>
                            </li>
                            <li>
                                <Link to="/bachal/home">
                                    <AiFillHome />
                                </Link>
                            </li>
                            <li>
                                <Link to="/bachal/home">
                                    <AiFillHome />
                                </Link>
                            </li>
                            <li>
                                <Link to="/bachal/home">
                                    <AiFillHome />
                                </Link>
                            </li>
                            <li>
                                <Link to="/bachal/home">
                                    <AiFillHome />
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
