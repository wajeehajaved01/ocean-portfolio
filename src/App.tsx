import { useState, useTransition } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import OceanWaves from './components/OceanWaves';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isPending, startTransition] = useTransition();

  const handleNavigate = (tab: string) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="app-container">
      {/* Pass navigate function and activeTab to your Header component */}
      <Header onNavigate={handleNavigate} activeTab={activeTab} />
      
      <main className={`main-content ${isPending ? 'transitioning' : ''}`}>
        <div className="fade-in-up" key={activeTab}>
          {renderContent()}
        </div>
      </main>

      <OceanWaves />
    </div>
  );
}