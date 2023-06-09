import React from "react";
import Grid from "@mui/material/Grid";
import Group from "../components/Group";

const Home = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
              <Group />
            </Grid>
            <Grid item xs={4}>
              <h2>item</h2>
            </Grid>
            <Grid item xs={4}>
              <h2>item</h2>
            </Grid>
        </Grid>
    );
};

export default Home;
