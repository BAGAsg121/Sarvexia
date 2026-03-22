interface DrawerProps {
  open: boolean;
  navigateTo: (page: string) => void;
  closeDrawer: () => void;
}

export default function Drawer({ open, navigateTo, closeDrawer }: DrawerProps) {
  const handleNavigate = (page: string) => {
    navigateTo(page);
    closeDrawer();
  };

  return (
    <>
      <div className={`drawer-overlay ${open ? 'show' : ''}`} onClick={closeDrawer} />
      <div id="drawer" className={open ? 'open' : ''}>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }}>About Us</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('services'); }}>Services</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('approach'); }}>How We Work</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('clients'); }}>Clients</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('faq'); }}>FAQ</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('portal-builder'); }}>Build Portal</a>
        <a href="#" style={{color:'var(--gold2)'}} onClick={(e) => { e.preventDefault(); handleNavigate('admin-portal'); }}>Demo Portal ✦</a>
        <a href="#" className="drawer-cta" onClick={(e) => { e.preventDefault(); handleNavigate('contact'); }}>
          Request a Demo
        </a>
      </div>
    </>
  );
}
