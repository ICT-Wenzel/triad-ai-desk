import { BotCard } from "@/components/BotCard";

const Dashboard = () => {
  const bots = [
    {
      title: "General AI Assistant",
      description: "Get help with general questions, writing, coding, and creative tasks. Like ChatGPT but customized for our organization.",
      href: "/general-chat",
      accentColor: "bg-corporate-blue"
    },
    {
      title: "Internal Wiki Bot",
      description: "Search and get answers from our internal knowledge base, documentation, and company resources.",
      href: "/wiki-chat",
      accentColor: "bg-corporate-green"
    },
    {
      title: "Ticket Analyzer",
      description: "Analyze support tickets, extract insights, categorize issues, and suggest solutions based on historical data.",
      href: "/ticket-chat",
      accentColor: "bg-corporate-orange"
    },
    {
      title: "Custom Bot",
      description: "Build and interact with your own customized AI assistant tailored to your specific needs and workflows.",
      href: "/custom-chat",
      accentColor: "bg-corporate-purple"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-90" />
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">
            Internal AI Bot Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose your AI assistant to get started. Each bot is specialized for different tasks and trained on our internal data.
          </p>
        </div>

        {/* Bot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {bots.map((bot) => (
            <BotCard
              key={bot.title}
              title={bot.title}
              description={bot.description}
              href={bot.href}
              accentColor={bot.accentColor}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <p className="text-sm text-muted-foreground">
              Need help? Contact IT Support or check our internal documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;