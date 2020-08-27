import React from 'react';
import '../styles/SidebarChat.css';
import { Avatar } from "@material-ui/core";
import db from '../firebase.js';
import { Link } from 'react-router-dom';

const SidebarChat = (props) => {

    const createChat = () => {
        const roomName = prompt("Please enter name for chat room")

        if (roomName) {
            db.collection("rooms").add({
                name: roomName
            })
        }
    };

    const avatarUrl = `https://avatars.dicebear.com/api/bottts/${Math.floor(Math.random() * 5000)}.svg`
    return !props.addNewChat ? (
        <Link to={`/rooms/${props.id}`}>
            <div className="sidebarChat">
            <Avatar src={avatarUrl}/>
                <div className="sidebarChat__info">
                    <h2>{props.name}</h2>
                    <p>Last Message</p>
                </div>
            </div>
        </Link>
        
    ) : (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    );
    
};

export default SidebarChat;