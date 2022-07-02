import { Avatar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const User = ({ userId, name, avatar }) => {
    return (
        <Link to={`/user/${userId}`} className="homeUser">
            <Avatar className="homeAvatar" src={avatar} alt={name} />
            <Typography>{name}</Typography>
        </Link>
    );
};

export default User;