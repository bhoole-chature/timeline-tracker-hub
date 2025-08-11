import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Trophy, Users, Lightbulb, Code, Award, Rocket } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: "milestone" | "hackathon" | "showcase" | "partnership" | "graduation" | "launch";
  participants: number | null;
  icon: any;
  status: "completed";
}

interface TimelineYear {
  year: string;
  title: string;
  events: TimelineEvent[];
}

const timelineEvents: TimelineYear[] = [
  {
    year: "2024",
    title: "RIDE Expansion & Growth",
    events: [
      {
        date: "March 2024",
        title: "RIDEHack 3.0",
        description: "Third annual hackathon with 200+ participants, 50 innovative solutions, and ₹5L in prizes.",
        type: "hackathon",
        participants: 200,
        icon: Code,
        status: "completed"
      },
      {
        date: "June 2024",
        title: "Startup Showcase Summit",
        description: "Major investor meet featuring 17 portfolio startups, leading to ₹45L funding commitments.",
        type: "showcase",
        participants: 150,
        icon: Trophy,
        status: "completed"
      },
      {
        date: "September 2024",
        title: "Industry Partnership Day",
        description: "Collaborated with 10+ industry partners to create mentorship and internship opportunities.",
        type: "partnership",
        participants: 80,
        icon: Lightbulb,
        status: "completed"
      }
    ]
  },
  {
    year: "2023",
    title: "Milestone Year",
    events: [
      {
        date: "February 2023",
        title: "DPIIT Recognition Achieved",
        description: "Officially recognized by Department for Promotion of Industry and Internal Trade, Government of India.",
        type: "milestone",
        participants: null,
        icon: Award,
        status: "completed"
      },
      {
        date: "May 2023",
        title: "RIDEHack 2.0",
        description: "Second edition with focus on sustainable technology solutions, 150 participants across 30 teams.",
        type: "hackathon",
        participants: 150,
        icon: Code,
        status: "completed"
      },
      {
        date: "October 2023",
        title: "First Startup Graduations",
        description: "Four startups successfully graduated from incubation program with combined funding of ₹80L.",
        type: "graduation",
        participants: 50,
        icon: Rocket,
        status: "completed"
      }
    ]
  },
  {
    year: "2022",
    title: "Foundation & Growth",
    events: [
      {
        date: "August 2022",
        title: "RIDE Incubation Centre Launch",
        description: "Official launch of RIDE with state-of-the-art facilities and inaugural batch of 8 startups.",
        type: "launch",
        participants: 100,
        icon: Rocket,
        status: "completed"
      },
      {
        date: "November 2022",
        title: "First RIDEHack",
        description: "Inaugural hackathon focusing on innovative solutions for local challenges, 100+ participants.",
        type: "hackathon",
        participants: 100,
        icon: Code,
        status: "completed"
      }
    ]
  }
];

