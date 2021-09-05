import React, {useState, useEffect } from 'react';
import Chat from './Components/Chat/Chat';
import ChatList from './Components/Chat-List/ChatList';
import './App.css';

function App() {
  const [currentChat, setCurrentChat] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`localhost:3001/messages/${currentChat.id}`)
    .then(data => data.json())
    .then(messages => setMessages(messages))
  }, [currentChat]);

  return (
    <div className="App">
      <div className='chatApp'>
        <Chat currentChat={currentChat} messages={messages}></Chat>
        <ChatList setCurrentChat={setCurrentChat}></ChatList>
      </div>
    </div>
  );
}

export default App;
