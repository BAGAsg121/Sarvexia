import { useState, ReactElement } from 'react';

interface AdminPortalProps {
  navigateTo: (page: string) => void;
  enabledFeatures?: string[];
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  kyc: 'verified' | 'pending' | 'failed';
  balance: number;
}

const INITIAL_USERS: User[] = [
  { id: 1, name: 'Arjun Sharma', email: 'arjun.sharma@mail.com', phone: '+91 98765 43210', status: 'active', kyc: 'verified', balance: 24500 },
  { id: 2, name: 'Priya Mehta', email: 'priya.m@fintech.in', phone: '+91 87654 32109', status: 'active', kyc: 'verified', balance: 12750 },
  { id: 3, name: 'Rahul Gupta', email: 'rahul.g@business.com', phone: '+91 76543 21098', status: 'inactive', kyc: 'pending', balance: 3200 },
  { id: 4, name: 'Sneha Patel', email: 'sneha.patel@corp.in', phone: '+91 65432 10987', status: 'active', kyc: 'verified', balance: 89000 },
  { id: 5, name: 'Vikram Singh', email: 'v.singh@enterprise.com', phone: '+91 54321 09876', status: 'active', kyc: 'pending', balance: 5600 },
  { id: 6, name: 'Ananya Roy', email: 'ananya.r@startups.io', phone: '+91 43210 98765', status: 'inactive', kyc: 'failed', balance: 0 },
];

const INITIAL_TXNS = [
  { id: 'TXN00192', user: 'Arjun Sharma', type: 'Load Money', amount: 10000, status: 'success', time: '2m ago' },
  { id: 'TXN00191', user: 'Priya Mehta', type: 'DMT Transfer', amount: 5000, status: 'success', time: '18m ago' },
  { id: 'TXN00190', user: 'Sneha Patel', type: 'AEPS Withdrawal', amount: 2000, status: 'success', time: '34m ago' },
  { id: 'TXN00189', user: 'Vikram Singh', type: 'Bill Payment', amount: 1250, status: 'pending', time: '1h ago' },
  { id: 'TXN00188', user: 'Rahul Gupta', type: 'Load Money', amount: 3000, status: 'failed', time: '2h ago' },
  { id: 'TXN00187', user: 'Arjun Sharma', type: 'Card Recharge', amount: 15000, status: 'success', time: '3h ago' },
];

const ALL_FEATURES = [
  { key: 'kyc', name: 'KYC Verification', desc: 'Aadhaar & video KYC' },
  { key: 'aeps', name: 'AEPS', desc: 'Aadhaar-enabled payments' },
  { key: 'dmt', name: 'DMT Transfer', desc: 'Domestic money transfer' },
  { key: 'cards', name: 'Card Services', desc: 'Prepaid & debit card issuance' },
  { key: 'upi', name: 'UPI Payments', desc: 'Unified payments interface' },
  { key: 'lending', name: 'Micro Lending', desc: 'Instant credit disbursement' },
  { key: 'notifications', name: 'Notifications', desc: 'SMS, email & push alerts' },
  { key: '2fa', name: 'Two-Factor Auth', desc: 'OTP & TOTP security' },
  { key: 'reports', name: 'Reports & Export', desc: 'CSV, PDF export' },
  { key: 'api', name: 'API Access', desc: 'REST API & webhooks' },
];

type TabId = 'dashboard' | 'users' | 'wallets' | 'features' | 'reports';

