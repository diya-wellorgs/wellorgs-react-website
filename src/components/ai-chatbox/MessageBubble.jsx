import React from 'react';

const MessageBubble = ({ text, sender }) => {
  const isUser = sender === 'user';
  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 w-full`}
    >
      <div
        className={`px-4 py-2 rounded-2xl max-w-[75%] ${
          isUser ?
            'bg-black text-white rounded-br-none'
          : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default MessageBubble;
