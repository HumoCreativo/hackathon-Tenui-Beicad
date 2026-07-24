import React from 'react';
import { Flame, ShieldCheck, Landmark, Cpu, ArrowUpRight, CheckCircle2, Lock, Building2 } from 'lucide-react';

export const HeroAssetCard: React.FC = () => {
  return (
    <div className="nexus-card p-6 relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-8 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header Info */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-950 text-blue-400 border border-blue-800">
              RWA Preferred Series A
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> ERC-3643 Verified Trust
            </span>
          </div>
          
          <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-100 tracking-tight">
            Reactor de Plasma DMP 5.000 AP - Fideicomiso Serie A
          </h1>
          <p className="text-sm text-slate-400 font-medium mt-1 flex items-center gap-2">
            <span className="text-slate-300">Desintegración molecular plasmática. Cero pasivos ambientales.</span>
          </p>
        </div>

        <div className="flex items-center space-x-3 self-start lg:self-center shrink-0">
          <div className="bg-slate-950/80 border border-slate-800 px-4 py-2.5 rounded-xl text-right">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Target Dividend APY</div>
            <div className="text-2xl font-black font-mono text-emerald-400">14.2% Net</div>
          </div>
        </div>
      </div>

      {/* Grid of Key Institutional Asset Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5">
        
        <div className="bg-slate-950/50 border border-slate-800/80 p-3.5 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
            <span>Sponsor</span>
            <Building2 className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="font-semibold text-slate-100 text-sm">Beicad Energy</div>
          <div className="text-[11px] text-slate-500 font-mono">Infrastructure S.A.</div>
        </div>

        <div className="bg-slate-950/50 border border-slate-800/80 p-3.5 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
            <span>Plant Capacity</span>
            <Flame className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="font-semibold text-slate-100 text-sm">5,000 AP</div>
          <div className="text-[11px] text-slate-500 font-mono">&gt;5,000°C Molecular Arc</div>
        </div>

        <div className="bg-slate-950/50 border border-slate-800/80 p-3.5 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
            <span>Series Valuation</span>
            <Landmark className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="font-semibold font-mono text-slate-100 text-sm">$45,000,000 USDC</div>
          <div className="text-[11px] text-slate-500 font-mono">$15M Tokenized Series A</div>
        </div>

        <div className="bg-slate-950/50 border border-slate-800/80 p-3.5 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
            <span>Payout Frequency</span>
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="font-semibold text-slate-100 text-sm">Quarterly USDC</div>
          <div className="text-[11px] text-slate-500 font-mono">Automated Smart Contract</div>
        </div>

      </div>

      {/* Trust Structure Badges */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 font-mono">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Syngas Offtake Agreement Active
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Lock className="w-3.5 h-3.5 text-blue-400" /> Bank Escrow Custody (Tenui Global)
          </span>
        </div>
        <span className="text-[11px] text-slate-500">ISIN: LU2891049201</span>
      </div>

    </div>
  );
};
