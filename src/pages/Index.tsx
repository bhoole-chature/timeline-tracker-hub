import { UpcomingEvents } from "@/components/UpcomingEvents";
import { Timeline } from "@/components/Timeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UpcomingEvents />
      <Timeline />
    </div>
  );
};

export default Index;
