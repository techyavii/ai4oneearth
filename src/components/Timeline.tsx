import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Calendar } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      date: "February 1, 2026",
      activity: "Registration Opens",
      status: "upcoming",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      date: "March 15, 2026", 
      activity: "Registration Closes",
      status: "upcoming",
      icon: <Clock className="w-5 h-5" />
    },
    {
      date: "April 11, 2026",
      activity: "Selection Round (Shortlisting of Teams)",
      status: "upcoming", 
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      date: "April 11, 2026 (midnight)",
      activity: "Notification of Shortlisted Teams For Final Round",
      status: "upcoming",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      date: "April 12, 2026",
      activity: "AI Tool Challenge 2026 (Final Round)",
      status: "main-event",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      date: "April 12, 2026",
      activity: "Announcement of Winners, Certificate and Prize Distribution",
      status: "main-event",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Event Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           Mark your calendars! Here's everything you need to know about important dates and milestones for AI Tool Development Challenge 2026.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-earth-green to-earth-teal"></div>
            
            {/* Timeline Events */}
            <div className="space-y-8">
              {events.map((event, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                    event.status === 'main-event' 
                      ? 'bg-earth-green border-earth-green shadow-glow' 
                      : 'bg-white border-earth-teal'
                  }`}></div>
                  
                  {/* Event Card */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:pr-8' : 'md:pl-1/2 md:pl-8'}`}>
                    <Card className={`bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 ${
                      event.status === 'main-event' ? 'ring-2 ring-earth-green/30' : ''
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            event.status === 'main-event'
                              ? 'bg-gradient-hero text-white'
                              : 'bg-earth-teal/10 text-earth-teal'
                          }`}>
                            {event.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                              <h3 className={`font-semibold ${
                                event.status === 'main-event' ? 'text-earth-green text-lg' : 'text-foreground'
                              }`}>
                                {event.activity}
                              </h3>
                              <div className="text-sm text-muted-foreground">
                                {event.date}
                                {/* {event.time && (
                                  <div className="text-earth-teal font-medium">
                                    {event.time}
                                  </div>
                                )} */}
                              </div>
                            </div>
                            {event.status === 'main-event' && (
                              <div className="text-sm text-muted-foreground">
                                🚀 Main event - don't miss it!
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration Reminder */}
        <div className="mt-16 text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't Miss Out!
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Registration opens on February 1st and closes on March 15th. 
            Make sure to register early to secure your spot in this amazing challenge!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-earth-green font-medium">
              <Clock className="w-5 h-5" />
              Limited Spots Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;