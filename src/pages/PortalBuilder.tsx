import { useState } from 'react';

interface PortalBuilderProps {
  navigateTo: (page: string) => void;
}

const SERVICES = [
  { key: 'aeps', icon: '📡', name: 'AEPS', desc: 'Aadhaar-enabled payment service for cash deposits & withdrawals', brands: ['Fino', 'YES Bank', 'ICICI'] },
  { key: 'dmt', icon: '💸', name: 'DMT Transfer', desc: 'Domestic money transfer to any bank account in India', brands: ['NEFT', 'IMPS', 'RTGS'] },
  { key: 'cards', icon: '💳', name: 'Card Services', desc: 'Issue prepaid, debit and virtual cards to your users', brands: ['Visa', 'RuPay', 'Mastercard'] },
  { key: 'banking', icon: '🏦', name: 'Banking Integration', desc: 'Direct integration with major Indian banks for settlement', brands: ['HDFC', 'Axis Bank', 'SBI'] },
  { key: 'zoho', icon: '⚡', name: 'Zoho CRM', desc: 'Sync customer data, leads and workflows with Zoho', brands: ['Zoho CRM', 'Zoho Books', 'Zoho Desk'] },
  { key: 'jira', icon: '📋', name: 'Jira / Project Mgmt', desc: 'Connect support tickets and project tasks to Jira', brands: ['Jira', 'Confluence', 'Trello'] },
  { key: 'ai', icon: '🤖', name: 'AI Customer Support', desc: 'Embed conversational AI for 24/7 automated support', brands: ['GPT-4o', 'Claude 3', 'Gemini'] },
  { key: 'kyc', icon: '🔐', name: 'KYC / AML', desc: 'Identity verification and compliance checks built-in', brands: ['CKYC', 'Aadhaar', 'VKYC'] },
];

const FEATURES_MAP: Record<string, { key: string; label: string; sub: string }[]> = {
  aeps: [
    { key: 'aeps_deposit', label: 'Cash Deposit', sub: 'Via Aadhaar & fingerprint' },
    { key: 'aeps_withdraw', label: 'Cash Withdrawal', sub: 'ATM & micro-ATM' },
    { key: 'aeps_balance', label: 'Balance Inquiry', sub: 'Real-time account check' },
    { key: 'aeps_statement', label: 'Mini Statement', sub: 'Last 5 transactions' },
  ],
  dmt: [
    { key: 'dmt_send', label: 'Send Money', sub: 'IMPS / NEFT transfer' },
    { key: 'dmt_history', label: 'Transfer History', sub: 'Full audit log' },
    { key: 'dmt_beneficiary', label: 'Manage Beneficiaries', sub: 'Add / delete payees' },
    { key: 'dmt_limits', label: 'Transaction Limits', sub: 'Per-user controls' },
  ],
  cards: [
    { key: 'card_issue', label: 'Issue Cards', sub: 'Virtual & physical' },
    { key: 'card_block', label: 'Block / Unblock', sub: 'Instant card controls' },
    { key: 'card_reload', label: 'Reload Balance', sub: 'Top-up card wallet' },
    { key: 'card_txn', label: 'Card Transactions', sub: 'POS & online history' },
  ],
  banking: [
    { key: 'bank_account', label: 'Account Services', sub: 'CASA & current acc.' },
    { key: 'bank_settle', label: 'Settlement', sub: 'Auto daily settlement' },
    { key: 'bank_noc', label: 'NOC / Reports', sub: 'Compliance documents' },
    { key: 'bank_recon', label: 'Reconciliation', sub: 'Automated recon engine' },
  ],
  zoho: [
    { key: 'zoho_crm', label: 'CRM Sync', sub: 'Contacts & leads' },
    { key: 'zoho_invoice', label: 'Invoice & Billing', sub: 'Zoho Books connect' },
    { key: 'zoho_desk', label: 'Support Tickets', sub: 'Zoho Desk integration' },
    { key: 'zoho_analytics', label: 'Analytics', sub: 'BI reports in portal' },
  ],
  jira: [
    { key: 'jira_tickets', label: 'Issue Tracking', sub: 'Auto-create tickets' },
    { key: 'jira_workflow', label: 'Workflow Automation', sub: 'Trigger on events' },
    { key: 'jira_board', label: 'Board View', sub: 'Kanban in portal' },
    { key: 'jira_sla', label: 'SLA Tracking', sub: 'Response time KPIs' },
  ],
  ai: [
    { key: 'ai_chat', label: 'AI Chat Widget', sub: 'Live on every page' },
    { key: 'ai_doc', label: 'Document OCR', sub: 'Extract & classify docs' },
    { key: 'ai_leads', label: 'Lead Qualification', sub: 'Score & route leads' },
    { key: 'ai_schedule', label: 'Smart Scheduling', sub: 'Book meetings via AI' },
  ],
  kyc: [
    { key: 'kyc_aadhaar', label: 'Aadhaar KYC', sub: 'Biometric & OTP' },
    { key: 'kyc_video', label: 'Video KYC', sub: 'Live face verification' },
    { key: 'kyc_pan', label: 'PAN Verification', sub: 'Instant PAN check' },
    { key: 'kyc_aml', label: 'AML Screening', sub: 'Sanctions list check' },
  ],
};

