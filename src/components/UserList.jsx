import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import images from "./../assets/login.png";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

const UserList = () => {
    const db = getDatabase();
    const auth = getAuth();
    let users = useSelector((state) => state.loggedUser.LoginUser);
    let [userdata, setuserdata] = useState([]);

    useEffect(() => {
        const starCountRef = ref(db, "users/");
        onValue(starCountRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if (users.uid != item.key) {
                    arr.push({ ...item.val(), id: item.key });
                    setuserdata(arr);
                }
            });
        });
    }, []);

    //handleFriendReq
    let handleFriendReq = (item) => {
        console.log(item.username);
       
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
