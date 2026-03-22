interface NavProps {
  scrolled: boolean;
  currentPage: string;
  navigateTo: (page: string) => void;
  drawerOpen: boolean;
  toggleDrawer: () => void;
}

export default function Nav({ scrolled, currentPage, navigateTo, drawerOpen, toggleDrawer }: NavProps) {
  const isActive = (page: string) => {
    if (page === 'services') return currentPage === 'services' || currentPage.startsWith('svc-');
    return currentPage === page;
  };

  return (
    <nav id="nav" className={scrolled ? 'sc' : ''}>
      <div className="n-logo" onClick={() => navigateTo('home')}>
        NYTHEX
      </div>
      <ul className="n-links">
        <li>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateTo('about'); }}
            className={isActive('about') ? 'active' : ''}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateTo('services'); }}
            className={isActive('services') ? 'active' : ''}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateTo('approach'); }}
            className={isActive('approach') ? 'active' : ''}
          >
            How We Work
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateTo('clients'); }}
            className={isActive('clients') ? 'active' : ''}
          >
            Clients
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateTo('faq'); }}
            className={isActive('faq') ? 'active' : ''}
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateTo('portal-builder'); }}
            className={isActive('portal-builder') ? 'active' : ''}
          >
            Build Portal
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigateTo('admin-portal'); }}
            className={isActive('admin-portal') ? 'active' : ''}
            style={{color:'var(--gold2)',opacity:.9}}
          >
            Demo ✦
          </a>
        </li>
      </ul>
      <button className="n-cta" onClick={() => navigateTo('contact')}>
        Get Started
      </button>
      <div className={`ham ${drawerOpen ? 'open' : ''}`} onClick={toggleDrawer}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
