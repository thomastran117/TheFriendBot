import React from 'react';
import { UserIcon, ChatAlt2Icon } from '@heroicons/react/outline';

interface MessageBubbleProps {
  message: string;
  isUserMessage: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isUserMessage }) => {
  return (
    <div
      className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`flex items-center max-w-xs px-4 py-2 rounded-lg text-white transition-all duration-300 ease-in-out transform ${
          isUserMessage
            ? 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
            : 'bg-gray-600 hover:bg-gray-700 hover:scale-105'
        }`}
      >
        {/* Add an icon depending on the message sender */}
        <div className="mr-2">
          {isUserMessage ? (
            <UserIcon className="w-6 h-6 text-white" />
          ) : (
            <ChatAlt2Icon className="w-6 h-6 text-white" />
          )}
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
