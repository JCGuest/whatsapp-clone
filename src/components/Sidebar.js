import React, { useState, useEffect } from 'react';
import '../styles/Sidebar.css';
import SidebarChat from './SidebarChat.js'
import { Avatar, IconButton, recomposeColor } from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import db from '../firebase.js';
const Sidebar = () => {

    const [rooms, setRooms] = useState("")

    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) => setRooms(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
        }))))
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                < Avatar/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {rooms.map((room) => {
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                })}
            </div>
        </div>
    );
};

export default Sidebar;