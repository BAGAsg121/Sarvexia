import { useEffect } from 'react';

interface ContentPageProps {
  pageId: string;
  navigateTo: (page: string) => void;
}

const PAGE_DATA: Record<string, { eyebrow: string, title: string, sub: string, content: React.ReactNode }> = {
  'about': {
    eyebrow: 'About SARVEXIA',
    title: 'The Invisible Engine of Fintech',
    sub: 'We build the white-label infrastructure that powers next-generation financial platforms—quietly, securely, and at global scale.',
    content: (
      <div className="cp-content">
        <h3>Who We Are</h3>
        <p>SARVEXIA is a premier B2B fintech infrastructure provider and AI solutions engineering firm. We specialize in building bank-grade digital platforms for enterprises, credit unions, neo-banks, and scale-ups.</p>
        <p>Our core philosophy revolves around invisibility. We believe the best financial technology should blend seamlessly into your brand, offering powerful capabilities without ever stealing the spotlight from your relationship with your customers.</p>
        <h3>Our Mission</h3>
        <p>To democratize access to institutional-grade financial infrastructure by providing modular, deploy-ready solutions layered with generative AI intelligence.</p>
        <div className="grule"></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '40px' }}>
          <div>
            <h4 style={{ color: 'var(--gold2)', marginBottom: '10px', fontSize: '18px', fontFamily: 'DM Mono, monospace', letterSpacing: '0.1em' }}>01 / Security First</h4>
            <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--plat)' }}>Every line of code and API integration is audited, stress-tested, and built for compliance with global financial regulations.</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--gold2)', marginBottom: '10px', fontSize: '18px', fontFamily: 'DM Mono, monospace', letterSpacing: '0.1em' }}>02 / AI-Native</h4>
            <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--plat)' }}>We don't just bolt on AI; our infrastructure is designed to leverage LLMs for compliance, support, and analytics fundamentally.</p>
          </div>
        </div>
      </div>
    )
  },
  'services': {
    eyebrow: 'Our Capabilities',
    title: 'Comprehensive Fintech Stack',
    sub: 'From white-label banking portals to custom LLM deployments, explore the services that define modern financial operations.',
    content: (
      <div className="cp-content">
        <p>We provide a wide array of modular services that can be deployed individually or combined into a unified ecosystem.</p>
        <ul className="cp-service-list">
          <li><strong>White-Label Portals:</strong> Full featured web and admin panels branded for your enterprise.</li>
          <li><strong>API Integration:</strong> Connect to banking rails, payment gateways, and KYC endpoints via a single unified API.</li>
          <li><strong>Digital Banking UI:</strong> Beautiful, responsive user interfaces for modern neobanks.</li>
          <li><strong>Custom Development:</strong> Bespoke architectures tailored to complex, high-volume financial use cases.</li>
          <li><strong>AI Solutions:</strong> Intelligent agents, document OCR, and automated risk analysis using GPT-4, Claude, and Gemini.</li>
        </ul>
      </div>
    )
  },
  'approach': {
    eyebrow: 'How We Work',
    title: 'Engineering Meets Strategy',
    sub: 'Our delivery methodology is designed for high-stakes financial environments where failure is not an option.',
    content: (
      <div className="cp-content">
        <h3>1. Discovery & Architecture</h3>
        <p>We begin by mapping your regulatory requirements, target audience, and scaling goals. Our architects design a modular stack tailored to your specific use case, ensuring no vendor lock-in.</p>
        <h3>2. Integration & Customization</h3>
        <p>Our engineering teams deploy core modules and integrate them with your chosen banking partners (e.g., YES Bank, ICICI) and third-party systems like Zoho or Jira.</p>
        <h3>3. AI Layering</h3>
        <p>We weave generative AI into the workflows—from KYC document processing to automated customer support chat widgets.</p>
        <h3>4. Security & Handover</h3>
        <p>Rigorous penetration testing, compliance audits, and load testing are conducted before we hand over the keys to your fully white-labeled platform.</p>
      </div>
    )
  },
  'clients': {
    eyebrow: 'Who We Serve & Ecosystem',
    title: 'Trusted by Innovators',
    sub: 'Powering over 340 platforms globally, and deeply invested in the open-source ecosystem.',
    content: (
      <div className="cp-content">
        <p>Due to the white-label nature of our business and strict NDAs, we do not publicly disclose the names of our enterprise clients. However, our typical partners include Challenger Banks, Enterprise Corporations, and Lending Institutions.</p>
        
        <div className="grule" style={{ margin: '50px 0 40px' }}></div>
        
        <h3 style={{ margin: '0 0 12px 0', fontSize: '32px' }}>Contributed and Created</h3>
        <p style={{ marginBottom: '40px', fontSize: '16px' }}>SARVEXIA actively contributes to, creates, and integrates with the world's leading open-source platforms and developer tools. Explore our expansive ecosystem:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          
          <div className="cp-client-cat">
            <h4>⚡ Core & Backend</h4>
            <div className="cp-client-tags">
              <a href="https://github.com/appwrite/appwrite" target="_blank" rel="noreferrer">Appwrite</a>
              <a href="https://github.com/supabase/supabase" target="_blank" rel="noreferrer">Supabase</a>
              <a href="https://github.com/hatchet-dev/hatchet" target="_blank" rel="noreferrer">Hatchet</a>
              <a href="https://github.com/novuhq/novu" target="_blank" rel="noreferrer">Novu</a>
              <a href="https://github.com/ToolJet/ToolJet" target="_blank" rel="noreferrer">ToolJet</a>
              <a href="https://github.com/wasp-lang/wasp" target="_blank" rel="noreferrer">Wasp</a>
              <a href="https://github.com/loft-sh/devpod" target="_blank" rel="noreferrer">DevPod</a>
              <a href="https://github.com/opticdev/optic" target="_blank" rel="noreferrer">Optic</a>
              <a href="https://github.com/pipekit/talk-demos" target="_blank" rel="noreferrer">Pipekit</a>
            </div>
          </div>

          <div className="cp-client-cat">
            <h4>🤖 AI & LLM Tools</h4>
            <div className="cp-client-tags">
              <a href="https://github.com/ollama/ollama" target="_blank" rel="noreferrer">Ollama</a>
              <a href="https://github.com/BerriAI/litellm" target="_blank" rel="noreferrer">LiteLLM</a>
              <a href="https://github.com/unslothai/unsloth" target="_blank" rel="noreferrer">Unsloth AI</a>
              <a href="https://github.com/mem0ai/mem0" target="_blank" rel="noreferrer">Mem0</a>
              <a href="https://github.com/FlowiseAI/Flowise" target="_blank" rel="noreferrer">FlowiseAI</a>
              <a href="https://github.com/Mintplex-Labs/anything-llm" target="_blank" rel="noreferrer">AnythingLLM</a>
              <a href="https://github.com/mindsdb/mindsdb" target="_blank" rel="noreferrer">MindsDB</a>
              <a href="https://github.com/browser-use/browser-use" target="_blank" rel="noreferrer">Browser Use</a>
              <a href="https://github.com/vikhyat/moondream" target="_blank" rel="noreferrer">Moondream</a>
              <a href="https://github.com/mendableai/firecrawl" target="_blank" rel="noreferrer">Firecrawl</a>
            </div>
          </div>

          <div className="cp-client-cat">
            <h4>📊 Data & Analytics</h4>
            <div className="cp-client-tags">
              <a href="https://github.com/nocodb/nocodb" target="_blank" rel="noreferrer">NocoDB</a>
              <a href="https://github.com/metabase/metabase" target="_blank" rel="noreferrer">Metabase</a>
              <a href="https://github.com/marimo-team/marimo" target="_blank" rel="noreferrer">Marimo</a>
              <a href="https://github.com/elementary-data/elementary" target="_blank" rel="noreferrer">Elementary Data</a>
              <a href="https://github.com/DAGWorks-Inc/hamilton" target="_blank" rel="noreferrer">DAGWorks</a>
              <a href="https://github.com/devflowinc/trieve" target="_blank" rel="noreferrer">Trieve</a>
              <a href="https://github.com/matanolabs/matano" target="_blank" rel="noreferrer">Matano</a>
            </div>
          </div>

          <div className="cp-client-cat">
            <h4>🏗 Low-Code & Platforms</h4>
            <div className="cp-client-tags">
              <a href="https://github.com/nocobase/nocobase" target="_blank" rel="noreferrer">NocoBase</a>
              <a href="https://github.com/windmill-labs/windmill" target="_blank" rel="noreferrer">Windmill</a>
              <a href="https://github.com/AppFlowy-IO/AppFlowy" target="_blank" rel="noreferrer">AppFlowy</a>
              <a href="https://github.com/refinedev/refine" target="_blank" rel="noreferrer">Refine</a>
              <a href="https://github.com/twentyhq/twenty" target="_blank" rel="noreferrer">Twenty (CRM)</a>
              <a href="https://github.com/payloadcms/payload" target="_blank" rel="noreferrer">Payload CMS</a>
            </div>
          </div>

          <div className="cp-client-cat">
            <h4>⚙️ Workflow & Automation</h4>
            <div className="cp-client-tags">
              <a href="https://github.com/n8n-io/n8n" target="_blank" rel="noreferrer">n8n</a>
              <a href="https://github.com/laudspeaker/laudspeaker" target="_blank" rel="noreferrer">Laudspeaker</a>
              <a href="https://github.com/manaflow-ai/manaflow" target="_blank" rel="noreferrer">Manaflow</a>
              <a href="https://github.com/beam-cloud/beta9" target="_blank" rel="noreferrer">Beam Cloud</a>
            </div>
          </div>

          <div className="cp-client-cat">
            <h4>🔐 Security & Auth</h4>
            <div className="cp-client-tags">
              <a href="https://github.com/lunsec/lunsec" target="_blank" rel="noreferrer">LunaSec</a>
              <a href="https://github.com/better-auth/better-auth" target="_blank" rel="noreferrer">Better Auth</a>
              <a href="https://github.com/fosrl/pangolin" target="_blank" rel="noreferrer">Pangolin</a>
            </div>
          </div>

          <div className="cp-client-cat">
            <h4>🏥 Vertical & Domain Specific</h4>
            <div className="cp-client-tags">
              <a href="https://github.com/medplum/medplum" target="_blank" rel="noreferrer">Medplum</a>
              <a href="https://github.com/juspay/hyperswitch" target="_blank" rel="noreferrer">HyperSwitch</a>
              <a href="https://github.com/uselotus/lotus" target="_blank" rel="noreferrer">Lotus</a>
              <a href="https://github.com/pretzelai/lumen" target="_blank" rel="noreferrer">Lumen Payments</a>
              <a href="https://github.com/ComposioHQ/composio" target="_blank" rel="noreferrer">Composio</a>
              <a href="https://github.com/morphik-org/morphik-core" target="_blank" rel="noreferrer">Morphik</a>
              <a href="https://github.com/zulip/zulip" target="_blank" rel="noreferrer">Zulip</a>
              <a href="https://github.com/mattermost/mattermost" target="_blank" rel="noreferrer">Mattermost</a>
            </div>
          </div>

          <div className="cp-client-cat">
            <h4>🌐 Web & Blockchain</h4>
            <div className="cp-client-tags">
              <a href="https://github.com/pixijs/pixijs" target="_blank" rel="noreferrer">PixiJS</a>
              <a href="https://github.com/processing/p5.js" target="_blank" rel="noreferrer">p5.js</a>
              <a href="https://github.com/stagewise-io/stagewise" target="_blank" rel="noreferrer">stagewise</a>
              <a href="https://github.com/21st-dev/magic-mcp" target="_blank" rel="noreferrer">21st.dev</a>
              <a href="https://github.com/unionlabs/union" target="_blank" rel="noreferrer">Union Labs</a>
              <a href="https://github.com/anoma/anoma" target="_blank" rel="noreferrer">Anoma</a>
              <a href="https://github.com/OpenCut-app/OpenCut" target="_blank" rel="noreferrer">OpenCut</a>
            </div>
          </div>

        </div>
      </div>
    )
  },
  'faq': {
    eyebrow: 'Common Questions',
    title: 'Frequently Asked Questions',
    sub: 'Clear answers on compliance, integration timeframes, and white-labeling.',
    content: (
      <div className="cp-content cp-faq">
        <div className="faq-item">
          <h4>How long does a typical portal deployment take?</h4>
          <p>Standard white-label deployments take between 2 to 4 weeks. Custom enterprise builds typically range from 2 to 4 months depending on integration complexity.</p>
        </div>
        <div className="faq-item">
          <h4>Do you own the end customers?</h4>
          <p>No. SARVEXIA acts strictly as the technology provider. Your clients remain yours. Our branding never appears on customer-facing interfaces.</p>
        </div>
        <div className="faq-item">
          <h4>What are your uptime guarantees?</h4>
          <p>We provide a 99.98% Service Level Agreement (SLA) for our core APIs and infrastructure, hosted on top-tier cloud providers like AWS and Azure.</p>
        </div>
        <div className="faq-item">
          <h4>Are your AI modules secure?</h4>
          <p>Yes. All AI interactions are stateless or partitioned. We utilize enterprise API endpoints for models like GPT-4, meaning your data is never used to train public models.</p>
        </div>
      </div>
    )
  },
  'contact': {
    eyebrow: 'Get In Touch',
    title: 'Ready to Build?',
    sub: 'Our engineers and architects are ready to discuss your custom fintech needs.',
    content: (
      <div className="cp-content">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px' }}>
          <div>
            <h3 style={{ fontSize: '24px', color: 'var(--gold2)', marginBottom: '16px' }}>Contact Information</h3>
            <p style={{ color: 'var(--plat)', marginBottom: '30px' }}>Reach out to our global team to schedule a technical discovery call or request pricing.</p>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '4px' }}>Email</div>
              <div style={{ fontSize: '16px', color: 'var(--white)' }}>partnerships@sarvexia.com</div>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '4px' }}>Global HQ</div>
              <div style={{ fontSize: '16px', color: 'var(--white)' }}>Innovation Hub, Cyber City<br />Sector 24, India</div>
            </div>
          </div>
          <form action="https://formsubmit.co/shlokgoswami58@gmail.com" method="POST" style={{ background: 'var(--surface)', padding: '40px', border: '1px solid rgba(184,150,62,0.1)' }}>
            <h3 style={{ marginBottom: '24px', fontSize: '20px', marginTop: 0 }}>Send a Message</h3>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
            
            <div className="ap-input-group">
              <label className="ap-input-label">Name</label>
              <input type="text" name="name" className="ap-input" placeholder="Enter your full name" required />
            </div>
            <div className="ap-input-group">
              <label className="ap-input-label">Company Email</label>
              <input type="email" name="email" className="ap-input" placeholder="name@company.com" required />
            </div>
            <div className="ap-input-group">
              <label className="ap-input-label">Project Details</label>
              <textarea name="message" className="ap-input" placeholder="Tell us about what you want to build..." style={{ minHeight: '120px', resize: 'vertical' }} required></textarea>
            </div>
            <button type="submit" className="btn-gold" style={{ marginTop: '16px', width: '100%' }}>Submit Inquiry</button>
          </form>
        </div>
      </div>
    )
  },
  'svc-whitelabel': {
    eyebrow: 'Service / 01',
    title: 'White-Label Portals',
    sub: 'Deploy fully branded, bank-grade portals for your agents, distributors, and customers in weeks—not months.',
    content: (
      <div className="cp-content">
        <p>Our white-label portals are pre-configured engines ready to be skinned with your brand identity. They include built-in RBAC (Role-Based Access Control), ledger management, and wallet systems.</p>
        <p><strong>Features Include:</strong></p>
        <ul>
          <li>Custom domains and SSL provisioning</li>
          <li>Agent and sub-agent commission structures</li>
          <li>Real-time reporting and exportable analytics</li>
          <li>Maker-Checker workflows for internal security</li>
        </ul>
      </div>
    )
  },
  'svc-custom': {
    eyebrow: 'Service / 02',
    title: 'Custom Development',
    sub: 'Bespoke engineering for high-complexity financial architectures.',
    content: (
      <div className="cp-content">
        <p>When off-the-shelf won’t cut it, our elite engineering teams work with your stakeholders to build proprietary solutions from the ground up.</p>
        <ul>
          <li>Microservices architectures using Node.js, Go, and Python</li>
          <li>High-frequency transaction processing engines</li>
          <li>Custom blockchain integrations and smart contracts</li>
          <li>Legacy banking system modernization</li>
        </ul>
      </div>
    )
  },
  'svc-api': {
    eyebrow: 'Service / 03',
    title: 'API Integration',
    sub: 'A single unified API layer connecting you to the entire fintech ecosystem.',
    content: (
      <div className="cp-content">
        <p>Stop managing dozens of fragmented vendor APIs. SARVEXIA provides a single, deeply documented REST and GraphQL API layer that handles routing, fallback, and retry logic automatically.</p>
        <div style={{ padding: '20px', background: 'rgba(74,127,255,0.05)', borderLeft: '3px solid var(--accent)', marginTop: '20px' }}>
          <code style={{ color: 'var(--frost)', fontSize: '13px' }}>POST /v1/transactions/route<br/>
          &#123;<br/>
          &nbsp;&nbsp;"amount": 5000,<br/>
          &nbsp;&nbsp;"currency": "INR",<br/>
          &nbsp;&nbsp;"type": "IMPS",<br/>
          &nbsp;&nbsp;"beneficiary_id": "ben_892374"<br/>
          &#125;</code>
        </div>
      </div>
    )
  },
  'svc-banking': {
    eyebrow: 'Service / 04',
    title: 'Digital Banking UI',
    sub: 'Stunning, fluid, and intuitive interfaces for modern banking.',
    content: (
      <div className="cp-content">
        <p>User experience is the critical differentiator in modern finance. Our UI/UX team delivers pixel-perfect, responsive digital interfaces tailored to B2B and consumer expectations.</p>
        <ul>
          <li>Frictionless onboarding flows optimized for conversion</li>
          <li>Interactive data visualizations for spending and analytics</li>
          <li>Accessibility compliant (WCAG 2.1) out of the box</li>
        </ul>
      </div>
    )
  },
  'svc-mobile': {
    eyebrow: 'Service / 05',
    title: 'Mobile Applications',
    sub: 'Native and cross-platform mobile apps for iOS and Android.',
    content: (
      <div className="cp-content">
        <p>Put the power of your financial platform in your users' pockets. We build secure, performant mobile applications using React Native and Flutter.</p>
        <ul>
          <li>Biometric authentication (FaceID / Fingerprint)</li>
          <li>Offline-first caching and synchronisation</li>
          <li>Push notifications for real-time transaction alerts</li>
          <li>End-to-end payload encryption</li>
        </ul>
      </div>
    )
  },
  'svc-saas': {
    eyebrow: 'Service / 06',
    title: 'SaaS Products',
    sub: 'Plug-and-play modules for risk, compliance, and monitoring.',
    content: (
      <div className="cp-content">
        <p>Alongside our custom builds, SARVEXIA offers standalone SaaS modules designed to augment your existing ecosystem without replacing it.</p>
        <ul>
          <li><strong>FraudGuard:</strong> Real-time anomaly detection using machine learning.</li>
          <li><strong>ReconEngine:</strong> Automated T+1 settlement reconciliation and discrepancy flagging.</li>
          <li><strong>ComplianceHub:</strong> Centralized dashboard for AML screenings and suspicious activity reporting (SAR).</li>
        </ul>
      </div>
    )
  },
  'svc-ai': {
    eyebrow: 'Service / 07',
    title: 'AI Integration',
    sub: 'Generative AI business assistants woven directly into your platform.',
    content: (
      <div className="cp-content">
        <p>AI is no longer optional. We integrate industry-leading models (GPT-4o, Claude 3, Gemini) strictly within secure, private partitions.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '30px' }}>
          <div style={{ padding: '20px', background: 'var(--surface)', border: '1px solid rgba(155,110,255,0.2)' }}>
            <h4 style={{ color: 'var(--purple)', marginBottom: '10px' }}>Support Automation</h4>
            <p style={{ color: 'var(--plat)', fontSize: '13px' }}>AI agents that resolve 80% of level 1 & 2 support tickets instantly.</p>
          </div>
          <div style={{ padding: '20px', background: 'var(--surface)', border: '1px solid rgba(155,110,255,0.2)' }}>
            <h4 style={{ color: 'var(--purple)', marginBottom: '10px' }}>Doc Intelligence</h4>
            <p style={{ color: 'var(--plat)', fontSize: '13px' }}>OCR + LLM pairing to extract structured data from unstructured PDFs and images.</p>
          </div>
          <div style={{ padding: '20px', background: 'var(--surface)', border: '1px solid rgba(155,110,255,0.2)' }}>
            <h4 style={{ color: 'var(--purple)', marginBottom: '10px' }}>Smart Analytics</h4>
            <p style={{ color: 'var(--plat)', fontSize: '13px' }}>Allow stakeholders to query their databases strictly through natural language text.</p>
          </div>
        </div>
      </div>
    )
  },
  'careers': {
    eyebrow: 'Join Us',
    title: 'Build the Future',
    sub: 'Join the engineering team that builds the backbone of modern fintech.',
    content: (
      <div className="cp-content">
        <p>At SARVEXIA, we're always looking for elite systems engineers, cryptographers, AI specialists, and product designers to join our global team.</p>
        <p><strong>Open Roles:</strong></p>
        <ul>
          <li><strong>Senior Go Backend Engineer</strong> - Distributed Systems</li>
          <li><strong>AI Integrations Lead</strong> - Generative AI & NLP</li>
          <li><strong>Product Designer</strong> - B2B Fintech Interfaces</li>
        </ul>
        <br/>
        <p>Contact <strong>careers@sarvexia.com</strong> with your resume.</p>
      </div>
    )
  },
  'press': {
    eyebrow: 'Press & Media',
    title: 'News & Announcements',
    sub: 'The latest updates from SARVEXIA headquarters.',
    content: (
      <div className="cp-content">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ padding: '20px', border: '1px solid rgba(184,150,62,0.1)' }}>
            <h4 style={{ color: 'var(--white)', marginBottom: '8px' }}>SARVEXIA Launches Gen-AI Assistant API</h4>
            <p style={{ fontSize: '12px', color: 'var(--gold)', marginBottom: '10px' }}>March 12, 2026</p>
            <p style={{ fontSize: '14px', margin: 0 }}>A new suite of LLM-powered operations tools available for white-label partners.</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid rgba(184,150,62,0.1)' }}>
            <h4 style={{ color: 'var(--white)', marginBottom: '8px' }}>Series B Funding Complete</h4>
            <p style={{ fontSize: '12px', color: 'var(--gold)', marginBottom: '10px' }}>January 04, 2026</p>
            <p style={{ fontSize: '14px', margin: 0 }}>SARVEXIA secures $42M to expand its fintech infrastructure across APAC.</p>
          </div>
        </div>
      </div>
    )
  },
  'privacy': {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    sub: 'How SARVEXIA handles data security and individual privacy.',
    content: (
      <div className="cp-content">
        <p>Last updated: January 2026</p>
        <h3>1. Data Collection</h3>
        <p>As a white-label infrastructure provider, SARVEXIA acts primarily as a data processor. We collect minimal direct consumer data, processing it solely on behalf of our enterprise clients.</p>
        <h3>2. Analytics and Tracking</h3>
        <p>We use strict anonymized analytics on our marketing site. No PII (Personally Identifiable Information) is tracked across sessions without explicit consent.</p>
        <h3>3. Data Retention</h3>
        <p>All transactional data processed on behalf of clients is retained strictly according to financial regulatory requirements spanning the active operational jurisdictions.</p>
      </div>
    )
  },
  'terms': {
    eyebrow: 'Legal',
    title: 'Terms of Service',
    sub: 'Governing the use of SARVEXIA infrastructure and APIs.',
    content: (
      <div className="cp-content">
        <p>By accessing the SARVEXIA API or deploying our white-label portals, you agree to these underlying terms of service.</p>
        <h3>Enterprise Master Services Agreement</h3>
        <p>Most of our deployments are governed by a customized Master Services Agreement (MSA) signed during onboarding. The MSA supersedes general terms regarding SLAs, liability, and compliance obligations.</p>
        <h3>Prohibited Use</h3>
        <p>Our infrastructure strictly prevents usage for illicit activities, unlicensed gambling, or sanctions evasion. We reserve the right to instantly terminate nodes violating AML dictates.</p>
      </div>
    )
  },
  'cookies': {
    eyebrow: 'Legal',
    title: 'Cookie Policy',
    sub: 'Understanding the trackers active on sarvexia.com.',
    content: (
      <div className="cp-content">
        <p>We utilize cookies to maintain session states and improve platform security.</p>
        <ul>
          <li><strong>Essential:</strong> Required for routing and authentication mapping.</li>
          <li><strong>Functional:</strong> Stores user preferences across portal dashboards.</li>
          <li><strong>Analytics:</strong> Used anonymously to understand traffic flows (opt-in only in GDPR regions).</li>
        </ul>
      </div>
    )
  },
  'nda': {
    eyebrow: 'Legal',
    title: 'NDA Request',
    sub: 'Secure your discussions with SARVEXIA.',
    content: (
      <div className="cp-content">
        <p>We respect the confidentiality of our enterprise partners. Before beginning technical discovery, we sign a mutual Non-Disclosure Agreement.</p>
        <p>Please email <strong>legal@sarvexia.com</strong> to request our standard MNDA template or submit your own for our legal team to review.</p>
      </div>
    )
  },
  'security': {
    eyebrow: 'Compliance',
    title: 'Security Architecture',
    sub: 'Bank-grade protection for high-volume environments.',
    content: (
      <div className="cp-content">
        <p>Security isn’t a feature; it’s our foundation.</p>
        <h3>Certifications</h3>
        <ul>
          <li>PCI-DSS Level 1 Compliant</li>
          <li>ISO 27001 Certified Data Centers</li>
          <li>SOC 2 Type II Audited</li>
        </ul>
        <h3>Encryption Standards</h3>
        <p>All data at rest is encrypted using AES-256. Data in transit is secured using TLS 1.3 across all SARVEXIA API perimeters. Root keys are rotated automatically via AWS KMS/Azure Key Vault.</p>
      </div>
    )
  }
};

