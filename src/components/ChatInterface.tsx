import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, ArrowLeft, Bot, User } from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatInterfaceProps {
  botName: string;
  botDescription: string;
  placeholder: string;
  accentColor: string;
}

export const ChatInterface = ({ botName, botDescription, placeholder, accentColor }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: `Hello! I'm ${botName}. ${botDescription} How can I help you today?`,
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm a demo bot. In a real implementation, I would process your request and provide a helpful response.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/80 backdrop-blur-xl p-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild className="hover:bg-primary/10">
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${accentColor} shadow-lg`}>
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{botName}</h1>
            <p className="text-muted-foreground">{botDescription}</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-6">
        <div className="space-y-6 max-w-4xl mx-auto">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start gap-4 max-w-[85%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg ${
                  message.isUser ? 'bg-primary' : accentColor
                }`}>
                  {message.isUser ? (
                    <User className="h-5 w-5 text-white" />
                  ) : (
                    <Bot className="h-5 w-5 text-white" />
                  )}
                </div>
                <Card className={`shadow-lg border-border/50 ${
                  message.isUser 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card/80 backdrop-blur-sm'
                }`}>
                  <CardContent className="p-4">
                    <p className="leading-relaxed">{message.content}</p>
                    <p className={`text-xs mt-2 opacity-60`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t border-border/50 bg-card/80 backdrop-blur-xl p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              className="flex-1 bg-background/50 border-border/50 h-12 px-4 text-base rounded-xl focus:ring-2 focus:ring-primary/20"
            />
            <Button 
              onClick={sendMessage} 
              disabled={!inputMessage.trim()}
              className="h-12 px-6 rounded-xl bg-primary hover:bg-primary/90 shadow-lg"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};