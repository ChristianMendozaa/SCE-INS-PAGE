
import { useState, useEffect } from 'react';
import EventsCalendar from '../components/events/EventsCalendar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';

const Events = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="pt-16 pb-10 bg-white dark:bg-gray-900">
        <div className="section-container pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Eventos y Actividades</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Descubre conferencias, talleres y actividades organizadas por nuestra sociedad.
          </p>
        </div>
      </div>
      
      <div className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <EventsCalendar />
          </div>
          <div className="lg:col-span-1">
            <Card className="p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Calendario</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Events;
