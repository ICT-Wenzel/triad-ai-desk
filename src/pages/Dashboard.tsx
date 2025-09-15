import { BotCard } from "@/components/BotCard";
import generalBotImage from "@/assets/general-bot.jpg";
import wikiBotImage from "@/assets/wiki-bot.jpg";
import ticketBotImage from "@/assets/ticket-bot.jpg";

const Dashboard = () => {
  const bots = [
    {
      title: "General AI Assistant",
      description: "Get help with general questions, writing, coding, and creative tasks. Like ChatGPT but customized for our organization.",
      image: generalBotImage,
      href: "/general-chat",
      accentColor: "bg-corporate-blue"
    },
    {
      title: "Internal Wiki Bot",
      description: "Search and get answers from our internal knowledge base, documentation, and company resources.",
      image: wikiBotImage,
      href: "/wiki-chat",
      accentColor: "bg-corporate-green"
    },
    {
      title: "Ticket Analyzer",
      description: "Analyze support tickets, extract insights, categorize issues, and suggest solutions based on historical data.",
      image: ticketBotImage,
      href: "/ticket-chat",
      accentColor: "bg-corporate-orange"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Internal AI Bot Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your AI assistant to get started. Each bot is specialized for different tasks and trained on our internal data.
          </p>
        </div>

        {/* Bot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bots.map((bot) => (
            <BotCard
              key={bot.title}
              title={bot.title}
              description={bot.description}
              image={bot.image}
              href={bot.href}
              accentColor={bot.accentColor}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            Need help? Contact IT Support or check our internal documentation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;