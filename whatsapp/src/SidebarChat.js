import React,{useState, useEffect} from 'react';
import {Avatar} from "@material-ui/core";
import "./SidebarChat.css";



function SidebarChat({addNewChat}) {
const[seed, setSeed] = useState("")
useEffect(() =>{
    setSeed(Math.floor(Math.random()*5000));
},[]);

const createChat = () => {
    const roomName = prompt('Please enter name for Chat');
    if(roomName)
    {
        // do something
    }
};

    return !addNewChat ?(
        <div className ="sidebarchat">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
            <div className="sidebarchat__info">
                <h2>Room name</h2>
                <p>Last Chat.....</p>
            </div>
        </div>
    ):
    (
        <div onClick={createChat} className="sidebarchat">
            <h2>Add New Chat </h2>
        </div>
    )
}

export default SidebarChat

