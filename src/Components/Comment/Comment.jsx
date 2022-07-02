import { Avatar, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Comment.css";
import { Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommentOnPost } from "../../Actions/Post";
import { getFollowingPosts } from "../../Actions/User";

const CommentCard = ({
    userId,
    name,
    avatar,
    comment,
    commentId,
    postId,
    isAccount,
}) => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const deleteCommentHandle = async () => {
        await dispatch(deleteCommentOnPost(postId, commentId));

        if (isAccount) {
            console.log("Delete My Post")
            // dispatch(getMyPosts());
        } else {
            dispatch(getFollowingPosts());
        }
    };

    return (
        <div className="commentUser">
            <Link to={`/user/${userId}`}>
                <Avatar src={avatar} alt="Owner" sx={{
                    height: "3vmax",
                    width: "3vmax",
                }} />
                <Typography style={{ minWidth: "6vmax" }}>{name}</Typography>
            </Link>
            <Typography>{comment}</Typography>

            {isAccount ? (
                <Button onClick={deleteCommentHandle}>
                    <Delete />
                </Button>
            ) : userId === user._id ? (
                <Button onClick={deleteCommentHandle}>
                    <Delete />
                </Button>
            ) : null}
        </div>
    );
};

export default CommentCard;