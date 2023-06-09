import React from "react";
import Grid from "@mui/material/Grid";
import Group from "../components/Group";
import FriendRequest from "../components/FriendRequest";
import Friends from "../components/Friends";
import MyGroup from "../components/MyGroup";
import UserList from "../components/UserList";
import BlockUser from "../components/BlockUser";

const Home = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Group />
                <FriendRequest />
            </Grid>
            <Grid item xs={4}>
                <Friends />
                <MyGroup />
            </Grid>
            <Grid item xs={4}>
                <UserList />
                <BlockUser />
            </Grid>
        </Grid>
    );
};

export default Home;