export default function ContentPage({ pageId, navigateTo }: ContentPageProps) {
  const data = PAGE_DATA[pageId] || {
    eyebrow: '404',
    title: 'Page Not Found',
    sub: 'The requested section is currently under development.',
    content: (
      <div className="cp-content">
        <p>Please check back later or return to the <a style={{color: 'var(--gold)'}} href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>home page</a>.</p>
      </div>
    )
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const reveals = document.querySelectorAll('.cp-rv');
    setTimeout(() => {
      reveals.forEach(el => el.classList.add('on'));
    }, 100);
  }, [pageId]);

  return (
    <div className={`page active cp-page-wrapper`} id={`pg-${pageId}`}>
      <div className="cp-hero">
        <div className="cp-hero-bg"></div>
        <div className="cp-hero-content">
          <div className="cp-eyebrow cp-rv">{data.eyebrow}</div>
          <h1 className="cp-title cp-rv" style={{ transitionDelay: '0.1s' }}>{data.title}</h1>
          <p className="cp-sub cp-rv" style={{ transitionDelay: '0.2s' }}>{data.sub}</p>
        </div>
      </div>
      
      <div className="cp-body cp-rv" style={{ transitionDelay: '0.3s' }}>
        <div className="cp-container">
          {data.content}
        </div>
      </div>

      <div className="home-cta-strip cp-rv" style={{ transitionDelay: '0.4s', marginTop: '80px' }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="hcs-h">Ready to <span className="hl">Transform</span>?</h2>
          <p className="hcs-sub">Let's build the financial infrastructure of tomorrow, today.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-gold" onClick={() => navigateTo('contact')}>Contact Strategy Team</button>
            <button className="btn-ghost" onClick={() => navigateTo('home')}>Return to Home</button>
          </div>
        </div>
      </div>

      <style>{`
        .cp-page-wrapper {
          min-height: 100vh;
        }
        .cp-hero {
          padding: 180px 64px 80px;
          position: relative;
          text-align: center;
          border-bottom: 1px solid rgba(184,150,62,0.1);
          background: linear-gradient(180deg, var(--ink) 0%, var(--deep) 100%);
        }
        .cp-hero-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% -20%, rgba(184,150,62,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .cp-hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
        }
        .cp-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.4em;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .cp-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(60px, 8vw, 110px);
          line-height: 0.9;
          letter-spacing: 0.05em;
          color: var(--white);
          margin-bottom: 24px;
        }
        .cp-sub {
          font-size: clamp(16px, 2vw, 20px);
          font-weight: 300;
          color: var(--plat);
          line-height: 1.7;
          max-width: 680px;
          margin: 0 auto;
        }
        .cp-body {
          padding: 80px 64px;
          background: var(--ink);
        }
        .cp-container {
          max-width: 860px;
          margin: 0 auto;
        }
        .cp-content {
          font-size: 17px;
          color: var(--frost);
          line-height: 1.9;
          font-weight: 300;
        }
        .cp-content h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px;
          letter-spacing: 0.06em;
          color: var(--white);
          margin: 48px 0 16px;
          font-weight: normal;
        }
        .cp-content h3:first-child {
          margin-top: 0;
        }
        .cp-content p {
          margin-bottom: 24px;
        }
        .cp-content ul {
          margin-bottom: 24px;
          padding-left: 20px;
        }
        .cp-content li {
          margin-bottom: 12px;
          position: relative;
        }
        .cp-content li::before {
          content: '•';
          position: absolute;
          left: -20px;
          color: var(--gold);
        }
        .cp-content strong {
          color: var(--gold2);
          font-weight: 400;
        }
        .cp-service-list li {
          padding: 16px;
          background: var(--surface);
          border: 1px solid rgba(184,150,62,0.1);
          margin-bottom: 16px;
        }
        .cp-service-list li::before {
          display: none;
        }
        .cp-faq .faq-item {
          padding: 24px 0;
          border-bottom: 1px solid rgba(184,150,62,0.1);
        }
        .cp-faq .faq-item h4 {
          font-size: 20px;
          color: var(--white);
          margin-bottom: 12px;
          font-weight: 400;
        }
        .cp-faq .faq-item p {
          margin-bottom: 0;
          color: var(--plat);
          font-size: 15px;
        }
        .cp-rv {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .cp-rv.on {
          opacity: 1;
          transform: translateY(0);
        }

        .cp-client-cat {
          background: var(--surface);
          border: 1px solid rgba(184,150,62,0.08);
          padding: 24px;
          border-radius: 4px;
        }
        .cp-client-cat h4 {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--white);
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        .cp-client-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .cp-client-tags a {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.05em;
          padding: 6px 14px;
          background: rgba(184,150,62,0.04);
          border: 1px solid rgba(184,150,62,0.15);
          color: var(--plat);
          transition: all 0.3s ease;
          border-radius: 3px;
        }
        .cp-client-tags a:hover {
          color: var(--gold2);
          border-color: rgba(184,150,62,0.5);
          background: rgba(184,150,62,0.08);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
          .cp-hero { padding: 140px 28px 60px; }
          .cp-body { padding: 60px 28px; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}
