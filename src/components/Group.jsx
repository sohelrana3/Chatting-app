import React, { useState } from "react";
import Button from "@mui/material/Button";
import images from "./../assets/login.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

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

const Group = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="box">
            <div className="grouptop">
                <h3>Group List</h3>
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
                            />
                            <TextField
                                id="outlined-basic"
                                label="Group Tagline"
                                variant="outlined"
                                margin="dense"
                            />
                            <br />
                            <Button margin="dense" variant="contained">
                                Create Group
                            </Button>
                        </Typography>
                    </Box>
                </Modal>
            </div>
            <div className="list">
                <div className="img">
                    <img src={images} alt="img" />
                </div>
                <div className="detalis">
                    <h4>Friends Reunion</h4>
                    <p>Hi Guys, Wassup</p>
                </div>
                <div className="button">
                    <Button variant="contained" size="small">
                        Join Us
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Group;
