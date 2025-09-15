import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot } from "lucide-react";
import { Link } from "react-router-dom";

interface BotCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  accentColor: string;
}

export const BotCard = ({ title, description, image, href, accentColor }: BotCardProps) => {
  return (
    <Link to={href} className="group">
      <Card className="relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer border border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-muted/20 opacity-60" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardContent className="relative p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${accentColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
              <Bot className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
            </div>
          </div>
          
          <div className="mb-6 overflow-hidden rounded-xl">
            <img 
              src={image} 
              alt={title}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-border/30">
            <span className="text-xs text-muted-foreground font-medium">Ready to assist</span>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-sm font-medium">Launch</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};