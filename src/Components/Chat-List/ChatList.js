import React, {useState, useEffect} from 'react';
import ChatCard from '../Chat-Card/ChatCard';
import './ChatList.css';

const ChatList = (props) => {
    const [chatUsers, setChatUsers] = useState([]);

    useEffect(() => {
        fetch(`localhost:3001/chatUsers`)
        .then(response => response.json())
        .then(users => setChatUsers(users))    
    }, []);
    

    return (
        <div className="chatList">
            {
                chatUsers.map(user => {
                    return <ChatCard setCurrentChat={props.setCurrentChat} chatUser={user}></ChatCard>
                })
            }
        </div>
    );
}

export default ChatList;