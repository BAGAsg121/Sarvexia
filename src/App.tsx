import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Canvas from './components/Canvas';
import Nav from './components/Nav';
import Drawer from './components/Drawer';
import Progress from './components/Progress';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdminPortal from './pages/AdminPortal';
import PortalBuilder from './pages/PortalBuilder';
import ContentPage from './pages/ContentPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress((scrollTop / (docHeight || 1)) * 100);
      setScrolled(scrollTop > 55);
      triggerReveals();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerReveals = () => {
    document.querySelectorAll('.rv,.rv-l,.rv-r').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.91) {
        el.classList.add('on');
      }
    });
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(triggerReveals, 80);
  };

  const closeDrawer = () => setDrawerOpen(false);

  const noFooterPages = ['admin-portal'];

  return (
    <div className={drawerOpen ? 'grow' : ''}>
      <Loader loading={loading} />
      <Cursor />
      <Canvas />
      <Progress progress={progress} />
      <Nav
        scrolled={scrolled}
        currentPage={currentPage}
        navigateTo={navigateTo}
        drawerOpen={drawerOpen}
        toggleDrawer={() => setDrawerOpen(!drawerOpen)}
      />
      <Drawer
        open={drawerOpen}
        navigateTo={navigateTo}
        closeDrawer={closeDrawer}
      />

      <main>
        {currentPage === 'home' && <Home navigateTo={navigateTo} />}
        {currentPage === 'portal-builder' && <PortalBuilder navigateTo={navigateTo} />}
        {currentPage === 'admin-portal' && <AdminPortal navigateTo={navigateTo} />}
        {['home', 'portal-builder', 'admin-portal'].includes(currentPage) ? null : <ContentPage pageId={currentPage} navigateTo={navigateTo} />}
      </main>

      {!noFooterPages.includes(currentPage) && <Footer navigateTo={navigateTo} />}
      <BackToTop show={scrolled} />
    </div>
  );
}

export default App;
