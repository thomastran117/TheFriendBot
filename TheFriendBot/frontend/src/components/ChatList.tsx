import React from 'react';
import MessageBubble from './MessageBubble';

interface ChatListProps {
  messages: { message: string; isUserMessage: boolean }[];
}

const ChatList: React.FC<ChatListProps> = ({ messages }) => {
  return (
    <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 overflow-auto mb-4 p-4 bg-white rounded-lg shadow-md">
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg.message} isUserMessage={msg.isUserMessage} />
      ))}
    </div>
  );
};

export default ChatList;
