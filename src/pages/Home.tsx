import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardPreview from '../components/DashboardPreview';
import { BackgroundBeams } from '../components/BackgroundBeams';
import { cn } from '../lib/utils';

interface HomeProps {
  navigateTo: (page: string) => void;
}

/* ─── Counter ─── */
function Counter({ target, decimals = 0 }: { target: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const observedRef = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || observedRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !observedRef.current) {
          observedRef.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (t: number) => {
            const p = Math.min((t - start) / duration, 1);
            const v = target * (1 - Math.pow(1 - p, 4));
            el.textContent = decimals > 0 ? v.toFixed(decimals) : Math.floor(v).toString();
            if (p < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals]);
  return <span ref={ref}>0</span>;
}

/* ─── Cards Sticky Wrapper Removed ─── */

function ServiceCards({ navigateTo }: { navigateTo: (p: string) => void }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const cards = [
    {
      num: '01 / 07', title: 'White-Label Portals', route: 'svc-whitelabel', tag: 'Infrastructure',
      desc: "Full financial portals under your client's brand. Our engine, their identity. Built to enterprise spec, delivered in days.",
      iconSvg: (
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
      ),
    },
    {
      num: '02 / 07', title: 'Custom Development', route: 'svc-custom', tag: 'Engineering',
      desc: 'Bespoke portals, dashboards, and financial tools built to exact specification. Pixel-perfect, performance-first, production-ready.',
      iconSvg: (
        <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      ),
    },
    {
      num: '03 / 07', title: 'API Integration', route: 'svc-api', tag: 'Connectivity',
      desc: 'Payment gateways, KYC/AML, open banking — connected to any existing stack through a single, unified API layer.',
      iconSvg: (
        <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      ),
    },
    {
      num: '04 / 07', title: 'Digital Banking UI', route: 'svc-banking', tag: 'Banking',
      desc: 'Neobank-grade interfaces for credit unions, challenger banks, and embedded finance. Fully compliant, fully branded.',
      iconSvg: (
        <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
      ),
    },
    {
      num: '05 / 07', title: 'Mobile Applications', route: 'svc-mobile', tag: 'Mobile',
      desc: 'iOS & Android fintech apps built with bank-grade security and consumer-grade UX. Ship fast, scale globally.',
      iconSvg: (
        <svg viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
      ),
    },
    {
      num: '06 / 07', title: 'SaaS Products', route: 'svc-saas', tag: 'SaaS',
      desc: 'Licensed SARVEXIA modules — risk dashboards, compliance tracking, transaction monitoring. Ready to deploy.',
      iconSvg: (
        <svg viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
      ),
    },
    {
      num: '07 / 07', title: 'AI Integration & Business Assistant', route: 'svc-ai', tag: 'AI — New',
      desc: 'Embed intelligent AI assistants into your client platforms. Automates support, workflows, document processing, and scheduling — 24/7.',
      isAi: true,
      iconSvg: (
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
      ),
    },
  ];

  return (
    <div className="relative z-10 pb-20">
      <div className="h-[60px]" />
      <div className="flex flex-col gap-[30vh]">
        {cards.map((c, i) => {
          const isExpanded = expanded === i;
          return (
            <div key={i} className="min-h-[100vh] flex items-center justify-center sticky top-0 px-6 sm:px-10">
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                whileHover={!isExpanded ? { scale: 1.02, y: -8 } : undefined}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setExpanded(isExpanded ? null : i)}
                className={cn(
                  "relative w-full max-w-5xl rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden cursor-pointer",
                  "shadow-[0_40px_100px_rgba(0,0,0,0.8)]",
                  isExpanded ? "h-[650px] md:h-[500px]" : "h-[420px]"
                )}
                style={{ zIndex: isExpanded ? 50 : 10 + i }}
              >
                {/* Full Bleed Background Beams */}
                <BackgroundBeams className="opacity-80 mix-blend-screen" />

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
                  
                  {/* Top Section */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white">
                        <div className="w-6 h-6 [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-white [&>svg]:stroke-[1.5] [&>svg]:fill-none">
                          {c.iconSvg}
                        </div>
                      </div>
                      <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
                        {c.tag}
                      </span>
                    </div>

                    <motion.h2 layout className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                      {c.title}
                    </motion.h2>

                    <AnimatePresence mode="popLayout">
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, filter: "blur(10px)" }}
                          animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
                          exit={{ opacity: 0, height: 0, filter: "blur(10px)" }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mb-8">
                            {c.desc}
                          </p>

                          {c.isAi ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mb-4">
                              <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-300">
                                <span className="text-white font-semibold">AI Customer Support</span> — Handles 80% of queries automatically
                              </div>
                              <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-300">
                                <span className="text-white font-semibold flex items-center gap-2">Document Intelligence</span> — Reads, extracts &amp; routes documents
                              </div>
                              <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-300">
                                <span className="text-white font-semibold flex items-center gap-2">Smart Scheduling</span> — Books meetings, sends reminders
                              </div>
                              <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-300">
                                <span className="text-white font-semibold flex items-center gap-2">Sales Intelligence</span> — Qualifies leads, generates proposals
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center gap-4">
                              <button 
                                onClick={(e) => { e.stopPropagation(); navigateTo(c.route); }}
                                className="px-6 py-3 bg-white text-black font-semibold text-sm tracking-wide uppercase hover:bg-neutral-200 transition-colors rounded-none"
                              >
                                View Integration
                              </button>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Footer Section */}
                  <motion.div layout className="flex items-center gap-6 pt-6 mt-8 border-t border-white/10 font-mono text-[10px] tracking-widest uppercase">
                    <span className="text-neutral-500">{c.num}</span>
                    <span className={c.isAi ? "text-neutral-300" : "text-white"}>
                      {c.isAi ? 'AI_POWERED_ACTIVE' : 'ACTIVE_MODULE_STABLE'}
                    </span>
                    <span className="ml-auto text-neutral-600 hidden sm:block">
                      {isExpanded ? 'CLICK TO COLLAPSE' : 'CLICK TO EXPAND'}
                    </span>
                  </motion.div>

                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── IntegrationCards ─── */
function IntegrationCards() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const cards = [
    {
      cat: 'Banking Partners', title: 'Bank-Grade Rails', bg: '#0a0a0c',
      desc: "Direct integrations with India's top banks for settlements, account services, and payment routing.",
      logos: [['HDFC Bank', true], ['Axis Bank', true], ['SBI', false], ['ICICI Bank', false], ['YES Bank', false], ['Kotak', false], ['IndusInd', false]] as [string, boolean][],
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
    },
    {
      cat: 'Payment Services', title: 'AEPS · DMT · Cards', bg: '#0e0e11',
      desc: 'Full AEPS stack, domestic money transfer corridors, and card issuance (Visa, Mastercard, RuPay).',
      logos: [['AEPS', true], ['DMT', true], ['UPI', false], ['IMPS', false], ['NEFT', false], ['Visa', false], ['RuPay', false], ['Mastercard', false]] as [string, boolean][],
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
    },
    {
      cat: 'CRM & Productivity', title: 'Business Workflows', bg: '#121215',
      desc: 'Sync operations with leading CRM, helpdesk, and project management platforms out-of-the-box.',
      logos: [['Zoho CRM', true], ['Jira', true], ['Freshdesk', false], ['Salesforce', false], ['HubSpot', false], ['Slack', false]] as [string, boolean][],
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    },
    {
      cat: 'AI & LLM Engines', title: 'Generative AI', bg: '#151518', isAi: true,
      desc: 'Embed any leading AI model — customer support, document processing, lead scoring, and more.',
      logos: [['GPT-4o', true], ['Claude 3', true], ['Gemini', false], ['Mistral', false], ['Llama 3', false]] as [string, boolean][],
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>,
    },
    {
      cat: 'Compliance & KYC', title: 'KYC · AML · eSign', bg: '#19191c',
      desc: 'Regulatory-approved identity verification, AML checks, and digital signatures built-in.',
      logos: [['CKYC', true], ['Aadhaar', true], ['DigiLocker', false], ['VKYC', false], ['eSign', false], ['PAN Verify', false]] as [string, boolean][],
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    },
    {
      cat: 'Cloud & Infrastructure', title: 'Cloud Native', bg: '#1d1d22',
      desc: 'Deploy on any major cloud with auto-scaling and 99.99% uptime SLA guarantees.',
      logos: [['AWS', true], ['Azure', true], ['GCP', false], ['Cloudflare', false], ['Docker', false], ['Kubernetes', false]] as [string, boolean][],
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>,
    },
  ];

  return (
    <div className="relative z-10 pb-20 mt-10">
      <div className="flex flex-col gap-[30vh]">
        {cards.map((c, i) => {
          const isExpanded = expanded === i;
          return (
            <div key={i} className="min-h-[100vh] flex items-center justify-center sticky top-0 px-6 sm:px-10">
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                whileHover={!isExpanded ? { scale: 1.02, y: -8 } : undefined}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setExpanded(isExpanded ? null : i)}
                className={cn(
                  "relative w-full max-w-5xl rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden cursor-pointer",
                  "shadow-[0_40px_100px_rgba(0,0,0,0.8)]",
                  isExpanded ? "h-[650px] md:h-[500px]" : "h-[420px]"
                )}
                style={{ zIndex: isExpanded ? 50 : 10 + i }}
              >
                {/* Full Bleed Background Beams */}
                <BackgroundBeams className="opacity-80 mix-blend-screen" delayOffset={-(i * 0.4)} />

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
                  
                  {/* Top Section */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white">
                        <div className="w-6 h-6 [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-white [&>svg]:stroke-[1.5] [&>svg]:fill-none">
                          {c.icon}
                        </div>
                      </div>
                      <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
                        {c.cat}
                      </span>
                    </div>

                    <motion.h2 layout className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                      {c.title}
                    </motion.h2>

                    <AnimatePresence mode="popLayout">
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, filter: "blur(10px)" }}
                          animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
                          exit={{ opacity: 0, height: 0, filter: "blur(10px)" }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mb-8">
                            {c.desc}
                          </p>

                          <div className="flex flex-wrap gap-3 max-w-3xl mb-4">
                            {c.logos.map(([name, hl], idx) => (
                              <div 
                                key={idx} 
                                className={cn(
                                  "px-4 py-2 border rounded-md text-sm transition-colors",
                                  hl 
                                    ? "bg-white text-black border-white font-medium shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                                    : "bg-white/5 text-neutral-400 border-white/10"
                                )}
                              >
                                {name}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Footer Section */}
                  <motion.div layout className="flex items-center gap-6 pt-6 mt-8 border-t border-white/10 font-mono text-[10px] tracking-widest uppercase">
                    <span className="text-neutral-500">0{i + 1} / 0{cards.length}</span>
                    <span className={c.isAi ? "text-neutral-300" : "text-white"}>
                      CONNECTION_ESTABLISHED
                    </span>
                    <span className="ml-auto text-neutral-600 hidden sm:block">
                      {isExpanded ? 'CLICK TO COLLAPSE' : 'CLICK TO EXPAND'}
                    </span>
                  </motion.div>

                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Home Page ─── */
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
          <div className="h-eyebrow">B2B Fintech Infrastructure &amp; AI Solutions</div>
          <h1 className="h-title">SARVEXIA</h1>
          <p className="h-sub">
            The <em>white-label financial infrastructure</em> and <em>AI intelligence layer</em> your clients never see — and can never operate without.
          </p>
          <div className="h-btns">
            <button className="btn-gold" onClick={() => navigateTo('contact')}>Request a Demo</button>
            <button className="btn-ghost" onClick={() => navigateTo('services')}>Explore Services</button>
          </div>
        </div>
        <div className="h-stats">
          <div className="h-stat"><div className="hs-num"><Counter target={340} />+</div><div className="hs-lbl">Portals Deployed</div></div>
          <div className="h-stat"><div className="hs-num"><Counter target={98} />%</div><div className="hs-lbl">Client Retention</div></div>
          <div className="h-stat"><div className="hs-num"><Counter target={47} /></div><div className="hs-lbl">Countries Active</div></div>
          <div className="h-stat"><div className="hs-num">$<Counter target={2.4} decimals={1} />B</div><div className="hs-lbl">Processed</div></div>
        </div>
        <div className="h-scroll">
          <span className="sc-lbl">Scroll</span>
          <div className="sc-line"></div>
        </div>
      </section>

      <DashboardPreview />

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

      <div className="sc-section">
        <div className="sc-section-header">
          <span className="sec-tag">What We Build</span>
          <h2 className="sec-h">Seven Ways <span className="hl">SARVEXIA</span> Powers Your Clients</h2>
          <div className="grule"></div>
        </div>
        <ServiceCards navigateTo={navigateTo} />
      </div>

      <div className="sc-section">
        <div className="sc-section-header">
          <span className="sec-tag">Plug Into Everything</span>
          <h2 className="sec-h">Integrate With <span className="hl">Any Provider</span></h2>
          <div className="grule"></div>
          <p style={{ fontSize: 15, fontWeight: 300, fontStyle: 'italic', color: 'var(--plat)', maxWidth: 580, lineHeight: 1.8, margin: '24px auto 0', textAlign: 'center' }}>
            From Indian payment rails to global AI models — SARVEXIA connects your clients' portals to the entire fintech ecosystem.
          </p>
        </div>
        <IntegrationCards />
      </div>

      <div className="provider-marquee-section bg-light-section">
        <div className="pm-header">
          <div className="pm-label">Trusted Integration Partners — Hover Any Provider</div>
        </div>
        <div className="pm-lane">
          <div className="pm-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} style={{ display: 'contents' }}>
                {([
                  { icon: '🏦', name: 'HDFC Bank', tip: 'Banking rails & settlement accounts' },
                  { icon: '⚡', name: 'Zoho CRM', tip: 'Customer management & automation' },
                  { icon: '🤖', name: 'GPT-4o', tip: 'AI chat, support & content generation' },
                  { icon: '💳', name: 'RuPay Cards', tip: 'Prepaid, debit & credit card issuance' },
                  { icon: '📡', name: 'AEPS', tip: 'Aadhaar-enabled payment service' },
                  { icon: '🔵', name: 'Claude 3', tip: 'Document AI & intelligent reasoning' },
                  { icon: '🏛️', name: 'Axis Bank', tip: 'IMPS, NEFT & account services' },
                  { icon: '📋', name: 'Jira', tip: 'Project management & ticketing' },
                  { icon: '💸', name: 'DMT', tip: 'Domestic money transfer corridors' },
                  { icon: '🌐', name: 'AWS', tip: 'Cloud hosting & managed infrastructure' },
                  { icon: '✨', name: 'Gemini Pro', tip: 'Google AI multimodal intelligence' },
                  { icon: '📱', name: 'UPI', tip: 'Real-time unified payments interface' },
                  { icon: '🔐', name: 'CKYC', tip: 'Central KYC registry compliance' },
                  { icon: '☁️', name: 'Azure', tip: 'Microsoft cloud & enterprise services' },
                ] as { icon: string; name: string; tip: string }[]).map((p) => (
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
        <div className="pm-lane" style={{ marginTop: 16 }}>
          <div className="pm-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} style={{ display: 'contents' }}>
                {([
                  { icon: '🛡️', name: 'VKYC', tip: 'Video KYC & real-time identity checks' },
                  { icon: '📊', name: 'HubSpot', tip: 'Marketing automation & CRM' },
                  { icon: '🦙', name: 'Llama 3', tip: 'Open-source AI for private deployments' },
                  { icon: '💬', name: 'Freshdesk', tip: 'Customer support & helpdesk' },
                  { icon: '🔄', name: 'IMPS', tip: 'Instant money payment system' },
                  { icon: '🌩️', name: 'Cloudflare', tip: 'DDoS protection & edge network' },
                  { icon: '🏦', name: 'SBI', tip: 'State bank payment integration' },
                  { icon: '🧾', name: 'DigiLocker', tip: 'Document vault & eSign services' },
                  { icon: '📦', name: 'Docker', tip: 'Containerised microservice deployment' },
                  { icon: '💰', name: 'Visa', tip: 'International card payment acceptance' },
                  { icon: '🤝', name: 'Mistral AI', tip: 'Efficient on-premise AI inference' },
                  { icon: '🏗️', name: 'Kubernetes', tip: 'Auto-scaling container orchestration' },
                  { icon: '📲', name: 'Mastercard', tip: 'Global payment network integration' },
                  { icon: '✉️', name: 'Slack', tip: 'Team notifications & workflow alerts' },
                ] as { icon: string; name: string; tip: string }[]).map((p) => (
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
          <div className="ni rv"><div className="ni-val">$<Counter target={2.4} decimals={1} />B</div><div className="ni-lbl">Transactions Processed</div><div className="ni-bar"></div></div>
          <div className="ni rv d1"><div className="ni-val"><Counter target={340} />+</div><div className="ni-lbl">Live Portals</div><div className="ni-bar"></div></div>
          <div className="ni rv d2"><div className="ni-val"><Counter target={14} />ms</div><div className="ni-lbl">API Response</div><div className="ni-bar"></div></div>
          <div className="ni rv d3"><div className="ni-val"><Counter target={99.98} decimals={2} />%</div><div className="ni-lbl">Uptime SLA</div><div className="ni-bar"></div></div>
        </div>
      </div>

      <div className="home-cta-strip rv bg-light-section">
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="hcs-h">Your Next Platform<br /><span className="hl">Starts Here.</span></h2>
          <p className="hcs-sub">Tell us what your client needs. We'll build something they'll never know came from SARVEXIA.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-gold" onClick={() => navigateTo('contact')}>Request a Demo</button>
            <button className="btn-ghost" onClick={() => navigateTo('services')}>View All Services</button>
          </div>
        </div>
      </div>
    </div>
  );
}