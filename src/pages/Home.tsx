import { useEffect, useRef } from 'react';

interface HomeProps {
  navigateTo: (page: string) => void;
}

function Counter({ target, decimals = 0 }: { target: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const observedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || observedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observedRef.current) {
            observedRef.current = true;
            const duration = 2000;
            const start = performance.now();

            const animate = (currentTime: number) => {
              const progress = Math.min((currentTime - start) / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 4);
              const value = target * easeOut;
              el.textContent = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();
              if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals]);

  return <span ref={ref}>0</span>;
}

export default function Home({ navigateTo }: HomeProps) {
  return (
    <div className="page active" id="pg-home">
      <section className="hero">
        <div className="h-hex"></div>
        <div className="h-radial"></div>
        <div className="h-ring"></div>
        <div className="h-ring"></div>
        <div className="h-ring"></div>
        <div className="hero-body">
          <div className="h-eyebrow">B2B Fintech Infrastructure & AI Solutions</div>
          <h1 className="h-title">NYTHEX</h1>
          <p className="h-sub">
            The <em>white-label financial infrastructure</em> and <em>AI intelligence layer</em> your clients never see — and can never operate without.
          </p>
          <div className="h-btns">
            <button className="btn-gold" onClick={() => navigateTo('contact')}>
              Request a Demo
            </button>
            <button className="btn-ghost" onClick={() => navigateTo('services')}>
              Explore Services
            </button>
          </div>
        </div>
        <div className="h-stats">
          <div className="h-stat">
            <div className="hs-num"><Counter target={340} />+</div>
            <div className="hs-lbl">Portals Deployed</div>
          </div>
          <div className="h-stat">
            <div className="hs-num"><Counter target={98} />%</div>
            <div className="hs-lbl">Client Retention</div>
          </div>
          <div className="h-stat">
            <div className="hs-num"><Counter target={47} /></div>
            <div className="hs-lbl">Countries Active</div>
          </div>
          <div className="h-stat">
            <div className="hs-num">$<Counter target={2.4} decimals={1} />B</div>
            <div className="hs-lbl">Processed</div>
          </div>
        </div>
        <div className="h-scroll">
          <span className="sc-lbl">Scroll</span>
          <div className="sc-line"></div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="mq-track">
          {[...Array(2)].map((_, i) => (
            <span key={i}>
              <span className="mq-i">White-Label Portals<span className="mq-dot"></span></span>
              <span className="mq-i">AI Business Assistant<span className="mq-dot"></span></span>
              <span className="mq-i">Fintech Infrastructure<span className="mq-dot"></span></span>
              <span className="mq-i">B2B Digital Banking<span className="mq-dot"></span></span>
              <span className="mq-i">Custom Development<span className="mq-dot"></span></span>
              <span className="mq-i">API Integration<span className="mq-dot"></span></span>
              <span className="mq-i">KYC · AML<span className="mq-dot"></span></span>
              <span className="mq-i">Mobile Apps<span className="mq-dot"></span></span>
              <span className="mq-i">AI Automation<span className="mq-dot"></span></span>
              <span className="mq-i">SaaS Products<span className="mq-dot"></span></span>
            </span>
          ))}
        </div>
      </div>

      <div className="home-services">
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>
          <span className="sec-tag rv">What We Build</span>
          <h2 className="sec-h rv d1">Seven Ways <span className="hl">NYTHEX</span> Powers Your Clients</h2>
          <div className="grule rv d2"></div>
        </div>
        <div className="hs-grid">
          <div className="hs-card rv" onClick={() => navigateTo('svc-whitelabel')}>
            <div className="hs-num">/ 01</div>
            <svg className="hs-ico" viewBox="0 0 44 44" fill="none" stroke="#B8963E" strokeWidth="1.2">
              <rect x="3" y="7" width="38" height="30" rx="2"/>
              <line x1="3" y1="16" x2="41" y2="16" opacity=".5"/>
              <rect x="9" y="23" width="8" height="4" rx="1" fill="#B8963E" opacity=".35"/>
              <rect x="21" y="23" width="14" height="4" rx="1" opacity=".2"/>
            </svg>
            <div className="hs-name">White-Label Portals</div>
            <p className="hs-desc">Full financial portals under your client's brand. Our engine, their identity.</p>
            <button className="lm-btn">Learn More <span className="lm-arrow">→</span></button>
          </div>

          <div className="hs-card rv d1" onClick={() => navigateTo('svc-custom')}>
            <div className="hs-num">/ 02</div>
            <svg className="hs-ico" viewBox="0 0 44 44" fill="none" stroke="#B8963E" strokeWidth="1.2">
              <circle cx="22" cy="22" r="17"/>
              <circle cx="22" cy="22" r="8" opacity=".5"/>
              <line x1="22" y1="5" x2="22" y2="13"/>
              <line x1="22" y1="31" x2="22" y2="39"/>
              <line x1="5" y1="22" x2="13" y2="22"/>
              <line x1="31" y1="22" x2="39" y2="22"/>
            </svg>
            <div className="hs-name">Custom Development</div>
            <p className="hs-desc">Bespoke portals, dashboards, and financial tools built to exact specification.</p>
            <button className="lm-btn">Learn More <span className="lm-arrow">→</span></button>
          </div>

          <div className="hs-card rv d2" onClick={() => navigateTo('svc-api')}>
            <div className="hs-num">/ 03</div>
            <svg className="hs-ico" viewBox="0 0 44 44" fill="none" stroke="#B8963E" strokeWidth="1.2">
              <path d="M7 22 L22 7 L37 22 L22 37 Z"/>
              <path d="M15 22 L22 15 L29 22 L22 29 Z" opacity=".5"/>
              <circle cx="22" cy="22" r="3" fill="#B8963E" opacity=".6"/>
            </svg>
            <div className="hs-name">API Integration</div>
            <p className="hs-desc">Payment gateways, KYC/AML, open banking — connected to any existing stack.</p>
            <button className="lm-btn">Learn More <span className="lm-arrow">→</span></button>
          </div>

          <div className="hs-card rv" onClick={() => navigateTo('svc-banking')}>
            <div className="hs-num">/ 04</div>
            <svg className="hs-ico" viewBox="0 0 44 44" fill="none" stroke="#B8963E" strokeWidth="1.2">
              <rect x="9" y="3" width="16" height="28" rx="2"/>
              <rect x="19" y="13" width="16" height="28" rx="2" opacity=".45"/>
            </svg>
            <div className="hs-name">Digital Banking UI</div>
            <p className="hs-desc">Neobank-grade interfaces for credit unions, challenger banks, and embedded finance.</p>
            <button className="lm-btn">Learn More <span className="lm-arrow">→</span></button>
          </div>

          <div className="hs-card rv d1" onClick={() => navigateTo('svc-mobile')}>
            <div className="hs-num">/ 05</div>
            <svg className="hs-ico" viewBox="0 0 44 44" fill="none" stroke="#B8963E" strokeWidth="1.2">
              <rect x="13" y="2" width="18" height="40" rx="4"/>
              <line x1="18" y1="8" x2="26" y2="8" opacity=".5"/>
              <circle cx="22" cy="36" r="2" fill="#B8963E" opacity=".5"/>
            </svg>
            <div className="hs-name">Mobile Applications</div>
            <p className="hs-desc">iOS & Android fintech apps built with bank-grade security and consumer-grade UX.</p>
            <button className="lm-btn">Learn More <span className="lm-arrow">→</span></button>
          </div>

          <div className="hs-card rv d2" onClick={() => navigateTo('svc-saas')}>
            <div className="hs-num">/ 06</div>
            <svg className="hs-ico" viewBox="0 0 44 44" fill="none" stroke="#B8963E" strokeWidth="1.2">
              <rect x="3" y="3" width="17" height="17" rx="1"/>
              <rect x="24" y="3" width="17" height="17" rx="1" opacity=".5"/>
              <rect x="3" y="24" width="17" height="17" rx="1" opacity=".5"/>
              <rect x="24" y="24" width="17" height="17" rx="1"/>
            </svg>
            <div className="hs-name">SaaS Products</div>
            <p className="hs-desc">Licensed NYTHEX modules — risk dashboards, compliance tracking, transaction monitoring.</p>
            <button className="lm-btn">Learn More <span className="lm-arrow">→</span></button>
          </div>

          <div
            className="hs-card rv"
            style={{
              gridColumn: '1/-1',
              background: 'linear-gradient(135deg,rgba(155,110,255,.05),rgba(74,127,255,.04))',
              border: '1px solid rgba(155,110,255,.12)'
            }}
            onClick={() => navigateTo('svc-ai')}
          >
            <div className="hs-num" style={{ color: 'rgba(155,110,255,.5)' }}>/ 07</div>
            <div className="hs-ai-badge">New — AI Powered</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
              <div>
                <svg className="hs-ico" viewBox="0 0 44 44" fill="none" stroke="#9B6EFF" strokeWidth="1.2">
                  <circle cx="22" cy="22" r="8"/>
                  <circle cx="22" cy="22" r="15" opacity=".4"/>
                  <path d="M22 7v4M22 33v4M7 22h4M33 22h4M11.5 11.5l2.8 2.8M29.7 29.7l2.8 2.8M11.5 32.5l2.8-2.8M29.7 14.3l2.8-2.8" opacity=".6"/>
                </svg>
                <div className="hs-name" style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>
                  AI Integration & Business Assistant
                </div>
                <p className="hs-desc" style={{ fontSize: 15, maxWidth: 520 }}>
                  Embed intelligent AI assistants directly into your client's websites and platforms. Automates customer support, sales workflows, document processing, scheduling, and daily business operations — 24/7, with no human intervention needed.
                </p>
                <button className="lm-btn" style={{ color: 'var(--purple)' }}>
                  Explore AI Services <span className="lm-arrow">→</span>
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ background: 'rgba(155,110,255,.06)', border: '1px solid rgba(155,110,255,.1)', padding: '16px 20px', fontSize: 13, color: 'var(--plat)', fontWeight: 300, borderLeft: '2px solid var(--purple)' }}>
                  🤖 <strong style={{ color: 'var(--frost)' }}>AI Customer Support</strong> — Handles 80% of queries automatically
                </div>
                <div style={{ background: 'rgba(155,110,255,.06)', border: '1px solid rgba(155,110,255,.1)', padding: '16px 20px', fontSize: 13, color: 'var(--plat)', fontWeight: 300, borderLeft: '2px solid var(--accent)' }}>
                  📄 <strong style={{ color: 'var(--frost)' }}>Document Intelligence</strong> — Reads, extracts, and routes documents
                </div>
                <div style={{ background: 'rgba(155,110,255,.06)', border: '1px solid rgba(155,110,255,.1)', padding: '16px 20px', fontSize: 13, color: 'var(--plat)', fontWeight: 300, borderLeft: '2px solid var(--purple)' }}>
                  📅 <strong style={{ color: 'var(--frost)' }}>Smart Scheduling</strong> — Books meetings, sends reminders, manages calendars
                </div>
                <div style={{ background: 'rgba(155,110,255,.06)', border: '1px solid rgba(155,110,255,.1)', padding: '16px 20px', fontSize: 13, color: 'var(--plat)', fontWeight: 300, borderLeft: '2px solid var(--accent)' }}>
                  📊 <strong style={{ color: 'var(--frost)' }}>Sales Intelligence</strong> — Qualifies leads, follows up, generates proposals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── INTEGRATIONS SECTION ── */}
      <div className="home-integrations">
        <div className="int-header">
          <span className="sec-tag rv">Plug Into Everything</span>
          <h2 className="sec-h rv d1">Integrate With <span className="hl">Any Provider</span></h2>
          <div className="grule rv d2"></div>
          <p className="rv d3" style={{fontSize:15,fontWeight:300,fontStyle:'italic',color:'var(--plat)',maxWidth:580,lineHeight:1.8}}>
            From Indian payment rails to global AI models — NYTHEX connects your clients' portals to the entire fintech ecosystem.
          </p>
        </div>
        <div className="int-grid">
          <div className="int-card rv">
            <div className="int-cat">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Banking Partners
            </div>
            <div className="int-title">Bank-Grade Rails</div>
            <p className="int-desc">Direct integrations with India's top banks for settlements, account services, and payment routing.</p>
            <div className="int-logos">
              <span className="int-logo hl">HDFC Bank</span><span className="int-logo hl">Axis Bank</span>
              <span className="int-logo">SBI</span><span className="int-logo">ICICI Bank</span>
              <span className="int-logo">YES Bank</span><span className="int-logo">Kotak</span><span className="int-logo">IndusInd</span>
            </div>
          </div>
          <div className="int-card rv d1">
            <div className="int-cat">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              Payment Services
            </div>
            <div className="int-title">AEPS · DMT · Cards</div>
            <p className="int-desc">Full AEPS stack, domestic money transfer corridors, and card issuance (Visa, Mastercard, RuPay).</p>
            <div className="int-logos">
              <span className="int-logo hl">AEPS</span><span className="int-logo hl">DMT</span>
              <span className="int-logo">UPI</span><span className="int-logo">IMPS</span>
              <span className="int-logo">NEFT</span><span className="int-logo">Visa</span>
              <span className="int-logo">RuPay</span><span className="int-logo">Mastercard</span>
            </div>
          </div>
          <div className="int-card rv d2">
            <div className="int-cat">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              CRM & Productivity
            </div>
            <div className="int-title">Business Workflows</div>
            <p className="int-desc">Sync operations with leading CRM, helpdesk, and project management platforms out-of-the-box.</p>
            <div className="int-logos">
              <span className="int-logo hl">Zoho CRM</span><span className="int-logo hl">Jira</span>
              <span className="int-logo">Freshdesk</span><span className="int-logo">Salesforce</span>
              <span className="int-logo">HubSpot</span><span className="int-logo">Slack</span>
            </div>
          </div>
          <div className="int-card rv" style={{borderColor:'rgba(155,110,255,.15)',background:'linear-gradient(135deg,rgba(155,110,255,.04),var(--surface))'}}>
            <div className="int-cat" style={{color:'var(--purple)'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              AI & LLM Engines
            </div>
            <div className="int-title">Generative AI</div>
            <p className="int-desc">Embed any leading AI model — customer support, document processing, lead scoring, and more.</p>
            <div className="int-logos">
              <span className="int-logo" style={{borderColor:'rgba(155,110,255,.3)',color:'var(--purple)'}}>GPT-4o</span>
              <span className="int-logo" style={{borderColor:'rgba(155,110,255,.3)',color:'var(--purple)'}}>Claude 3</span>
              <span className="int-logo" style={{borderColor:'rgba(155,110,255,.2)'}}>Gemini</span>
              <span className="int-logo" style={{borderColor:'rgba(155,110,255,.2)'}}>Mistral</span>
              <span className="int-logo" style={{borderColor:'rgba(155,110,255,.18)'}}>Llama 3</span>
            </div>
          </div>
          <div className="int-card rv d1">
            <div className="int-cat">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Compliance & KYC
            </div>
            <div className="int-title">KYC · AML · eSign</div>
            <p className="int-desc">Regulatory-approved identity verification, AML checks, and digital signatures built-in.</p>
            <div className="int-logos">
              <span className="int-logo hl">CKYC</span><span className="int-logo hl">Aadhaar</span>
              <span className="int-logo">DigiLocker</span><span className="int-logo">VKYC</span>
              <span className="int-logo">eSign</span><span className="int-logo">PAN Verify</span>
            </div>
          </div>
          <div className="int-card rv d2">
            <div className="int-cat">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
              Cloud & Infrastructure
            </div>
            <div className="int-title">Cloud Native</div>
            <p className="int-desc">Deploy on any major cloud with auto-scaling and 99.99% uptime SLA guarantees.</p>
            <div className="int-logos">
              <span className="int-logo hl">AWS</span><span className="int-logo hl">Azure</span>
              <span className="int-logo">GCP</span><span className="int-logo">Cloudflare</span>
              <span className="int-logo">Docker</span><span className="int-logo">Kubernetes</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── PROVIDER ANIMATED MARQUEE BAR ── */}
      <div className="provider-marquee-section">
        <div className="pm-header">
          <div className="pm-label">Trusted Integration Partners — Hover Any Provider</div>
        </div>
        <div className="pm-lane">
          <div className="pm-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} style={{display:'contents'}}>
                {([
                  {icon:'🏦',name:'HDFC Bank',tip:'Banking rails & settlement accounts'},
                  {icon:'⚡',name:'Zoho CRM',tip:'Customer management & automation'},
                  {icon:'🤖',name:'GPT-4o',tip:'AI chat, support & content generation'},
                  {icon:'💳',name:'RuPay Cards',tip:'Prepaid, debit & credit card issuance'},
                  {icon:'📡',name:'AEPS',tip:'Aadhaar-enabled payment service'},
                  {icon:'🔵',name:'Claude 3',tip:'Document AI & intelligent reasoning'},
                  {icon:'🏛️',name:'Axis Bank',tip:'IMPS, NEFT & account services'},
                  {icon:'📋',name:'Jira',tip:'Project management & ticketing'},
                  {icon:'💸',name:'DMT',tip:'Domestic money transfer corridors'},
                  {icon:'🌐',name:'AWS',tip:'Cloud hosting & managed infrastructure'},
                  {icon:'✨',name:'Gemini Pro',tip:'Google AI multimodal intelligence'},
                  {icon:'📱',name:'UPI',tip:'Real-time unified payments interface'},
                  {icon:'🔐',name:'CKYC',tip:'Central KYC registry compliance'},
                  {icon:'☁️',name:'Azure',tip:'Microsoft cloud & enterprise services'},
                ] as {icon:string;name:string;tip:string}[]).map((p) => (
                  <div className="pm-item" key={p.name + i}>
                    <div className="pm-icon">{p.icon}</div>
                    <span className="pm-name">{p.name}</span>
                    <div className="pm-tooltip">{p.tip}</div>
                  </div>
                ))}
              </span>
            ))}
          </div>
        </div>
        <div className="pm-lane" style={{marginTop:16}}>
          <div className="pm-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} style={{display:'contents'}}>
                {([
                  {icon:'🛡️',name:'VKYC',tip:'Video KYC & real-time identity checks'},
                  {icon:'📊',name:'HubSpot',tip:'Marketing automation & CRM'},
                  {icon:'🦙',name:'Llama 3',tip:'Open-source AI for private deployments'},
                  {icon:'💬',name:'Freshdesk',tip:'Customer support & helpdesk'},
                  {icon:'🔄',name:'IMPS',tip:'Instant money payment system'},
                  {icon:'🌩️',name:'Cloudflare',tip:'DDoS protection & edge network'},
                  {icon:'🏦',name:'SBI',tip:'State bank payment integration'},
                  {icon:'🧾',name:'DigiLocker',tip:'Document vault & eSign services'},
                  {icon:'📦',name:'Docker',tip:'Containerised microservice deployment'},
                  {icon:'💰',name:'Visa',tip:'International card payment acceptance'},
                  {icon:'🤝',name:'Mistral AI',tip:'Efficient on-premise AI inference'},
                  {icon:'🏗️',name:'Kubernetes',tip:'Auto-scaling container orchestration'},
                  {icon:'📲',name:'Mastercard',tip:'Global payment network integration'},
                  {icon:'✉️',name:'Slack',tip:'Team notifications & workflow alerts'},
                ] as {icon:string;name:string;tip:string}[]).map((p) => (
                  <div className="pm-item" key={p.name + i}>
                    <div className="pm-icon">{p.icon}</div>
                    <span className="pm-name">{p.name}</span>
                    <div className="pm-tooltip">{p.tip}</div>
                  </div>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="home-nums">
        <div className="nums-grid">
          <div className="ni rv">
            <div className="ni-val">$<Counter target={2.4} decimals={1} />B</div>
            <div className="ni-lbl">Transactions Processed</div>
            <div className="ni-bar"></div>
          </div>
          <div className="ni rv d1">
            <div className="ni-val"><Counter target={340} />+</div>
            <div className="ni-lbl">Live Portals</div>
            <div className="ni-bar"></div>
          </div>
          <div className="ni rv d2">
            <div className="ni-val"><Counter target={14} />ms</div>
            <div className="ni-lbl">API Response</div>
            <div className="ni-bar"></div>
          </div>
          <div className="ni rv d3">
            <div className="ni-val"><Counter target={99.98} decimals={2} />%</div>
            <div className="ni-lbl">Uptime SLA</div>
            <div className="ni-bar"></div>
          </div>
        </div>
      </div>

      <div className="home-cta-strip rv">
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="hcs-h">Your Next Platform<br/><span className="hl">Starts Here.</span></h2>
          <p className="hcs-sub">Tell us what your client needs. We'll build something they'll never know came from NYTHEX.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-gold" onClick={() => navigateTo('contact')}>Request a Demo</button>
            <button className="btn-ghost" onClick={() => navigateTo('services')}>View All Services</button>
          </div>
        </div>
      </div>
    </div>
  );
}
