import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import images from "./../assets/login.png";
import { getDatabase, ref, onValue } from "firebase/database";
import {
    getAuth,
} from "firebase/auth";

const UserList = () => {
    const db = getDatabase();
    const auth = getAuth();
    let [userdata, setuserdata] = useState([]);

    useEffect(() => {
        const starCountRef = ref(db, "users/");
        onValue(starCountRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                arr.push({ ...item.val(), id: item.key });
                setuserdata(arr);
            });
        });
    }, []);

    //handleFriendReq
    let handleFriendReq = (item) => {
        console.log(item.id);
        console.log("key",auth.currentUser.uid);
    };
    return (
        <div className="box">
            <h3>UserList</h3>
            {userdata.map((item) => (
                <div className="list">
                    <div className="img">
                        <img src={images} alt="img" />
                    </div>
                    <div className="detalis">
                        <h4>{item.username}</h4>
                        <p>Hi Guys, Wassup</p>
                    </div>
                    <div className="button">
                        <Button
                            onClick={() => handleFriendReq(item)}
                            variant="contained"
                            size="small"
                        >
                            +
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
