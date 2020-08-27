import React, { useState, useEffect } from 'react';
import '../styles/Chat.css';
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from '../firebase';
// import SelectInput from '@material-ui/core/Select/SelectInput';

const Chat = () => {
    const { roomId } = useParams();
    const [message, setMessage] = useState("");
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name)
            }
        }
    },[roomId])

    const handleSend = (e) => {
        e.preventDefault();
        console.log(message)
        setMessage("");
    };
    const avatarUrl = `https://avatars.dicebear.com/api/bottts/${Math.floor(Math.random() * 5000)}.svg`;

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar  src={avatarUrl}/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
            
            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
            <div className="chat__body">
                {/* calls chat__reciever css if username is true */}
                <p className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name">
                        Name</span>
                    Hey, guys
                    <span className="chat__timestamp">
                        time</span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input type="text" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button type="submit" onClick={handleSend}>send</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    );
};

export default Chat;