import React from 'react';

interface ActionButtonProps {
  link: string;
  text: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ link, text }) => {
  return (
    <div className="mt-12">
      <a
        href={link}
        className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        {text}
      </a>
    </div>
  );
};

export default ActionButton;