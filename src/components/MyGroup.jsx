import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import images from "./../assets/login.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { toast } from "react-toastify";

// Modal style
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
let grupData = {
    groupname: "",
    grouptagname: "",
};

const MyGroup = () => {
    const db = getDatabase();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let [groupinfo, setgroupinfo] = useState(grupData);
    let [group, setgroup] = useState([]);
    const notify = (massges) => toast(massges);

    // useSelector
    let users = useSelector((state) => state.loggedUser.LoginUser);

    // useEffect
    useEffect(() => {
        const GroupRef = ref(db, "grouplist/");
        onValue(GroupRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if (item.val().adminid == users.uid) {
                    arr.push({ ...item.val(), id: item.key });
                }
            });
            setgroup(arr);
        });
    }, []);

    //handlegroup

    let handlegroup = (e) => {
        setgroupinfo({
            ...groupinfo,
            [e.target.name]: e.target.value,
        });
    };

    // handleCreateGroup button
    let handleCreateGroup = () => {
        console.log(users);
        set(push(ref(db, "grouplist/")), {
            groupname: groupinfo.groupname,
            grouptagname: groupinfo.grouptagname,
            adminid: users.uid,
            adminname: users.displayName,
        }).then(() => {
            setOpen(false);
            notify("Group Name :" + " " + groupinfo.groupname);
        });
    };
    return (
        <div className="box">
            <div className="grouptop">
                <h3>My Groups</h3>
                <Button onClick={handleOpen} variant="contained">
                    Create Group
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Create New Group
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <TextField
                                id="outlined-basic"
                                label="Group Name"
                                variant="outlined"
                                margin="dense"
                                name="groupname"
                                onChange={handlegroup}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Group Tagline"
                                variant="outlined"
                                margin="dense"
                                name="grouptagname"
                                onChange={handlegroup}
                            />
                            <br />
                            <Button
                                onClick={handleCreateGroup}
                                margin="dense"
                                variant="contained"
                            >
                                Create Group
                            </Button>
                        </Typography>
                    </Box>
                </Modal>
            </div>
            {group.map((item) => (
                <div className="list">
                    <div className="img">
                        <img src={images} alt="img" />
                    </div>
                    <div className="detalis">
                        <h4>{item.groupname}</h4>
                        <p>{item.grouptagname}</p>
                    </div>
                    <div className="button">
                        <Button variant="contained" size="small">
                            Join Us
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyGroup;
