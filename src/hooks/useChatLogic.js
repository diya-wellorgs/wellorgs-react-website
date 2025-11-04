import { useState } from 'react';

export const useChatLogic = () => {
  const [messages, setMessages] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleUserMessage = async (text) => {
    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        sender: 'ai',
        text: "Hi there! I'm your AI assistant. How can I help you today?",
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const openChat = () => {
    if (!accepted) setShowTerms(true);
    else setIsChatOpen(true);
  };

  const acceptTerms = () => {
    setShowTerms(false);
    setAccepted(true);
    setIsChatOpen(true);
  };
  const onCancel = () => {
    setShowTerms(false);
    setAccepted(false);
  };

  const toggleChat = () => setIsChatOpen((prev) => !prev);

  return {
    messages,
    isChatOpen,
    showTerms,
    accepted,
    handleUserMessage,
    openChat,
    acceptTerms,
    onCancel,
    toggleChat,
  };
};
