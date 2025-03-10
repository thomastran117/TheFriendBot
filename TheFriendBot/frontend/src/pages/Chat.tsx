import React, { useState } from 'react';
import MessageInput from '../components/MessageInput';
import ChatList from '../components/ChatList';
import DeleteButton from '../components/DeleteButton';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ message: string; isUserMessage: boolean }[]>([]);

  const handleSendMessage = async (input: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { message: input, isUserMessage: true },
    ]);

    try {
      const response = await fetch('http://flask-backend:8000/api/response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { message: data.response, isUserMessage: false },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { message: 'Sorry, something went wrong. Please try again later.', isUserMessage: false },
        ]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: 'Error communicating with server.', isUserMessage: false },
      ]);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex justify-center min-h-screen">
      <section className="flex flex-col items-center h-full p-4 bg-gray-100 rounded-xl shadow-md w-[60%]">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Chat with MyFriendBot</h2>
        <ChatList messages={messages} />
        <MessageInput onSend={handleSendMessage} />
        <div className="mt-4">
          <DeleteButton onClick={handleClearChat} />
        </div>
      </section>
    </div>
  );
};

export default Chat;
