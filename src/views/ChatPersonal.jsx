// src/views/ChatPersonal.jsx
import React from 'react';

const ChatPersonal = ({ chats }) => {
  return (
    <div>
      <h2>Chats personales</h2>
      {chats.map((chat, index) => (
        <div key={index} className="card">
          <strong>{chat.nombre}</strong>
          <p>{chat.mensaje}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatPersonal;