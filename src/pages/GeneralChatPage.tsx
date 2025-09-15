import { ChatInterface } from "@/components/ChatInterface";

const GeneralChatPage = () => {
  return (
    <ChatInterface
      botName="General AI Assistant"
      botDescription="I can help with general questions, writing, coding, and creative tasks."
      placeholder="Ask me anything..."
      accentColor="bg-corporate-blue"
    />
  );
};

export default GeneralChatPage;