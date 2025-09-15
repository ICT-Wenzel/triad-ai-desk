import { ChatInterface } from "@/components/ChatInterface";

const CustomChatPage = () => {
  return (
    <ChatInterface
      botName="Custom Bot"
      botDescription="Build and interact with your own customized AI assistant"
      accentColor="bg-corporate-purple"
      placeholder="Describe what you want your custom bot to help with..."
    />
  );
};

export default CustomChatPage;