const typeColors = {
  milestone: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  hackathon: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  showcase: "bg-green-500/10 text-green-400 border-green-500/20",
  partnership: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  graduation: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  launch: "bg-red-500/10 text-red-400 border-red-500/20"
};

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  // Flatten events for progress calculation
  const allEvents = timelineEvents.flatMap(year => year.events);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const timelineHeight = timelineRef.current.offsetHeight;
      
      // Calculate progress based on timeline position
      const timelineTop = timelineRect.top;
      const timelineBottom = timelineRect.bottom;
      
      if (timelineBottom >= 0 && timelineTop <= viewportHeight) {
        // Calculate how much of timeline has been scrolled through
        const startOffset = viewportHeight * 0.5; // Start progress when timeline is centered
        const scrolledDistance = Math.max(0, startOffset - timelineTop);
        const totalDistance = timelineHeight - viewportHeight * 0.5;
        const progress = Math.min(1, Math.max(0, scrolledDistance / totalDistance));
        
        setScrollProgress(progress);
        
        // Update active index - ensure we reach the last item
        const currentIndex = Math.floor(progress * (allEvents.length - 1));
        setActiveIndex(Math.min(allEvents.length - 1, Math.max(0, currentIndex)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allEvents.length]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Unified Animated Background */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        
        {/* Background geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-16 w-24 h-24 border border-primary/20 rotate-45 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary/5 rounded-lg animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-16 w-20 h-20 border-2 border-primary/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Moving geometric shapes */}
        <div className="absolute top-40 left-1/4 w-8 h-8 border border-primary/15 rounded-full animate-float" />
        <div className="absolute top-60 right-1/4 w-6 h-6 bg-primary/10 rotate-45 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-40 left-1/3 w-10 h-10 border-2 border-primary/20 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${10 + i * 6}%`,
                top: `${15 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + i * 0.2}s`
              }}
            />
          ))}
        </div>
        
        {/* Orbiting elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-80 h-80">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full animate-orbit"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: `0 ${100 + i * 20}px`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${8 + i}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Sticky Glowing Bulb */}
      <div className="sticky top-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
        <div className="relative">
          <div className="w-12 h-12 bg-primary/20 rounded-full border-2 border-primary/40 backdrop-blur-sm">
            <div className="absolute inset-2 bg-primary/60 rounded-full animate-pulse" />
            <div className="absolute inset-3 bg-primary rounded-full" />
            <div className="absolute -inset-2 bg-primary/10 rounded-full animate-ping" />
          </div>
          {/* Light beam effect */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </div>
      
      {/* Sticky Light Rays from Title */}
      <div className="sticky top-0 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="relative">
          {/* Central light rays */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent animate-pulse"
              style={{
                height: `${400 + i * 50}px`,
                left: `${Math.cos((i * 30) * Math.PI / 180) * 150}px`,
                transform: `rotate(${i * 30}deg)`,
                transformOrigin: 'top center',
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold mb-4 bg-primary-gradient bg-clip-text text-transparent relative z-10">
            Our Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto relative z-10">
            Follow our timeline of achievements, milestones, and upcoming events
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Central Timeline Spine */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-timeline-bg h-full">
            {/* Progress Line */}
            <div 
              className="w-full bg-primary-gradient transition-all duration-300"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Timeline Ball */}
          <div
            ref={ballRef}
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full shadow-glow-primary transition-all duration-300 z-10"
            style={{ 
              top: `${scrollProgress * 100}%`,
              boxShadow: "0 0 20px hsl(var(--primary))"
            }}
          >
            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
          </div>

          {/* Timeline Events */}
          <div className="space-y-20">
            {timelineEvents.map((yearData, yearIndex) => {
              let eventCounter = 0;
              // Count events in previous years
              for (let i = 0; i < yearIndex; i++) {
                eventCounter += timelineEvents[i].events.length;
              }

              return (
                <div key={yearData.year} className="relative">
                  {/* Year Section Header */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-30 mb-8">
                    <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-lg shadow-glow-primary">
                      {yearData.year}
                    </div>
                    <div className="text-center mt-2">
                      <h3 className="text-xl font-semibold text-foreground">{yearData.title}</h3>
                    </div>
                  </div>

                  {/* Year Events */}
                  <div className="space-y-16 pt-24">
                    {yearData.events.map((event, eventIndex) => {
                      const globalIndex = eventCounter + eventIndex;
                      const isActive = globalIndex <= activeIndex;
                      const isLeft = globalIndex % 2 === 0;
                      const IconComponent = event.icon;

                      return (
                        <div
                          key={`${yearData.year}-${eventIndex}`}
                          className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} relative`}
                        >
                          {/* Checkpoint */}
                          <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                            <div
                              className={`w-4 h-4 rounded-full border-4 transition-all duration-500 ${
                                isActive 
                                  ? 'bg-primary border-primary shadow-glow-primary' 
                                  : 'bg-timeline-bg border-timeline-inactive'
                              }`}
                            />
                          </div>

                          {/* Content Card */}
                          <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                            <Card 
                              className={`bg-card/50 backdrop-blur-sm border transition-all duration-500 transform ${
                                isActive 
                                  ? 'border-primary/30 shadow-glow-secondary translate-y-0 opacity-100' 
                                  : 'border-border/50 translate-y-4 opacity-60'
                              }`}
                            >
                              <CardHeader className="pb-3">
                                <div className="flex items-center justify-between mb-2">
                                  <Badge className={typeColors[event.type]}>
                                    <IconComponent className="w-3 h-3 mr-1" />
                                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                  </Badge>
                                  <span className="text-sm text-muted-foreground">{event.date}</span>
                                </div>
                                <CardTitle className="text-lg font-semibold text-foreground">
                                  {event.title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                                  {event.description}
                                </p>
                                {event.participants && (
                                  <div className="flex items-center text-xs text-muted-foreground">
                                    <Users className="w-3 h-3 mr-1" />
                                    {event.participants} participants
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          </div>

                          {/* Spacer for opposite side */}
                          <div className="w-5/12" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Timeline Footer */}
        <div className="text-center mt-20 pt-16 border-t border-primary/20">
          <div className="relative">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Journey Continues...
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              This is just the beginning. Stay tuned for more exciting events, milestones, and innovations coming your way.
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-1 h-1 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}