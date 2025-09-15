import { ChatInterface } from "@/components/ChatInterface";

const TicketChatPage = () => {
  return (
    <ChatInterface
      botName="Ticket Analyzer"
      botDescription="I can analyze support tickets and provide insights."
      placeholder="Describe a ticket or ask for analysis..."
      accentColor="bg-corporate-orange"
    />
  );
};

export default TicketChatPage;