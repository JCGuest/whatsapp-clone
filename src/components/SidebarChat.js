import React, { useEffect, useState } from 'react';
import '../styles/SidebarChat.css';
import { Avatar } from "@material-ui/core";

const SidebarChat = () => {

    const [seed, setSeed] = useState()

    useEffect( () => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    return (
        <div className="sidbarChat">
            <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}/>
            <div className="sidbarChat__info">
                <h2>Room Name</h2>
                <p>Last Message</p>
            </div>
        </div>
    );
};

export default SidebarChat;