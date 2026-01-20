import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import Events from "@/pages/Events";
import Teachers from "@/pages/Teachers";
import Contact from "@/pages/Contact";
import KnowledgeHub from "@/pages/KnowledgeHub";
import PrayerTimes from "@/pages/PrayerTimes";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} />
      <Route path="/events" component={Events} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/contact" component={Contact} />
      <Route path="/knowledge" component={KnowledgeHub} />
      <Route path="/prayer-times" component={PrayerTimes} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
