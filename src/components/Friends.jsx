import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import images from "./../assets/login.png";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";
import { useSelector } from "react-redux";
const Friends = () => {
    const db = getDatabase();
    let [Friend, setFriend] = useState([]);
    let users = useSelector((state) => state.loggedUser.LoginUser);

    //friend useEffect
    useEffect(() => {
        const friendRef = ref(db, "Friend/");
        onValue(friendRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if(item.val().whoreceiveid == users.uid){

                    arr.push({ ...item.val(), id: item.key });
                }
            });
            setFriend(arr);
        });
    }, []);
    return (
        <div className="box">
            <h3>Friends</h3>
            {Friend.map((item) => (
                <div className="list">
                    <div className="img">
                        <img src={images} alt="img" />
                    </div>
                    <div className="detalis">
                        <h4>{item.whosendname}</h4>
                        <p>Hi Guys, Wassup</p>
                    </div>
                    <div className="button">
                        <Button variant="contained" size="small" color="success">
                            Friend
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Friends;
