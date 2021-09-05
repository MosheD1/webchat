import React from 'react';

const ChatCard = (props) => {
    const {chatUser, setCurrentChat} = props;

    return (
        <div>
            <div onClick={() => {setCurrentChat(chatUser)}}>{chatUser.name}</div>
        </div>
    );
}

export default ChatCard;