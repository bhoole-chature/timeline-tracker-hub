import { EventCard } from "./EventCard";

const upcomingEvents = [
  {
    id: "1",
    title: "AI & Machine Learning Summit 2024",
    date: "December 15, 2024",
    location: "San Francisco, CA",
    description: "Join industry leaders and researchers for two days of cutting-edge AI presentations, workshops, and networking. Discover the latest breakthroughs in machine learning, deep learning, and artificial intelligence applications.",
    registeredCount: 342,
    maxCapacity: 500,
    eventType: "conference" as const,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
  },
  {
    id: "2",
    title: "Full-Stack Development Bootcamp",
    date: "January 8-12, 2025",
    location: "New York, NY",
    description: "An intensive 5-day workshop covering modern web development technologies including React, Node.js, databases, and deployment. Perfect for developers looking to enhance their full-stack skills.",
    registeredCount: 28,
    maxCapacity: 30,
    eventType: "workshop" as const,
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop"
  },
  {
    id: "3",
    title: "Tech Innovators Meetup",
    date: "December 20, 2024",
    location: "Austin, TX",
    description: "Monthly gathering of tech entrepreneurs, developers, and innovators. This month's focus: Blockchain technology and its practical applications in modern business solutions.",
    registeredCount: 156,
    maxCapacity: 200,
    eventType: "meetup" as const,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop"
  },
  {
    id: "4",
    title: "Climate Tech Hackathon",
    date: "February 1-3, 2025",
    location: "Seattle, WA",
    description: "48-hour hackathon focused on developing innovative solutions for climate change. Teams will work on projects related to renewable energy, carbon tracking, and sustainable technology.",
    registeredCount: 89,
    maxCapacity: 120,
    eventType: "hackathon" as const,
    image: "https://images.unsplash.com/photo-1569819254402-acc9d7d4b5a0?w=800&h=400&fit=crop"
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
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
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