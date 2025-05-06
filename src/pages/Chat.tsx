
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import NadalChatbot from "@/components/NadalAI/NadalChatbot";

const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <h1 className="section-heading text-paris mb-8">Chat with Rafa AI</h1>
          <div className="max-w-2xl mx-auto">
            <NadalChatbot />
            <div className="mt-4 text-sm text-navy/60 text-center">
              <p>This AI uses HuggingFace Transformers to answer questions about Rafael Nadal.</p>
              <p>Responses are generated entirely in your browser.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chat;
