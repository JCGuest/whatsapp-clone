import React from 'react';
import '../styles/SidebarChat.css';
import { Avatar } from "@material-ui/core";

const SidebarChat = (props) => {

    const createChat = () => {
        const roomName = prompt("Please enter name for chat")

        if (roomName) {
            // database stuff
        }
    };

    return !props.addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/bottts/${Math.floor(Math.random() * 5000)}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last Message</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    );
    
};

export default SidebarChat;