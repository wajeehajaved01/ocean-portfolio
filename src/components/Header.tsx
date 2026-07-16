 

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
    <header className="site-header">
      <div className="logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
        WJ
      </div>
      <nav className="nav-links">
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