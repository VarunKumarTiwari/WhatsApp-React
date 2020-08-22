import React,{useState, useEffect} from 'react';
import {Avatar, IconButton} from "@material-ui/core";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import "./Chat.css";

function Chat() {
    const[input, setInput] = useState("");

    const[seed, setSeed] = useState("");
    useEffect(() =>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);

    const sendMessage = (e) =>{
        e.preventDefault();
        console.log("you typed ==> ",input);
        setInput(""); 
    } 

    return (
        <div className="chat"> 
            <div className="chat__header">

                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h2>Room name</h2>
                    <p>Last Chat.....</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton >
                        <SearchOutlinedIcon />
                    </IconButton>
                    
                    <IconButton >
                        <AttachFileIcon />
                    </IconButton>
                    
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                <span className="chat__name">
                        Varun
                    </span>
                    Hii guys
                    
                <span className="chat__timeStamp">3.20 pm</span>
                </p>
                
                <p className={`chat__message ${true && "chat__reciveMessage"}`}>
                    <span className="chat__name">
                        Ayushi
                    </span>
                Hello there
                    
                <span className="chat__timeStamp">3.20 pm</span>
                </p>

                <p className="chat__message">Hii guys</p>

            </div>
            
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form >
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a Message" type="text" />
                    
                    <button onClick={sendMessage} type="submit">Send Message</button>
                </form>

                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
