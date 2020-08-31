import React,{useState, useEffect} from 'react';
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './Sidebar.css';
import db from "./firebase";
import SidebarChat from './SidebarChat';
import { useStateValue } from './StateProvider';


function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    const [rooms,setRooms] = useState([]);
    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc =>({
                    id: doc.id, 
                    data: doc.data()
                })
            ))
        ));
        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar src ={user?.photoURL}/> 
                <div className="sidebar__headerright">
                    <IconButton >
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton >
                        <ChatIcon />
                    </IconButton>
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                        
                </div>
            </div>
            <div className="sidebar__search">

                <div className="sidebar__searchContainer">
                        <SearchOutlinedIcon/>
                        <input placeholder="Search or Start bew Chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chat">
               <SidebarChat addNewChat/>
               {rooms.map(room =>(
                   <SidebarChat key={room.id}
                   id={room.id}
                   name={room.data.name} />
               ))}
            </div>
            
        </div>
    )
}

export default Sidebar
