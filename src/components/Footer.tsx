interface FooterProps {
  navigateTo: (page: string) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  return (
    <footer id="main-footer">
      <div className="ft-top">
        <div className="fb">
          <span className="n-logo">SARVEXIA</span>
          <p>The infrastructure that powers your clients' financial platforms — invisibly, reliably, and at scale.</p>
          <div className="fb-socials">
            <div className="fb-soc">
              <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </div>
            <div className="fb-soc">
              <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </div>
            <div className="fb-soc">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </div>
          </div>
        </div>
        <div className="fc">
          <div className="fc-title">Services</div>
          <ul>
            <li><a onClick={() => navigateTo('svc-whitelabel')}>White-Label Portals</a></li>
            <li><a onClick={() => navigateTo('svc-custom')}>Custom Development</a></li>
            <li><a onClick={() => navigateTo('svc-api')}>API Integration</a></li>
            <li><a onClick={() => navigateTo('svc-banking')}>Digital Banking UI</a></li>
            <li><a onClick={() => navigateTo('svc-mobile')}>Mobile Applications</a></li>
            <li><a onClick={() => navigateTo('svc-saas')}>SaaS Products</a></li>
            <li><a onClick={() => navigateTo('svc-ai')} style={{color:'var(--purple)',opacity:.7}}>AI Integration ✦</a></li>
            <li><a onClick={() => navigateTo('portal-builder')} style={{color:'var(--gold2)',opacity:.8}}>Build Portal →</a></li>
            <li><a onClick={() => navigateTo('admin-portal')} style={{color:'var(--gold)',opacity:.75}}>Demo Portal</a></li>
          </ul>
        </div>
        <div className="fc">
          <div className="fc-title">Company</div>
          <ul>
            <li><a onClick={() => navigateTo('about')}>About SARVEXIA</a></li>
            <li><a onClick={() => navigateTo('approach')}>How We Work</a></li>
            <li><a onClick={() => navigateTo('clients')}>Clients</a></li>
            <li><a onClick={() => navigateTo('faq')}>FAQ</a></li>
            <li><a onClick={() => navigateTo('careers')}>Careers</a></li>
            <li><a onClick={() => navigateTo('press')}>Press</a></li>
          </ul>
        </div>
        <div className="fc">
          <div className="fc-title">Legal</div>
          <ul>
            <li><a onClick={() => navigateTo('privacy')}>Privacy Policy</a></li>
            <li><a onClick={() => navigateTo('terms')}>Terms of Service</a></li>
            <li><a onClick={() => navigateTo('cookies')}>Cookie Policy</a></li>
            <li><a onClick={() => navigateTo('nda')}>NDA Request</a></li>
            <li><a onClick={() => navigateTo('security')}>Security</a></li>
            <li><a onClick={() => navigateTo('contact')}>Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="ft-bot">
        <div className="ft-copy">© 2026 SARVEXIA Ltd. All rights reserved.</div>
        <div className="ft-leg">
          <a onClick={() => navigateTo('privacy')}>Privacy</a>
          <a onClick={() => navigateTo('terms')}>Terms</a>
          <a onClick={() => navigateTo('cookies')}>Cookies</a>
          <a onClick={() => navigateTo('security')}>Security</a>
        </div>
      </div>
    </footer>
  );
}
