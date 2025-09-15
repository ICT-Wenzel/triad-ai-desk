import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardHeader className="text-center">
        <div className={`w-24 h-24 mx-auto rounded-full p-4 mb-4 ${accentColor}`}>
          <img 
            src={image} 
            alt={`${title} icon`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
          <Link to={href}>
            Start Chat
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};