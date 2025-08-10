import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  registeredCount: number;
  maxCapacity: number;
  eventType: "conference" | "workshop" | "meetup" | "hackathon";
  image?: string;
}

const eventTypeColors = {
  conference: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  workshop: "bg-green-500/10 text-green-400 border-green-500/20",
  meetup: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  hackathon: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export function EventCard({
  title,
  date,
  location,
  description,
  registeredCount,
  maxCapacity,
  eventType,
  image,
}: EventCardProps) {
  const registrationPercentage = (registeredCount / maxCapacity) * 100;

  return (
    <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-primary hover:-translate-y-1">
      {image && (
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge className={eventTypeColors[eventType]}>
            {eventType.charAt(0).toUpperCase() + eventType.slice(1)}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-1" />
            {registeredCount}/{maxCapacity}
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-foreground">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            {date}
          </div>
          <div className="flex items-center text-sm text-foreground">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            {location}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">Registration Progress</span>
            <span className="text-foreground font-medium">{Math.round(registrationPercentage)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary-gradient h-2 rounded-full transition-all duration-500"
              style={{ width: `${registrationPercentage}%` }}
            />
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button 
          className="w-full bg-primary-gradient hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
          size="lg"
        >
          Register Now
        </Button>
      </CardFooter>
    </Card>
  );
}