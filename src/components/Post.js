import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import moment from 'moment';

require("moment/min/locales.min");
moment.locale('es');

export const Post = ({ profilePic, image, username, timestamp, message }) => {

    const postTime = moment(timestamp);

    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}
                    className="post__avatar"
                 />
                 <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p> { postTime.fromNow() }</p>
                 </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Me Gusta</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comentar</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Compartir</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}
