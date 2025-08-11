import { UpcomingEvents } from "@/components/UpcomingEvents";
import { Timeline } from "@/components/Timeline";
import { EventTypes } from "@/components/EventTypes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UpcomingEvents />
      <EventTypes />
      <Timeline />
    </div>
  );
};

export default Index;