export default function AdminPortal({ navigateTo, enabledFeatures }: AdminPortalProps) {
  const [tab, setTab] = useState<TabId>('dashboard');
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [txns] = useState(INITIAL_TXNS);
  const [features, setFeatures] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    ALL_FEATURES.forEach(f => { init[f.key] = enabledFeatures ? enabledFeatures.includes(f.key) : true; });
    return init;
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '' });
  const [loadForm, setLoadForm] = useState({ user: '', amount: '' });
  const [distForm, setDistForm] = useState({ user: '', amount: '' });
  const [toast, setToast] = useState('');

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const toggleUserStatus = (id: number) => {
    setUsers(u => u.map(x => x.id === id ? { ...x, status: x.status === 'active' ? 'inactive' : 'active' } : x));
  };

  const deleteUser = (id: number) => {
    setUsers(u => u.filter(x => x.id !== id));
    showToast('User removed from portal');
  };

  const addUser = () => {
    if (!newUser.name || !newUser.email) return;
    const user: User = {
      id: Date.now(), name: newUser.name, email: newUser.email,
      phone: newUser.phone || '+91 00000 00000',
      status: 'active', kyc: 'pending', balance: 0,
    };
    setUsers(u => [user, ...u]);
    setNewUser({ name: '', email: '', phone: '' });
    setShowAddModal(false);
    showToast(`✓ User "${user.name}" added successfully`);
  };

  const handleLoad = () => {
    if (!loadForm.user || !loadForm.amount) return;
    const amt = parseFloat(loadForm.amount);
    setUsers(u => u.map(x => x.name === loadForm.user ? { ...x, balance: x.balance + amt } : x));
    showToast(`✓ ₹${amt.toLocaleString()} loaded to ${loadForm.user}`);
    setLoadForm({ user: '', amount: '' });
  };

  const handleDist = () => {
    if (!distForm.user || !distForm.amount) return;
    const amt = parseFloat(distForm.amount);
    const target = users.find(x => x.name === distForm.user);
    if (target && target.balance < amt) { showToast('⚠ Insufficient balance'); return; }
    setUsers(u => u.map(x => x.name === distForm.user ? { ...x, balance: Math.max(0, x.balance - amt) } : x));
    showToast(`✓ ₹${amt.toLocaleString()} distributed from ${distForm.user}`);
    setDistForm({ user: '', amount: '' });
  };

  const navItems: { id: TabId; label: string; icon: ReactElement }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
    { id: 'users', label: 'Users', icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
    { id: 'wallets', label: 'Wallets', icon: <svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg> },
    { id: 'features', label: 'Features', icon: <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> },
    { id: 'reports', label: 'Reports', icon: <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
  ];

  const activeUsers = users.filter(u => u.status === 'active').length;
  const totalBalance = users.reduce((a, u) => a + u.balance, 0);

  return (
    <div className="ap-page">
      {/* Demo banner */}
      <div className="ap-demo-bar">
        <div className="ap-demo-dot"></div>
        <span>Demo Mode</span>
        <span style={{color:'var(--gold2)',opacity:1}}>— Live Preview of Nythex White-Label Admin Portal</span>
        <span>—</span>
        <span style={{cursor:'none'}} onClick={() => navigateTo('portal-builder')}>
          ← Back to Builder
        </span>
      </div>

      <div className="ap-layout" style={{minHeight:'calc(100vh - 120px)'}}>
        {/* Sidebar */}
        <aside className="ap-sidebar">
          <div className="ap-brand">
            <div className="ap-brand-name">FINPORTAL</div>
            <div className="ap-brand-sub">Admin Console · v3.2</div>
          </div>
          {navItems.map(n => (
            <div
              key={n.id}
              className={`ap-nav-item ${tab === n.id ? 'ap-active' : ''}`}
              onClick={() => setTab(n.id)}
            >
              {n.icon}
              {n.label}
            </div>
          ))}
          <div style={{flex:1}}></div>
          <div className="ap-nav-item" style={{marginTop:'auto'}} onClick={() => navigateTo('home')}>
            <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Exit Demo
          </div>
        </aside>

        {/* Main content */}
        <main className="ap-content">

          {/* ── DASHBOARD ── */}
          {tab === 'dashboard' && (
            <>
              <div className="ap-top">
                <div>
                  <div className="ap-page-title">Dashboard</div>
                  <div className="ap-page-sub">Overview · March 2026</div>
                </div>
                <div className="ap-actions">
                  <button className="ap-btn" onClick={() => setTab('reports')}>Export Report</button>
                  <button className="ap-btn ap-btn-primary" onClick={() => setTab('users')}>Manage Users</button>
                </div>
              </div>
              <div className="ap-stat-grid">
                <div className="ap-stat">
                  <div className="ap-stat-label">Total Users</div>
                  <div className="ap-stat-val">{users.length}</div>
                  <div className="ap-stat-trend up">↑ +3 this month</div>
                  <div className="ap-stat-bar" style={{width:'72%'}}></div>
                </div>
                <div className="ap-stat">
                  <div className="ap-stat-label">Active Users</div>
                  <div className="ap-stat-val">{activeUsers}</div>
                  <div className="ap-stat-trend up">↑ {Math.round(activeUsers/users.length*100)}% retention</div>
                  <div className="ap-stat-bar" style={{width:'85%'}}></div>
                </div>
                <div className="ap-stat">
                  <div className="ap-stat-label">Total Wallet Balance</div>
                  <div className="ap-stat-val">₹{(totalBalance/1000).toFixed(1)}K</div>
                  <div className="ap-stat-trend up">↑ +12.4% WoW</div>
                  <div className="ap-stat-bar" style={{width:'60%'}}></div>
                </div>
                <div className="ap-stat">
                  <div className="ap-stat-label">Pending KYC</div>
                  <div className="ap-stat-val">{users.filter(u => u.kyc === 'pending').length}</div>
                  <div className="ap-stat-trend dn">↓ Needs review</div>
                  <div className="ap-stat-bar" style={{width:'30%', background:'linear-gradient(90deg,var(--red),transparent)'}}></div>
                </div>
              </div>
              <div className="ap-table-wrap">
                <div className="ap-table-head">
                  <div className="ap-table-title">Recent Transactions</div>
                  <button className="ap-action-btn">View All</button>
                </div>
                <table className="ap-table">
                  <thead>
                    <tr>
                      <th>TXN ID</th><th>User</th><th>Type</th><th>Amount</th><th>Status</th><th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {txns.map(t => (
                      <tr key={t.id}>
                        <td style={{fontFamily:'DM Mono,monospace',fontSize:11,opacity:.6}}>{t.id}</td>
                        <td>{t.user}</td>
                        <td style={{opacity:.75}}>{t.type}</td>
                        <td style={{color:'var(--gold2)',fontFamily:'DM Mono,monospace'}}>₹{t.amount.toLocaleString()}</td>
                        <td>
                          <span className={`ap-badge ${t.status === 'success' ? 'active' : t.status === 'pending' ? 'pending' : 'inactive'}`}>
                            {t.status}
                          </span>
                        </td>
                        <td style={{opacity:.45,fontFamily:'DM Mono,monospace',fontSize:11}}>{t.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* ── USERS ── */}
          {tab === 'users' && (
            <>
              <div className="ap-top">
                <div>
                  <div className="ap-page-title">User Management</div>
                  <div className="ap-page-sub">{users.length} total users</div>
                </div>
                <div className="ap-actions">
                  <button className="ap-btn ap-btn-primary" onClick={() => setShowAddModal(true)}>+ Add User</button>
                </div>
              </div>
              <div className="ap-table-wrap">
                <div className="ap-table-head">
                  <div className="ap-table-title">All Users</div>
                  <span style={{fontFamily:'DM Mono,monospace',fontSize:9,letterSpacing:'.2em',color:'var(--plat)',opacity:.4,textTransform:'uppercase'}}>
                    Toggle to Activate / Deactivate
                  </span>
                </div>
                <table className="ap-table">
                  <thead>
                    <tr>
                      <th>Name</th><th>Email</th><th>Phone</th><th>KYC</th>
                      <th>Balance</th><th>Status</th><th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(u => (
                      <tr key={u.id}>
                        <td style={{fontWeight:400}}>{u.name}</td>
                        <td style={{fontFamily:'DM Mono,monospace',fontSize:11,opacity:.6}}>{u.email}</td>
                        <td style={{fontFamily:'DM Mono,monospace',fontSize:11,opacity:.5}}>{u.phone}</td>
                        <td><span className={`ap-badge ${u.kyc === 'verified' ? 'active' : u.kyc === 'pending' ? 'pending' : 'inactive'}`}>{u.kyc}</span></td>
                        <td style={{color:'var(--gold2)',fontFamily:'DM Mono,monospace'}}>₹{u.balance.toLocaleString()}</td>
                        <td>
                          <label className="ap-toggle" title={u.status === 'active' ? 'Click to deactivate' : 'Click to activate'}>
                            <input type="checkbox" checked={u.status === 'active'} onChange={() => toggleUserStatus(u.id)} />
                            <span className="ap-toggle-slider"></span>
                          </label>
                        </td>
                        <td style={{display:'flex',gap:6, flexWrap:'wrap'}}>
                          <button className="ap-action-btn" onClick={() => showToast(`Viewing ${u.name}'s profile`)}>View</button>
                          <button className="ap-action-btn danger" onClick={() => deleteUser(u.id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* ── WALLETS ── */}
          {tab === 'wallets' && (
            <>
              <div className="ap-top">
                <div>
                  <div className="ap-page-title">Wallet Operations</div>
                  <div className="ap-page-sub">Load & distribute funds</div>
                </div>
              </div>
              <div className="ap-wallet-grid">
                <div className="ap-wallet-card">
                  <div className="ap-wallet-title">💳 Load Money</div>
                  <div className="ap-input-group">
                    <label className="ap-input-label">Select User</label>
                    <select className="ap-select" value={loadForm.user} onChange={e => setLoadForm(f => ({...f, user: e.target.value}))}>
                      <option value="">— Choose user —</option>
                      {users.filter(u => u.status === 'active').map(u => <option key={u.id}>{u.name}</option>)}
                    </select>
                  </div>
                  <div className="ap-input-group">
                    <label className="ap-input-label">Amount (₹)</label>
                    <input className="ap-input" type="number" placeholder="e.g. 5000" value={loadForm.amount} onChange={e => setLoadForm(f => ({...f, amount: e.target.value}))} />
                  </div>
                  <button className="ap-btn ap-btn-primary" style={{width:'100%',marginTop:6}} onClick={handleLoad}>Load Funds →</button>
                </div>
                <div className="ap-wallet-card">
                  <div className="ap-wallet-title">💸 Distribute Money</div>
                  <div className="ap-input-group">
                    <label className="ap-input-label">Select User</label>
                    <select className="ap-select" value={distForm.user} onChange={e => setDistForm(f => ({...f, user: e.target.value}))}>
                      <option value="">— Choose user —</option>
                      {users.filter(u => u.status === 'active').map(u => <option key={u.id}>{u.name} (₹{u.balance.toLocaleString()})</option>)}
                    </select>
                  </div>
                  <div className="ap-input-group">
                    <label className="ap-input-label">Amount (₹)</label>
                    <input className="ap-input" type="number" placeholder="e.g. 2000" value={distForm.amount} onChange={e => setDistForm(f => ({...f, amount: e.target.value}))} />
                  </div>
                  <button className="ap-btn" style={{width:'100%',marginTop:6,borderColor:'rgba(74,127,255,.4)',color:'var(--accent)'}} onClick={handleDist}>Distribute Funds →</button>
                </div>
              </div>
              {/* Balances */}
              <div className="ap-table-wrap" style={{marginTop:20}}>
                <div className="ap-table-head"><div className="ap-table-title">User Balances</div></div>
                <table className="ap-table">
                  <thead><tr><th>User</th><th>Status</th><th>Balance</th><th>KYC</th></tr></thead>
                  <tbody>
                    {users.map(u => (
                      <tr key={u.id}>
                        <td>{u.name}</td>
                        <td><span className={`ap-badge ${u.status}`}>{u.status}</span></td>
                        <td style={{color:'var(--gold2)',fontFamily:'DM Mono,monospace',fontWeight:400}}>₹{u.balance.toLocaleString()}</td>
                        <td><span className={`ap-badge ${u.kyc === 'verified' ? 'active' : u.kyc === 'pending' ? 'pending' : 'inactive'}`}>{u.kyc}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* ── FEATURES ── */}
          {tab === 'features' && (
            <>
              <div className="ap-top">
                <div>
                  <div className="ap-page-title">Feature Controls</div>
                  <div className="ap-page-sub">Toggle services on or off for this portal</div>
                </div>
              </div>
              <div className="ap-feature-grid">
                {ALL_FEATURES.map(f => (
                  <div className="ap-feature-item" key={f.key} onClick={() => { setFeatures(prev => ({...prev, [f.key]: !prev[f.key]})); showToast(`${f.name} ${features[f.key] ? 'disabled' : 'enabled'}`); }}>
                    <div>
                      <div className="ap-feat-name">{f.name}</div>
                      <div className="ap-feat-desc">{f.desc}</div>
                    </div>
                    <label className="ap-toggle" onClick={e => e.stopPropagation()}>
                      <input type="checkbox" checked={features[f.key]} onChange={() => { setFeatures(prev => ({...prev, [f.key]: !prev[f.key]})); showToast(`${f.name} ${features[f.key] ? 'disabled' : 'enabled'}`); }} />
                      <span className="ap-toggle-slider"></span>
                    </label>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ── REPORTS ── */}
          {tab === 'reports' && (
            <>
              <div className="ap-top">
                <div>
                  <div className="ap-page-title">Reports</div>
                  <div className="ap-page-sub">Transaction & user analytics</div>
                </div>
                <div className="ap-actions">
                  <button className="ap-btn" onClick={() => showToast('CSV export started...')}>Export CSV</button>
                  <button className="ap-btn" onClick={() => showToast('PDF report generating...')}>Export PDF</button>
                </div>
              </div>
              {/* Simple ASCII bar chart */}
              <div className="ap-table-wrap" style={{marginBottom:20}}>
                <div className="ap-table-head"><div className="ap-table-title">Weekly Transaction Volume</div></div>
                <div style={{padding:'24px 24px 12px'}}>
                  {[
                    {day:'Mon', val:68}, {day:'Tue', val:82}, {day:'Wed', val:74}, {day:'Thu', val:91},
                    {day:'Fri', val:88}, {day:'Sat', val:55}, {day:'Sun', val:43},
                  ].map(d => (
                    <div key={d.day} style={{display:'flex',alignItems:'center',gap:14,marginBottom:12}}>
                      <span style={{fontFamily:'DM Mono,monospace',fontSize:9,letterSpacing:'.2em',color:'var(--plat)',opacity:.5,width:28,textAlign:'right',textTransform:'uppercase'}}>{d.day}</span>
                      <div style={{flex:1,height:18,background:'var(--panel)',position:'relative',overflow:'hidden'}}>
                        <div style={{width:`${d.val}%`,height:'100%',background:`linear-gradient(90deg,var(--gold3),var(--gold2))`,transition:'width 1s ease',position:'relative'}}>
                          <span style={{position:'absolute',right:8,top:'50%',transform:'translateY(-50%)',fontFamily:'DM Mono,monospace',fontSize:9,color:'var(--ink)',fontWeight:600}}>{d.val}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ap-table-wrap">
                <div className="ap-table-head"><div className="ap-table-title">All Transactions</div></div>
                <table className="ap-table">
                  <thead><tr><th>TXN ID</th><th>User</th><th>Type</th><th>Amount</th><th>Status</th><th>Time</th></tr></thead>
                  <tbody>
                    {txns.map(t => (
                      <tr key={t.id}>
                        <td style={{fontFamily:'DM Mono,monospace',fontSize:11,opacity:.6}}>{t.id}</td>
                        <td>{t.user}</td>
                        <td style={{opacity:.75}}>{t.type}</td>
                        <td style={{color:'var(--gold2)',fontFamily:'DM Mono,monospace'}}>₹{t.amount.toLocaleString()}</td>
                        <td><span className={`ap-badge ${t.status === 'success' ? 'active' : t.status === 'pending' ? 'pending' : 'inactive'}`}>{t.status}</span></td>
                        <td style={{opacity:.45,fontFamily:'DM Mono,monospace',fontSize:11}}>{t.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </main>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="ap-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="ap-modal" onClick={e => e.stopPropagation()}>
            <div className="ap-modal-title">Add New User</div>
            <div className="ap-modal-close" onClick={() => setShowAddModal(false)}>✕ Close</div>
            <div className="ap-input-group">
              <label className="ap-input-label">Full Name *</label>
              <input className="ap-input" placeholder="e.g. Rohan Kapoor" value={newUser.name} onChange={e => setNewUser(n => ({...n, name: e.target.value}))} />
            </div>
            <div className="ap-input-group">
              <label className="ap-input-label">Email Address *</label>
              <input className="ap-input" type="email" placeholder="e.g. rohan@company.com" value={newUser.email} onChange={e => setNewUser(n => ({...n, email: e.target.value}))} />
            </div>
            <div className="ap-input-group">
              <label className="ap-input-label">Phone Number</label>
              <input className="ap-input" placeholder="+91 98xxx xxxxx" value={newUser.phone} onChange={e => setNewUser(n => ({...n, phone: e.target.value}))} />
            </div>
            <div style={{display:'flex',gap:10,marginTop:20}}>
              <button className="ap-btn ap-btn-primary" style={{flex:1}} onClick={addUser}>Add User</button>
              <button className="ap-btn" style={{flex:1}} onClick={() => setShowAddModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div style={{
          position:'fixed',bottom:32,left:'50%',transform:'translateX(-50%)',
          background:'var(--panel2)',border:'1px solid rgba(184,150,62,.3)',
          padding:'12px 24px',fontFamily:'DM Mono,monospace',fontSize:11,
          letterSpacing:'.18em',color:'var(--gold2)',zIndex:9999,
          boxShadow:'0 16px 40px rgba(0,0,0,.4)',animation:'pgIn .3s ease',
          whiteSpace:'nowrap',
        }}>
          {toast}
        </div>
      )}
    </div>
  );
}
