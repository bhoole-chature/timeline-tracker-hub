import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Users, Trophy, Lightbulb } from "lucide-react";

const eventTypes = [
  {
    id: 1,
    title: "Hackathons",
    description: "Intensive coding competitions where teams collaborate to build innovative solutions within 24-48 hours. Compete for prizes and recognition.",
    icon: Code,
    features: ["24-48 hour sprints", "Team collaboration", "Innovation challenges", "Prize pools up to ₹10L"],
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-500"
  },
  {
    id: 2,
    title: "Workshops & Seminars",
    description: "Learn from industry experts through hands-on workshops and insightful seminars covering latest technologies and business strategies.",
    icon: Users,
    features: ["Expert-led sessions", "Hands-on learning", "Networking opportunities", "Industry insights"],
    bgGradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-500"
  },
  {
    id: 3,
    title: "Pitch Competitions",
    description: "Present your startup ideas to investors and industry leaders. Win funding, mentorship, and incubation opportunities.",
    icon: Trophy,
    features: ["Investor presentations", "Seed funding opportunities", "Mentorship programs", "Incubation support"],
    bgGradient: "from-yellow-500/10 to-orange-500/10",
    iconColor: "text-yellow-500"
  }
];

export function EventTypes() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-primary-gradient bg-clip-text text-transparent">
            Types of Events We Host
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the diverse range of events designed to foster innovation, learning, and entrepreneurship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {eventTypes.map((eventType, index) => {
            const IconComponent = eventType.icon;
            
            return (
              <Card 
                key={eventType.id} 
                className={`relative overflow-hidden bg-gradient-to-br ${eventType.bgGradient} border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-secondary group hover:scale-105`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <IconComponent className="w-full h-full" />
                </div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-card/50 border border-border/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-6 h-6 ${eventType.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {eventType.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {eventType.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {eventType.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            );
          })}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to participate in our upcoming events?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow-primary">
              View Upcoming Events
            </button>
            <button className="bg-accent-gradient hover:shadow-glow-secondary px-8 py-3 rounded-lg font-semibold text-foreground transition-all duration-300 hover:scale-105">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}