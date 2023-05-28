import React from "react";
//material
import { Grid, Avatar, TextField, Button, Alert } from "@mui/material";
import { Outlet } from "react-router-dom";

const RootLayouts = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <div className="Rootleft">
                    <div>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </div>
                </div>
            </Grid>
            <Grid item xs={10}>
                <div className="Rootright">
                    <Outlet />
                </div>
            </Grid>
        </Grid>
    );
};

export default RootLayouts;
