import React, {useState, useEffect } from 'react';

const Chat = (props) => {
    const {currentChat, messages } = props;

    const [text, setText] = useState('');
    

    if(currentChat === '')            
    return <div>Select a chat</div>

    return (
        <div>
            <div>
                {
                    messages.map(m => {
                        return <p>m</p>
                    })
                }
            </div>
            <div>
                <input type='text' />
                <button>send</button>
            </div>
        </div>
    );
}

export default Chat;