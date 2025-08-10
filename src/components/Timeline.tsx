import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Trophy, Users, Lightbulb } from "lucide-react";

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  type: "milestone" | "event" | "achievement" | "announcement";
  status: "completed" | "active" | "upcoming";
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    title: "Platform Launch",
    date: "January 2024",
    description: "Official launch of our event management platform with over 1000 registered users in the first week.",
    type: "milestone",
    status: "completed"
  },
  {
    id: "2",
    title: "Tech Summit 2024",
    date: "March 2024",
    description: "Our biggest conference yet with 500+ attendees, 20 speakers, and groundbreaking tech announcements.",
    type: "event",
    status: "completed"
  },
  {
    id: "3",
    title: "Community Milestone",
    date: "June 2024",
    description: "Reached 10,000 active community members and launched our mentorship program.",
    type: "achievement",
    status: "completed"
  },
  {
    id: "4",
    title: "AI Workshop Series",
    date: "September 2024",
    description: "Launched comprehensive AI workshop series covering machine learning, deep learning, and practical applications.",
    type: "event",
    status: "active"
  },
  {
    id: "5",
    title: "Global Expansion",
    date: "December 2024",
    description: "Expanding our events to 15 new cities worldwide, bringing our community closer together.",
    type: "announcement",
    status: "upcoming"
  },
  {
    id: "6",
    title: "Innovation Awards",
    date: "February 2025",
    description: "Annual innovation awards ceremony celebrating the best projects and contributions from our community.",
    type: "event",
    status: "upcoming"
  }
];

const typeIcons = {
  milestone: Trophy,
  event: Calendar,
  achievement: CheckCircle,
  announcement: Lightbulb
};

const typeColors = {
  milestone: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  event: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  achievement: "bg-green-500/10 text-green-400 border-green-500/20",
  announcement: "bg-purple-500/10 text-purple-400 border-purple-500/20"
};

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const timelineHeight = timelineRef.current.offsetHeight;
      
      // Calculate how much of the timeline is visible
      const timelineTop = timelineRect.top;
      const timelineBottom = timelineRect.bottom;
      
      if (timelineTop <= viewportHeight && timelineBottom >= 0) {
        // Timeline is in viewport
        const visibleTop = Math.max(0, -timelineTop);
        const visibleHeight = Math.min(timelineHeight, viewportHeight - Math.max(0, timelineTop));
        const progress = visibleTop / Math.max(1, timelineHeight - viewportHeight);
        
        setScrollProgress(Math.min(1, Math.max(0, progress)));
        
        // Update active index based on scroll position
        const currentIndex = Math.floor(progress * timelineEvents.length);
        setActiveIndex(Math.min(timelineEvents.length - 1, Math.max(0, currentIndex)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-primary-gradient bg-clip-text text-transparent">
            Our Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const isActive = index <= activeIndex;
              const isLeft = index % 2 === 0;
              const IconComponent = typeIcons[event.type];

              return (
                <div
                  key={event.id}
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
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {event.description}
                        </p>
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
      </div>
    </section>
  );
}