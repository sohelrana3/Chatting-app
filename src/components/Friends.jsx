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
                if (
                    item.val().whoreceiveid == users.uid ||
                    item.val().whosendid == users.uid
                ) {
                    arr.push({ ...item.val(), id: item.key });
                }
            });
            setFriend(arr);
        });
    }, []);
    //handleUnfriend button
    let handleUnfriend = (item)=> {
        console.log(item);
        remove(ref(db, "Friend/" + item.id));
    }
    return (
        <div className="box">
            <h3>Friends</h3>
            {Friend.map((item) => (
                <div className="list">
                    <div className="img">
                        <img src={images} alt="img" />
                    </div>
                    <div className="detalis">
                        {item.whoreceiveid == users.uid ? (
                            <h4>{item.whosendname}</h4>
                        ) : (
                            <h4>{item.whoreceivename}</h4>
                        )}
                        <p>Hi Guys, Wassup</p>
                    </div>
                    <div className="button">
                        <Button variant="contained" size="small">
                            Block
                        </Button>
                        <Button onClick={()=> handleUnfriend(item)} variant="contained" size="small" color="error">
                            Unfriend
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Friends;
