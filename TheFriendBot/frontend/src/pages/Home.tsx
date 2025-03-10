// src/pages/Home.tsx
import React from 'react';
import FeatureCard from '../components/FeatureCard';
import OpenAILogo from '../components/Logo';
import ActionButton from '../components/ActionButton';

const Home: React.FC = () => {
  return (
    <section className="text-center py-16 px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to MyFriendBot</h2>
      <p className="text-lg text-white mb-8">
        This is a nice full-stack application using OpenAI API to simulate a conversation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Easy Chat System"
          description="The app is built around OpenAI API to simulate a chat system."
        />
        <FeatureCard
          title="Intuitive UI"
          description="The UI is a simple and familiar messaging system."
        />
        <FeatureCard
          title="Fast and Responsive"
          description="Using lightweight technology, the backend responds quickly with a message."
        />
      </div>

      <OpenAILogo />

      <ActionButton link="/chat" text="Try out the Chatbot" />
    </section>
  );
};

export default Home;
