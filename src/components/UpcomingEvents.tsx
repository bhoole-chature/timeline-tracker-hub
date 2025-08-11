import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Code, Trophy, Users, Lightbulb } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "RIDEHack 4.0: AI for Good",
    date: "2025-03-15",
    time: "09:00 AM",
    location: "JIIT Noida Campus",
    description: "Annual hackathon focusing on AI solutions for social good. Build innovative applications that can make a positive impact on society.",
    category: "Hackathon",
    registrationOpen: true,
    maxParticipants: 300,
    currentRegistrations: 87,
    prizes: "₹10L Total Prize Pool",
    icon: Code,
    bgColor: "bg-blue-50",
    ctaText: "Register Now"
  },
  {
    id: 2,
    title: "Startup Pitch Championship",
    date: "2025-04-20",
    time: "10:00 AM",
    location: "Innovation Auditorium",
    description: "Pitch your startup idea to a panel of investors and industry experts. Winner receives ₹5L seed funding and incubation support.",
    category: "Competition",
    registrationOpen: true,
    maxParticipants: 50,
    currentRegistrations: 23,
    prizes: "₹5L Seed Funding",
    icon: Trophy,
    bgColor: "bg-yellow-50",
    ctaText: "Apply to Pitch"
  },
  {
    id: 3,
    title: "Industry Mentor Connect",
    date: "2025-05-10",
    time: "02:00 PM",
    location: "RIDE Conference Hall",
    description: "One-on-one mentoring sessions with industry leaders. Get guidance on business strategy, funding, and scaling.",
    category: "Mentorship",
    registrationOpen: true,
    maxParticipants: 100,
    currentRegistrations: 45,
    prizes: "Free Mentoring Sessions",
    icon: Users,
    bgColor: "bg-green-50",
    ctaText: "Book Session"
  },
  {
    id: 4,
    title: "Innovation Workshop Series",
    date: "2025-06-05",
    time: "11:00 AM",
    location: "Tech Lab, JIIT",
    description: "Hands-on workshop on emerging technologies including IoT, Blockchain, and Machine Learning applications.",
    category: "Workshop",
    registrationOpen: false,
    maxParticipants: 80,
    currentRegistrations: 15,
    prizes: "Certificates & Goodies",
    icon: Lightbulb,
    bgColor: "bg-purple-50",
    ctaText: "Notify Me"
  }
];

export function UpcomingEvents() {
  return (
    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-primary-gradient bg-clip-text text-transparent">
            Upcoming Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover amazing events, workshops, and conferences that will advance your career and expand your network. 
            Register now to secure your spot!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {upcomingEvents.map((event) => {
            const IconComponent = event.icon;
            const registrationProgress = (event.currentRegistrations / event.maxParticipants) * 100;
            
            return (
              <Card key={event.id} className="bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-secondary group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      <IconComponent className="w-3 h-3 mr-1" />
                      {event.category}
                    </Badge>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{new Date(event.date).toLocaleDateString()}</div>
                      <div>{event.time}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">{event.location}</div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Registration Progress</span>
                      <span className="font-medium text-foreground">
                        {event.currentRegistrations}/{event.maxParticipants}
                      </span>
                    </div>
                    <Progress value={registrationProgress} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-sm font-semibold text-primary">{event.prizes}</div>
                    <Button 
                      className={`${event.registrationOpen ? 'bg-primary hover:bg-primary/90' : 'bg-muted hover:bg-muted/90'} text-primary-foreground`}
                      disabled={!event.registrationOpen}
                    >
                      {event.ctaText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Want to stay updated on future events?
          </p>
          <button className="bg-accent-gradient hover:shadow-glow-secondary px-8 py-3 rounded-lg font-semibold text-foreground transition-all duration-300 hover:scale-105">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
}