import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { useEvents } from "@/hooks/use-madrasa";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import { format } from "date-fns";

export default function Events() {
  const { data: events, isLoading } = useEvents();

  return (
    <Layout>
      <SectionHeader 
        title="Upcoming Events" 
        subtitle="Join us for lectures, workshops, and community gatherings."
      />

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-muted rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="space-y-6 max-w-4xl mx-auto">
          {events?.length === 0 ? (
            <div className="text-center py-16 bg-secondary/20 rounded-3xl border border-dashed border-secondary">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-primary">No upcoming events</h3>
              <p className="text-muted-foreground">Check back soon for updates.</p>
            </div>
          ) : (
            events?.map((event) => (
              <Card key={event.id} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow duration-300 rounded-2xl">
                <div className="flex flex-col md:flex-row">
                  {/* Date Box */}
                  <div className="bg-primary text-primary-foreground p-6 flex flex-col justify-center items-center md:w-48 text-center shrink-0">
                    <span className="text-4xl font-bold font-serif block">
                      {format(new Date(event.date), 'd')}
                    </span>
                    <span className="text-lg font-medium opacity-90 uppercase tracking-widest text-sm">
                      {format(new Date(event.date), 'MMM')}
                    </span>
                    <span className="text-xs opacity-70 mt-1">
                      {format(new Date(event.date), 'yyyy')}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-6 md:p-8 flex-1">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent" />
                        {format(new Date(event.date), 'h:mm a')}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        {event.location}
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))
          )}
        </div>
      )}
    </Layout>
  );
}
