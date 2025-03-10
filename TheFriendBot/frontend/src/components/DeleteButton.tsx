// src/components/DeleteButton.tsx
import React from 'react';

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-red-700 transition duration-300"
    >
      Delete Chat
    </button>
  );
};

export default DeleteButton;
