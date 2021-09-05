import React, {useState } from 'react';
import './Chat.css';

const Chat = (props) => {
    const {currentChat, messages } = props;

    const [text, setText] = useState('');
    
    const onTextChange = (e) => {
        setText(e.target.value);
    }  

    const onSend = () => {
        fetch(`localhost:3001/messages/${currentChat.id}`, {
            mehtod: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(text)
        })
        .then(res => res.json())
        .then(data => {
            if(data.ok) {
                setText('');
            }
        })
    }

    if(currentChat === '')            
    return <div>Select a chat</div>

    return (
        <div className='chat'>
            <div>
                {
                    messages.map(m => {
                        return <p>m</p>
                    })
                }
            </div>
            <div>
                <input className="textInput" onChange={onTextChange} type='text' />
                <button onClick={onSend} >send</button>
            </div>
        </div>
    );
}

export default Chat;