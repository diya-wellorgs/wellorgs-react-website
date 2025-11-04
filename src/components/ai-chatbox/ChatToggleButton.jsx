import React from 'react';

import { IoChatboxEllipses } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';

const ChatToggleButton = ({ isChatOpen, openChat, toggleChat }) => {
  return (
    <div className="fixed left-6 bottom-6 flex flex-col items-start gap-2 z-50">
      {!isChatOpen ?
        <button
          onClick={openChat}
          className="bg-black text-white font-medium px-4 py-2 rounded-full shadow-lg  transition-all flex items-center gap-2"
        >
          <IoChatboxEllipses className="text-white" /> Chat with AI
        </button>
      : <button
          onClick={toggleChat}
          className="bg-white text-black text-lg px-3 py-2  rounded-full shadow-lg transition-all"
        >
          <RiArrowDropDownLine
            className="text-black w-9 h-9"
            size={30}
          />
        </button>
      }
    </div>
  );
};

export default ChatToggleButton;
