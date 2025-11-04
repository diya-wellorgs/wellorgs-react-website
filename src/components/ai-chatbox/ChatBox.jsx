import React, { useState } from 'react';

import logo from '../../assets/logo.avif';
import Button from '../ui/Button';
import MessageBubble from './MessageBubble';

const ChatBox = ({ messages, onSend, onClose }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <div className="fixed bottom-25 left-6 bg-white border border-gray-300 rounded-2xl shadow-xl w-80 flex flex-col overflow-hidden h-120 z-40">
      <div className="flex items-center justify-between bg-primary px-4 py-3 border-b">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-6 h-6"
          />
          <span className="font-semibold text-sm">Chatting with AI Agent</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((msg, i) => (
          <MessageBubble
            key={i}
            text={msg.text}
            sender={msg.sender}
          />
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-3 border-t flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message"
          className="flex-1 border text-black border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
        />
        <button
          type="submit"
          className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800"
        >
          ➤
        </button>
        {/* <Button
          text="Send"
          onClick={handleSubmit}
        /> */}
      </form>
    </div>
  );
};

export default ChatBox;
