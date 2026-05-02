

export default function DashboardPreview() {
  return (
    <div className="w-full max-w-[1440px] mx-auto p-8 space-y-6 dashboard-preview font-inter">
      {/* Hero Grid: Portfolio Overview & Quick Swap */}
      <div className="grid grid-cols-12 gap-6">
        {/* Portfolio Overview (8/12) */}
        <section className="col-span-12 lg:col-span-8 glass-card rounded-2xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div>
              <h2 className="text-white/60 font-medium text-[12px] uppercase tracking-widest mb-1">Total Platform Volume</h2>
              <div className="flex items-baseline gap-4">
                <span className="text-[36px] font-bold text-white tracking-tight">$24.8M</span>
                <span className="text-[#FFFFFF] text-[14px] font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                  +12.4%
                </span>
              </div>
            </div>
            <div className="flex bg-white/5 rounded-lg p-1">
              <button className="px-3 py-1 rounded text-xs font-semibold bg-white/10 text-white cursor-none">1D</button>
              <button className="px-3 py-1 rounded text-xs font-semibold text-white/40 hover:text-white transition-colors cursor-none">1W</button>
              <button className="px-3 py-1 rounded text-xs font-semibold text-white/40 hover:text-white transition-colors cursor-none">1M</button>
              <button className="px-3 py-1 rounded text-xs font-semibold text-white/40 hover:text-white transition-colors cursor-none">1Y</button>
            </div>
          </div>
          {/* Visualization Placeholder */}
          <div className="h-64 w-full relative">
            <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="db-gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3"></stop>
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path d="M0,150 Q100,140 200,100 T400,120 T600,60 T800,40 L800,200 L0,200 Z" fill="url(#db-gradient)"></path>
              <path className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" d="M0,150 Q100,140 200,100 T400,120 T600,60 T800,40" fill="none" stroke="#FFFFFF" strokeWidth="3"></path>
            </svg>
          </div>
        </section>

        {/* Quick Swap (4/12) */}
        <section className="col-span-12 lg:col-span-4 glass-card rounded-2xl p-6 flex flex-col">
          <h3 className="text-[24px] font-semibold text-white mb-6">Resource Allocation</h3>
          <div className="space-y-4 flex-1">
            <div className="bg-[#1e2020] rounded-xl p-4 border border-white/5">
              <div className="flex justify-between mb-2">
                <label className="text-xs text-white/40">Scale Down</label>
                <span className="text-xs text-white/40">Active: 12 Nodes</span>
              </div>
              <div className="flex items-center justify-between">
                <input className="bg-transparent border-none text-xl font-bold text-white focus:ring-0 w-1/2 p-0 outline-none" type="text" defaultValue="2" />
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors cursor-none">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">N</div>
                  <span className="text-sm font-bold">NODE</span>
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center -my-3 relative z-10 pointer-events-none">
              <button className="bg-[#1e2020] border border-white/10 p-2 rounded-lg text-[#FFFFFF] pointer-events-auto cursor-none hover:rotate-180 transition-transform duration-500">
                <span className="material-symbols-outlined">swap_vert</span>
              </button>
            </div>

            <div className="bg-[#1e2020] rounded-xl p-4 border border-white/5">
              <div className="flex justify-between mb-2">
                <label className="text-xs text-white/40">Scale Up</label>
                <span className="text-xs text-white/40">Est. 4.2 TB</span>
              </div>
              <div className="flex items-center justify-between">
                <input className="bg-transparent border-none text-xl font-bold text-white focus:ring-0 w-1/2 p-0 outline-none" placeholder="0.00" type="text" />
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors cursor-none">
                  <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold">TB</div>
                  <span className="text-sm font-bold">STOR</span>
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full py-4 mt-6 rounded-xl bg-white/5 border border-white/10 text-white text-[14px] font-medium hover:bg-[#FFFFFF]/10 hover:border-[#FFFFFF] hover:text-[#FFFFFF] transition-all cursor-none">
            Update Allocation
          </button>
        </section>
      </div>

      {/* Middle Section: Assets & Repartition */}
      <div className="grid grid-cols-12 gap-6">
        {/* Assets Table (8/12) */}
        <section className="col-span-12 lg:col-span-8 glass-card rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-[24px] font-semibold text-white">Active Deployments</h3>
            <button className="text-white/40 hover:text-white transition-colors text-sm font-medium cursor-none">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="text-white/40 text-[12px] font-semibold border-b border-white/5">
                <tr>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Service</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Usage</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Avg Latency</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Cost Limits</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Uptime</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">24h Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-xs font-bold">PAY</div>
                      <div>
                        <div className="text-sm font-bold text-white">Payment Rails</div>
                        <div className="text-[10px] text-white/40">API-CORE</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-white/80">42,120 Req/s</td>
                  <td className="px-6 py-4 text-sm text-white/80">14ms</td>
                  <td className="px-6 py-4 text-sm font-bold text-white">$15,000/mo</td>
                  <td className="px-6 py-4 text-sm font-bold text-white">99.99%</td>
                  <td className="px-6 py-4 text-sm text-[#FFFFFF]">+4.2% Load</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-xs font-bold">LLM</div>
                      <div>
                        <div className="text-sm font-bold text-white">AI Engine</div>
                        <div className="text-[10px] text-white/40">GPT-4o</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-white/80">1.8M Tokens</td>
                  <td className="px-6 py-4 text-sm text-white/80">340ms</td>
                  <td className="px-6 py-4 text-sm font-bold text-white">$5,350/mo</td>
                  <td className="px-6 py-4 text-sm font-bold text-white">100%</td>
                  <td className="px-6 py-4 text-sm text-[#FFFFFF]">+1.8% Call Cnt.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs font-bold">KYC</div>
                      <div>
                        <div className="text-sm font-bold text-white">Compliance</div>
                        <div className="text-[10px] text-white/40">VKYC-MOD</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-white/80">1,828 Checks</td>
                  <td className="px-6 py-4 text-sm text-white/80">1.2s</td>
                  <td className="px-6 py-4 text-sm font-bold text-white">Auto-scale</td>
                  <td className="px-6 py-4 text-sm font-bold text-white">99.98%</td>
                  <td className="px-6 py-4 text-sm text-white/60">0.0% Variance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Repartition Chart (4/12) */}
        <section className="col-span-12 lg:col-span-4 glass-card rounded-2xl p-6 flex flex-col items-center justify-center">
          <h3 className="text-[24px] font-semibold text-white w-full text-left mb-8">Service Dominance</h3>
          <div className="relative w-48 h-48 mb-8">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="3"></circle>
              <circle className="drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" cx="18" cy="18" r="16" fill="transparent" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="68, 100"></circle>
              <circle cx="18" cy="18" r="16" fill="transparent" stroke="#3b82f6" strokeWidth="3" strokeDasharray="24, 100" strokeDashoffset="-68"></circle>
              <circle cx="18" cy="18" r="16" fill="transparent" stroke="#a855f7" strokeWidth="3" strokeDasharray="8, 100" strokeDashoffset="-92"></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-2xl font-bold text-white">68%</span>
              <span className="text-[10px] text-white/40 uppercase tracking-wider">Payments</span>
            </div>
          </div>
          <div className="w-full space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFFFFF]"></span>
                <span className="text-sm text-white/60">Payment Rails</span>
              </div>
              <span className="text-sm font-bold text-white text-right">68% Data</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-sm text-white/60">AI Modules</span>
              </div>
              <span className="text-sm font-bold text-white text-right">24% Compute</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span className="text-sm text-white/60">Compliance</span>
              </div>
              <span className="text-sm font-bold text-white text-right">8% Bandwidth</span>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Grid: History & Market */}
      <div className="grid grid-cols-12 gap-6">
        {/* Transactions (7/12) */}
        <section className="col-span-12 lg:col-span-7 glass-card rounded-2xl p-6">
          <h3 className="text-[24px] font-semibold text-white mb-6">Infrastructure Events</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-none">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#FFFFFF]">
                  <span className="material-symbols-outlined">call_received</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">API Keys Rotated</div>
                  <div className="text-xs text-white/40">Nov 24, 2023 • 14:32</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-[#FFFFFF]">Success</div>
                <div className="text-xs text-white/40">Automated by Policy</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-none">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60">
                  <span className="material-symbols-outlined">swap_horiz</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Cluster Auto-Scaled</div>
                  <div className="text-xs text-white/40">Nov 22, 2023 • 09:15</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-white">+12 Nodes</div>
                <div className="text-xs text-white/40">Region EU-West-1</div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Updates (5/12) */}
        <section className="col-span-12 lg:col-span-5 glass-card rounded-2xl p-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">trending_up</span>
          </div>
          <h3 className="text-[24px] font-semibold text-white mb-6">System Insights</h3>
          <div className="space-y-6">
            <div className="bg-[#FFFFFF]/5 border-l-4 border-[#FFFFFF] p-4 rounded-r-xl">
              <h4 className="text-xs font-black text-[#FFFFFF] uppercase tracking-widest mb-1">Traffic Spike</h4>
              <p className="text-sm text-white/80">Payments endpoint shows higher volume (+240%) than usual. Auto-scaling rules applied successfully.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between cursor-none">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-500/20">
                     <span className="material-symbols-outlined text-purple-400">psychology</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">AI Usage Increase</div>
                    <div className="text-xs text-white/40">Document parsing surged 12.4%...</div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-white/20">chevron_right</span>
              </div>
              <div className="flex items-center justify-between cursor-none">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/20">
                     <span className="material-symbols-outlined text-blue-400">cloud_upload</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Provider Updates</div>
                    <div className="text-xs text-white/40">HDFC integration v4 deployed...</div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-white/20">chevron_right</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
