
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Chapters from "./pages/Chapters";
import ChapterDetails from "./pages/ChapterDetails";
import Membership from "./pages/Membership";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import Team from "./pages/Team";
import News from "./pages/News";
import Ethics from "./pages/Ethics";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/chapter/:id" element={<ChapterDetails />} />
          <Route path="/membership" element={<Membership />} />
          {/*<Route path="/events" element={<Events />} />
          <Route path="/publications" element={<Publications />} />*/}
          <Route path="/team" element={<Team />} />
          {/*<Route path="/news" element={<News />} />*/}
          <Route path="/ethics" element={<Ethics />} />
          {/*<Route path="/projects" element={<Projects />} /> */}
          {/* Catch-all route for 404 pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
