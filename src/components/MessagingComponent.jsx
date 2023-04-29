import React, { useState, useEffect } from 'react';


const MessagingComponent = (props) => {
 const [messages, setMessages] = useState([]);
 const [newMessage, setNewMessage] = useState('');


 useEffect(() => {
   // Fetch messages from the API
       setMessages(props.messages || []);
 }, []);


 const handleNewMessageChange = (event) => {
   setNewMessage(event.target.value);
 };


 const handleSubmit = (event) => {
   event.preventDefault();
   // Send a new message to the API
   fetch(`https://strangers-things.herokuapp.com/posts/${props._id}/messages`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${localStorage.getItem('token')}`
     },
     body: JSON.stringify({
       message: {
         content: newMessage
       }
     })
   })
     .then(response => response.json())
     .then(data => {
       setMessages([...messages, data.data.message]);
       setNewMessage('');
     })
     .catch(error => {
       console.error(error);
     });
 };


 return (
   <div>
     {messages.map((message) => (
       <div key={message._id}>
         <p>{message.content}</p>
         <p>{message.fromUser.username}</p>
       </div>
     ))}
     <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Message" value={newMessage} onChange={handleNewMessageChange} />
       <button type="submit">Send</button>
     </form>
   </div>
 );
};


export default MessagingComponent;

