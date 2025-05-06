
import React, { useState, useRef, useEffect } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";
import { pipeline } from "@huggingface/transformers";
import { useToast } from "@/components/ui/use-toast";

type Message = {
  role: 'user' | 'assistant';
  content: string;
}

const systemPrompt = `You are an AI assistant that specializes in Rafael Nadal's tennis career.
You know all about his Grand Slam victories, especially his 14 French Open titles, his playing style,
his rivalries with Federer and Djokovic, and his legacy as the King of Clay.
Be concise, informative, and conversational. If asked about things unrelated to Rafael Nadal or tennis,
politely redirect the conversation to Rafael Nadal's career.`;

export default function NadalChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Rafa AI. Ask me anything about Rafael Nadal's career!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState<any>(null);
  const [modelLoading, setModelLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Load the model on component mount
  useEffect(() => {
    const loadModel = async () => {
      try {
        setModelLoading(true);
        // We use a smaller model for better performance in the browser
        const textGeneration = await pipeline(
          'text-generation', 
          'Xenova/tiny-random-GPT2'
        );
        setModel(textGeneration);
        setModelLoading(false);
      } catch (error) {
        console.error("Error loading model:", error);
        toast({
          title: "Error loading AI model",
          description: "Please try again later.",
          variant: "destructive"
        });
        setModelLoading(false);
      }
    };
    
    loadModel();
  }, [toast]);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isLoading) return;
    
    const userMessage = inputValue.trim();
    setInputValue('');
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    setIsLoading(true);
    
    try {
      // Format the prompt with chat history context
      const prompt = formatPrompt([
        ...messages.slice(-5), // Use last 5 messages for context
        { role: 'user', content: userMessage }
      ]);
      
      // Generate response
      const result = await model(prompt, {
        max_new_tokens: 150,
        temperature: 0.7,
        repetition_penalty: 1.2,
      });
      
      let response = result[0].generated_text;
      
      // Extract only the new content (not the prompt)
      response = response.substring(prompt.length).trim();
      
      // Clean up response to make it more coherent
      response = cleanResponse(response);
      
      // Add AI response to chat
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error("Error generating response:", error);
      toast({
        title: "Error generating response",
        description: "Please try again.",
        variant: "destructive"
      });
      
      // Add fallback response
      setMessages(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: "Sorry, I'm having trouble responding right now. Please try again." 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Format messages into a prompt for the model
  const formatPrompt = (msgs: Message[]): string => {
    let prompt = `${systemPrompt}\n\n`;
    
    msgs.forEach(msg => {
      if (msg.role === 'user') {
        prompt += `User: ${msg.content}\n`;
      } else {
        prompt += `Assistant: ${msg.content}\n`;
      }
    });
    
    prompt += `Assistant: `;
    return prompt;
  };
  
  // Clean up model response
  const cleanResponse = (text: string): string => {
    // Take only the first paragraph if it's too long
    const firstParagraph = text.split('\n')[0];
    
    // If response is too long, trim it
    if (firstParagraph.length > 200) {
      return firstParagraph.substring(0, 200) + "...";
    }
    
    return firstParagraph || "I can tell you about Rafael Nadal's amazing career. What would you like to know?";
  };

  return (
    <div className="flex flex-col h-[500px] bg-cream border border-paris/20 rounded-lg shadow-lg overflow-hidden">
      {/* Chat header */}
      <div className="bg-paris text-cream p-4 flex items-center">
        <div className="w-10 h-10 rounded-full bg-clay flex items-center justify-center text-cream font-bold mr-3">
          R
        </div>
        <div>
          <h3 className="font-montserrat font-semibold">Rafa AI</h3>
          <p className="text-xs text-cream/70">Ask about Nadal's career</p>
        </div>
      </div>
      
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, i) => (
          <div 
            key={i} 
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === 'user' 
                  ? 'bg-clay/10 text-navy rounded-tr-none' 
                  : 'bg-paris/10 text-paris rounded-tl-none'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-paris/10 text-paris p-3 rounded-lg rounded-tl-none flex items-center">
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Thinking...
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input area */}
      <form onSubmit={handleSubmit} className="p-4 bg-white border-t flex gap-2">
        <Textarea 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask about Nadal's career..."
          className="flex-1 resize-none"
          disabled={modelLoading || isLoading}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <Button 
          type="submit" 
          size="icon" 
          className="bg-clay hover:bg-clay-dark text-white"
          disabled={modelLoading || isLoading || !inputValue.trim()}
        >
          {isLoading || modelLoading ? 
            <Loader2 className="h-4 w-4 animate-spin" /> : 
            <Send className="h-4 w-4" />
          }
        </Button>
      </form>
      
      {/* Model loading indicator */}
      {modelLoading && (
        <div className="absolute inset-0 bg-cream/80 flex items-center justify-center flex-col">
          <Loader2 className="h-8 w-8 animate-spin text-clay mb-2" />
          <p className="text-navy font-montserrat">Loading Rafa AI...</p>
          <p className="text-xs text-navy/70 mt-1">This may take a moment</p>
        </div>
      )}
    </div>
  );
}
