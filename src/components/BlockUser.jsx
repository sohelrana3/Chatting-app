import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import images from "./../assets/login.png";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useSelector } from "react-redux";

const BlockUser = () => {
    const db = getDatabase();
    let [blocklist, setBlocklist] = useState([]);

    // useSelector
    let users = useSelector((state) => state.loggedUser.LoginUser);

    //block data
    useEffect(() => {
        const blockRef = ref(db, "Block/");
        onValue(blockRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                arr.push({ ...item.val(), id: item.key });
            });
            setBlocklist(arr);
            console.log(blocklist);
        });
    }, []);
    //handleUnblock button
    let handleUnblock = (item) => {
        remove(ref(db, "Block/" + item.id));
        
    }
    return (
        <div className="box">
            <h3>BlockUser</h3>
            {blocklist.map((item) => (
                <div className="list">
                    <div className="img">
                        <img src={images} alt="img" />
                    </div>
                    <div className="detalis">
                        {item.blockbyid == users.uid ? (
                            <h4>{item.blockedname}</h4>
                        ) : (
                            <h4>{item.blockbyname}</h4>
                        )}
                        <p>Hi Guys, Wassup</p>
                    </div>
                    <div className="button">
                        {item.blockbyid == users.uid && (
                            <Button onClick={()=> handleUnblock(item)} variant="contained">UnBlock</Button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlockUser;
