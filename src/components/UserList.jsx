import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import images from "./../assets/login.png";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

const UserList = () => {
    const db = getDatabase();
    const auth = getAuth();
    let [FriendReq, setFriendReq] = useState([]);
    let [Friend, setFriend] = useState([]);
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

    // friendRequest
    useEffect(() => {
        const friendRequestRef = ref(db, "FriendReq/");
        onValue(friendRequestRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                // arr.push(item.val())
                arr.push(item.val().whoreceiveid + item.val().whosendid);
            });
            setFriendReq(arr);
        });
    }, []);
    // friend
    useEffect(() => {
        const friendRequestRef = ref(db, "Friend/");
        onValue(friendRequestRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                // arr.push(item.val())
                arr.push(item.val().whoreceiveid + item.val().whosendid);
            });
            setFriend(arr);
        });
    }, []);

    //handleFriendReq
    let handleFriendReq = (item) => {
        console.log(item);
        set(ref(db, "FriendReq/" + item.id), {
            whosendid: auth.currentUser.uid,
            whosendname: auth.currentUser.displayName,
            whoreceiveid: item.id,
            whoreceivename: item.username,
        });
    };
    //handleCancel
    let handleCancel = (item) => {
        remove(ref(db, "FriendReq/" + item.id));
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
                        {FriendReq.includes(item.id + auth.currentUser.uid) ? (
                            <Button
                                onClick={() => handleCancel(item)}
                                size="small"
                                variant="contained"
                            >
                                Cancel
                            </Button>
                        ) : FriendReq.includes(
                              auth.currentUser.uid + item.id
                          ) ? (
                            <Button size="small" variant="contained">
                                pending
                            </Button>
                        ) : Friend.includes(
                              auth.currentUser.uid + item.id ||
                                  item.id + auth.currentUser.uid
                          ) ? (
                            <Button size="small" variant="contained" color="success">
                                friend
                            </Button>
                        ) : (
                            <Button
                                onClick={() => handleFriendReq(item)}
                                variant="contained"
                                size="small"
                            >
                                +
                            </Button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
