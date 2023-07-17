import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import images from "./../assets/login.png";
import {
    getDatabase,
    set,
    ref,
    onValue,
    push,
    remove,
} from "firebase/database";
import { useSelector } from "react-redux";

const FriendRequest = () => {
    const db = getDatabase();
    let [FriendReq, setFriendReq] = useState([]);
    let users = useSelector((state) => state.loggedUser.LoginUser);
    useEffect(() => {
        const FriendRequesRef = ref(db, "FriendReq");
        onValue(FriendRequesRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if (item.val().whoreceiveid == users.uid) {
                    arr.push({ ...item.val(), id: item.key });
                }
            });
            setFriendReq(arr);
        });
    }, []);
    //handleDelete
    let handleDelete = (id) => {
        remove(ref(db, "FriendReq/" + id));
    };

    let handleAccept = (item) => {
        set(push(ref(db, "Friend/")), {
            ...item,
        }).then(() => {
            remove(ref(db, "FriendReq/" + item.id));
        });
    };
    return (
        <div className="box">
            <h3>Friend Request</h3>
            {FriendReq.map((item) => (
                <div className="list">
                    <div className="img">
                        <img src={images} alt="img" />
                    </div>
                    <div className="detalis">
                        <h4>{item.whosendname}</h4>
                        <p>Hi Guys, Wassup</p>
                    </div>
                    <div className="button">
                        <Button
                            onClick={() => handleAccept(item)}
                            variant="contained"
                            size="small"
                        >
                            Accept
                        </Button>
                        <Button
                            onClick={() => handleDelete(item.id)}
                            variant="contained"
                            size="small"
                            color="error"
                        >
                            Reject
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FriendRequest;
