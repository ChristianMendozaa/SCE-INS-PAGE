
import { useState, useEffect } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import ChapterCards from '../components/chapters/ChapterCards';
import MembershipSection from '../components/membership/MembershipSection';
import EventsCalendar from '../components/events/EventsCalendar';
import PublicationsSection from '../components/publications/PublicationsSection';
import TeamSection from '../components/team/TeamSection';
import ProjectProposalSection from '../components/home/ProjectProposalSection';
import ActiveProjectsSection from '../components/projects/ActiveProjectsSection';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a preference stored in local storage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // If the user has a saved preference, use that. Otherwise, use the system preference
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(prefersDark);
    }

    // Update the document class when the theme changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <About />
        <ChapterCards />
        <ActiveProjectsSection />
        <ProjectProposalSection />
        <MembershipSection />
        <EventsCalendar />
        <PublicationsSection />
        <TeamSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
