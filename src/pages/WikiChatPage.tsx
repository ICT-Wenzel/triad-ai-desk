import { ChatInterface } from "@/components/ChatInterface";

const WikiChatPage = () => {
  return (
    <ChatInterface
      botName="Internal Wiki Bot"
      botDescription="I can search our internal knowledge base and documentation."
      placeholder="Search internal docs or ask about company processes..."
      accentColor="bg-corporate-green"
    />
  );
};

export default WikiChatPage;