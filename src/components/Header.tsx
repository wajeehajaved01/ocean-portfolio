import Logo from './Logo';

interface HeaderProps {
  onNavigate: (tab: string) => void;
  activeTab: string;
}

export default function Header({ onNavigate, activeTab }: HeaderProps) {
  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className="site-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem', height: '60px' }}>
      {/* Left aligned logo */}
      <div 
        className="logo" 
        onClick={() => onNavigate('home')} 
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', height: '100%' }}
      >
        {/* height is set to 32px to sit perfectly inside a 60px header */}
        <Logo height={32} /> 
      </div>
      
      {/* Right aligned navigation */}
      <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-btn ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}