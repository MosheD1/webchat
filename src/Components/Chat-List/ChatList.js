import React, {useState} from 'react';
import ChatCard from '../Chat-Card/ChatCard';

const ChatList = (props) => {
    const [chatUsers, setChatUsers] = useState([]);

    fetch(`localhost:3000/chatUsers`)
    .then(data => data.json())
    .then(messages => setChatUsers(messages))

    return (
        <div>
            {
                chatUsers.map(user => {
                    return <ChatCard setCurrentChat={props.setCurrentChat} chatUser={user}></ChatCard>
                })
            }
        </div>
    );
}

export default ChatList;