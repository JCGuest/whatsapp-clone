import React from 'react';
import '../styles/Chat.css';
import { Avatar } from "@material-ui/core";

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
            </div>

            <div className="chat__body">
                chat body
            </div>

            <div className="chat__footer">
                chat footer
            </div>
        </div>
    );
};

export default Chat;