const AI_PAGES = ['Dashboard', 'User Onboarding', 'Transaction Page', 'Support Centre', 'Reports', 'All Pages'];
const AI_MODELS = [
  { key: 'gpt4', label: 'GPT-4o', desc: 'OpenAI — best for customer chat & writing', badge: 'OpenAI' },
  { key: 'claude', label: 'Claude 3', desc: 'Anthropic — best for documents & reasoning', badge: 'Anthropic' },
  { key: 'gemini', label: 'Gemini Pro', desc: 'Google — best for multimodal tasks', badge: 'Google' },
  { key: 'auto', label: 'Auto Select', desc: 'NYTHEX picks the best model per task', badge: 'Recommended' },
];

export default function PortalBuilder({ navigateTo }: PortalBuilderProps) {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [featOn, setFeatOn] = useState<Record<string, boolean>>({});
  const [aiPages, setAiPages] = useState<string[]>([]);
  const [aiModel, setAiModel] = useState('auto');
  const [aiTasks, setAiTasks] = useState<string[]>(['ai_chat']);

  const toggleSvc = (key: string) => {
    setSelected(s => s.includes(key) ? s.filter(x => x !== key) : [...s, key]);
  };

  const toggleFeat = (key: string) => {
    setFeatOn(f => ({...f, [key]: !f[key]}));
  };

  const toggleAiPage = (p: string) => {
    if (p === 'All Pages') { setAiPages(prev => prev.includes('All Pages') ? [] : AI_PAGES); return; }
    setAiPages(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);
  };

  const toggleAiTask = (k: string) => {
    setAiTasks(t => t.includes(k) ? t.filter(x => x !== k) : [...t, k]);
  };

  const launch = () => {
    navigateTo('admin-portal');
  };

  const steps = [
    { num: 1, label: 'Services' },
    { num: 2, label: 'Features' },
    { num: 3, label: 'AI Setup' },
    { num: 4, label: 'Preview' },
  ];

  const svcName = (k: string) => SERVICES.find(s => s.key === k)?.name ?? k;

  return (
    <div className="pb-page">
      <div className="pb-container">
        <div className="pb-header">
          <div className="pb-eyebrow">Interactive Configurator</div>
          <h1 className="pb-title">Build Your <span className="hl">Demo Portal</span></h1>
          <p className="pb-sub">Select services, configure features, set up AI — then launch your live preview.</p>
        </div>

        {/* Step indicators */}
        <div className="pb-steps" style={{marginTop:0,marginBottom:52}}>
          {steps.map((s, i) => (
            <div key={s.num} className={`pb-step ${step > s.num ? 'done' : step === s.num ? 'active' : ''}`}>
              <div className="pb-step-dot">{step > s.num ? '✓' : s.num}</div>
              <span className="pb-step-label">{s.label}</span>
              {i < steps.length - 1 && <div className="pb-step-line"></div>}
            </div>
          ))}
        </div>

        {/* ── STEP 1: SELECT SERVICES ── */}
        {step === 1 && (
          <>
            <div style={{marginBottom:24}}>
              <span className="sec-tag" style={{marginBottom:8,display:'block'}}>Step 1 of 4</span>
              <h2 style={{fontFamily:'Bebas Neue,sans-serif',fontSize:28,letterSpacing:'.07em',color:'var(--white)',marginBottom:6}}>Choose Your Services</h2>
              <p style={{fontSize:13,fontWeight:300,color:'var(--plat)',opacity:.65}}>Select all the services you want in your white-label portal. You can configure each one in the next step.</p>
            </div>
            <div className="pb-svc-grid">
              {SERVICES.map(s => (
                <div key={s.key} className={`pb-card ${selected.includes(s.key) ? 'selected' : ''}`} onClick={() => toggleSvc(s.key)}>
                  <div className="pb-check"><span className="pb-check-mark">✓</span></div>
                  <div className="pb-svc-icon">{s.icon}</div>
                  <div className="pb-svc-name">{s.name}</div>
                  <p className="pb-svc-desc">{s.desc}</p>
                  <div className="pb-svc-brands">
                    {s.brands.map(b => <span className="pb-brand-tag" key={b}>{b}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="pb-nav">
              <span style={{fontFamily:'DM Mono,monospace',fontSize:9,letterSpacing:'.2em',color:'var(--plat)',opacity:.4,textTransform:'uppercase'}}>
                {selected.length} service{selected.length !== 1 ? 's' : ''} selected
              </span>
              <button className="btn-gold" onClick={() => selected.length > 0 && setStep(2)} style={{opacity: selected.length === 0 ? .4 : 1}}>
                Next: Configure Features →
              </button>
            </div>
          </>
        )}

        {/* ── STEP 2: FEATURES ── */}
        {step === 2 && (
          <>
            <div style={{marginBottom:28}}>
              <span className="sec-tag" style={{marginBottom:8,display:'block'}}>Step 2 of 4</span>
              <h2 style={{fontFamily:'Bebas Neue,sans-serif',fontSize:28,letterSpacing:'.07em',color:'var(--white)',marginBottom:6}}>Configure Features</h2>
              <p style={{fontSize:13,fontWeight:300,color:'var(--plat)',opacity:.65}}>Toggle exactly which capabilities you want enabled in each service.</p>
            </div>
            {selected.map(sKey => (
              <div className="pb-feat-section" key={sKey}>
                <div className="pb-feat-svc-title">
                  <span>{SERVICES.find(s => s.key === sKey)?.icon}</span>
                  {svcName(sKey)}
                </div>
                <div className="pb-feat-grid">
                  {(FEATURES_MAP[sKey] || []).map(f => (
                    <div key={f.key} className={`pb-feat-item ${featOn[f.key] ? 'on' : ''}`} onClick={() => toggleFeat(f.key)}>
                      <div>
                        <div className="pb-feat-label">{f.label}</div>
                        <div className="pb-feat-sub">{f.sub}</div>
                      </div>
                      <label className="ap-toggle" onClick={e => e.stopPropagation()}>
                        <input type="checkbox" checked={!!featOn[f.key]} onChange={() => toggleFeat(f.key)} />
                        <span className="ap-toggle-slider"></span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="pb-nav">
              <button className="btn-ghost" onClick={() => setStep(1)}>← Back</button>
              <button className="btn-gold" onClick={() => setStep(selected.includes('ai') ? 3 : 4)}>
                {selected.includes('ai') ? 'Next: AI Setup →' : 'Next: Preview →'}
              </button>
            </div>
          </>
        )}

        {/* ── STEP 3: AI CONFIG ── */}
        {step === 3 && (
          <>
            <div style={{marginBottom:28}}>
              <span className="sec-tag" style={{marginBottom:8,display:'block'}}>Step 3 of 4</span>
              <h2 style={{fontFamily:'Bebas Neue,sans-serif',fontSize:28,letterSpacing:'.07em',color:'var(--white)',marginBottom:6}}>AI Configuration</h2>
              <p style={{fontSize:13,fontWeight:300,color:'var(--plat)',opacity:.65}}>Define where AI appears and what it does in your portal.</p>
            </div>
            <div style={{marginBottom:28}}>
              <div className="pb-sum-label" style={{marginBottom:12}}>Select AI Model</div>
              <div className="pb-ai-grid">
                {AI_MODELS.map(m => (
                  <div key={m.key} className={`pb-ai-option ${aiModel === m.key ? 'selected' : ''}`} onClick={() => setAiModel(m.key)}>
                    <div className="pb-ai-label">{m.label}</div>
                    <div className="pb-ai-desc">{m.desc}</div>
                    <div className="pb-ai-badge">{m.badge}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{marginBottom:28}}>
              <div className="pb-sum-label" style={{marginBottom:12}}>AI Appears On</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:10}}>
                {AI_PAGES.map(p => (
                  <div
                    key={p} onClick={() => toggleAiPage(p)}
                    style={{
                      fontFamily:'DM Mono,monospace',fontSize:9,letterSpacing:'.2em',textTransform:'uppercase',
                      padding:'8px 16px',border:`1px solid ${aiPages.includes(p) ? 'rgba(155,110,255,.5)' : 'rgba(184,150,62,.18)'}`,
                      color: aiPages.includes(p) ? 'var(--purple)' : 'var(--plat)',
                      background: aiPages.includes(p) ? 'rgba(155,110,255,.07)' : 'transparent',
                      cursor:'none',transition:'all .25s',
                    }}
                  >{p}</div>
                ))}
              </div>
            </div>
            <div style={{marginBottom:28}}>
              <div className="pb-sum-label" style={{marginBottom:12}}>What AI Should Do</div>
              <div className="pb-feat-grid">
                {[
                  { key:'ai_chat', label:'Customer Chat Support', sub:'24/7 automated responses' },
                  { key:'ai_doc', label:'Document Processing', sub:'OCR, extraction, routing' },
                  { key:'ai_leads', label:'Lead Qualification', sub:'Score & auto-assign leads' },
                  { key:'ai_schedule', label:'Smart Scheduling', sub:'Book meetings & send reminders' },
                  { key:'ai_report', label:'Report Summaries', sub:'AI-narrated insights' },
                  { key:'ai_fraud', label:'Fraud Detection', sub:'Anomaly alerts & scoring' },
                ].map(f => (
                  <div key={f.key} className={`pb-feat-item ${aiTasks.includes(f.key) ? 'on' : ''}`} onClick={() => toggleAiTask(f.key)}>
                    <div>
                      <div className="pb-feat-label">{f.label}</div>
                      <div className="pb-feat-sub">{f.sub}</div>
                    </div>
                    <label className="ap-toggle" onClick={e => e.stopPropagation()}>
                      <input type="checkbox" checked={aiTasks.includes(f.key)} onChange={() => toggleAiTask(f.key)} />
                      <span className="ap-toggle-slider"></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="pb-nav">
              <button className="btn-ghost" onClick={() => setStep(2)}>← Back</button>
              <button className="btn-gold" onClick={() => setStep(4)}>Next: Preview →</button>
            </div>
          </>
        )}

        {/* ── STEP 4: PREVIEW / SUMMARY ── */}
        {step === 4 && (
          <>
            <div style={{marginBottom:28}}>
              <span className="sec-tag" style={{marginBottom:8,display:'block'}}>Step 4 of 4</span>
              <h2 style={{fontFamily:'Bebas Neue,sans-serif',fontSize:28,letterSpacing:'.07em',color:'var(--white)',marginBottom:6}}>Your Portal Summary</h2>
              <p style={{fontSize:13,fontWeight:300,color:'var(--plat)',opacity:.65}}>Review your configuration, then launch the live interactive demo.</p>
            </div>
            <div className="pb-summary">
              <div className="pb-sum-title">Configuration Summary</div>
              <div style={{marginBottom:18}}>
                <div className="pb-sum-label">Services Selected ({selected.length})</div>
                <div className="pb-sum-row">
                  {selected.map(s => <span className="pb-sum-item" key={s}>{SERVICES.find(x => x.key === s)?.icon} {svcName(s)}</span>)}
                </div>
              </div>
              <div style={{marginBottom:18}}>
                <div className="pb-sum-label">Features Enabled ({Object.values(featOn).filter(Boolean).length})</div>
                <div className="pb-sum-row">
                  {Object.entries(featOn).filter(([,v]) => v).map(([k]) => {
                    const allFeats = Object.values(FEATURES_MAP).flat();
                    const feat = allFeats.find(f => f.key === k);
                    return <span className="pb-sum-item" key={k}>{feat?.label ?? k}</span>;
                  })}
                </div>
              </div>
              {selected.includes('ai') && (
                <div style={{marginBottom:18}}>
                  <div className="pb-sum-label">AI Configuration</div>
                  <div className="pb-sum-row">
                    <span className="pb-sum-item" style={{borderColor:'rgba(155,110,255,.3)',color:'var(--purple)'}}>
                      Model: {AI_MODELS.find(m => m.key === aiModel)?.label}
                    </span>
                    {aiPages.slice(0,3).map(p => <span className="pb-sum-item" key={p}>{p}</span>)}
                    {aiPages.length > 3 && <span className="pb-sum-item">+{aiPages.length - 3} more</span>}
                  </div>
                </div>
              )}
            </div>
            <button className="pb-launch-btn" onClick={launch}>
              Launch Your Demo Portal →
            </button>
            <div style={{marginTop:16,textAlign:'center',fontFamily:'DM Mono,monospace',fontSize:9,letterSpacing:'.2em',color:'var(--plat)',opacity:.4,textTransform:'uppercase'}}>
              Interactive admin portal will open with your selected configuration
            </div>
            <div className="pb-nav" style={{justifyContent:'flex-start'}}>
              <button className="btn-ghost" onClick={() => setStep(selected.includes('ai') ? 3 : 2)}>← Back</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
