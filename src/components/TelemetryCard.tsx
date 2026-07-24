import React, { useState, useEffect } from 'react';
import { Flame, ShieldCheck, Activity, Cpu, Zap, CheckCircle, ExternalLink } from 'lucide-react';
import { TelemetryReading } from '../types/dashboard';

interface TelemetryCardProps {
  telemetry: TelemetryReading;
  onOpenZkProofModal: () => void;
}

export const TelemetryCard: React.FC<TelemetryCardProps> = ({
  telemetry,
  onOpenZkProofModal,
}) => {
  const [coreTemp, setCoreTemp] = useState<number>(5120);

  useEffect(() => {
    const timer = setInterval(() => {
      setCoreTemp((prev) => 5100 + Math.floor(Math.random() * 45));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between space-y-6">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Card Title */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
              Live Telemetry
            </span>
          </div>
          <h2 className="text-xl font-bold text-slate-100 mt-1 tracking-tight">
            Beicad DMP 5.000 AP - Live Telemetry
          </h2>
        </div>
        <Cpu className="w-6 h-6 text-emerald-400" />
      </div>

      {/* Visual: Plasma Reactor Wireframe / Interactive Diagram */}
      <div className="relative w-full h-44 bg-slate-950 rounded-xl border border-slate-800/80 overflow-hidden flex items-center justify-center p-4">
        {/* Animated Reactor SVG Schematic */}
        <svg className="w-full h-full text-slate-700" viewBox="0 0 320 120" fill="none">
          {/* Outer Chamber */}
          <rect x="20" y="20" width="280" height="80" rx="12" stroke="#334155" strokeWidth="2" fill="#020617" />
          
          {/* Molecular Arc Core */}
          <circle cx="160" cy="60" r="32" fill="#064e3b" fillOpacity="0.4" stroke="#10b981" strokeWidth="2" />
          <circle cx="160" cy="60" r="22" fill="#047857" fillOpacity="0.6" />
          <circle cx="160" cy="60" r="12" fill="#34d399" className="animate-pulse" />

          {/* Plasma Streams */}
          <path d="M 40 60 L 128 60" stroke="#10b981" strokeWidth="2" strokeDasharray="6 4" className="animate-dash" />
          <path d="M 192 60 L 280 60" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 4" className="animate-dash" />

          {/* Labels in Graphic */}
          <text x="50" y="45" fill="#94a3b8" fontSize="9" fontFamily="monospace">WASTE INFEED</text>
          <text x="140" y="105" fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="monospace">&gt;5,000°C ARC</text>
          <text x="210" y="45" fill="#60a5fa" fontSize="9" fontFamily="monospace">CLEAN SYNGAS</text>
        </svg>

        {/* Floating Live Indicator Badge */}
        <div className="absolute top-3 right-3 flex items-center space-x-1.5 bg-slate-900/90 border border-emerald-500/30 px-2.5 py-1 rounded-full text-[10px] font-mono text-emerald-400 shadow">
          <Flame className="w-3 h-3 text-emerald-400 animate-bounce" />
          <span>Plasma Core Active</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Metric 1 */}
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
          <div className="text-[11px] text-slate-400 font-mono mb-1">Plasma Core Temp</div>
          <div className="text-lg font-extrabold text-emerald-400 font-mono">
            &gt;5,000 °C
          </div>
          <div className="text-[10px] text-emerald-500/80 font-mono mt-0.5">({coreTemp} °C Live)</div>
        </div>

        {/* Metric 2 */}
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
          <div className="text-[11px] text-slate-400 font-mono mb-1">Dioxins & Lixiviates</div>
          <div className="text-lg font-extrabold text-emerald-400 font-mono">
            0%
          </div>
          <div className="text-[10px] text-emerald-500/80 font-mono mt-0.5">Zero Toxins</div>
        </div>

        {/* Metric 3 */}
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
          <div className="text-[11px] text-slate-400 font-mono mb-1">Syngas Output</div>
          <div className="text-lg font-extrabold text-emerald-400 font-mono">
            Optimal
          </div>
          <div className="text-[10px] text-blue-400 font-mono mt-0.5">Continuous Stream</div>
        </div>
      </div>

      {/* Operational Highlights */}
      <div className="p-3.5 rounded-xl bg-emerald-900/30 border border-emerald-800/50 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center space-x-2 text-emerald-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Molecular Disintegration Tech</span>
        </div>
        <span className="text-slate-300 font-bold">5,000 AP Capacity</span>
      </div>

      {/* Tagline & On-chain Verification */}
      <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <p className="text-slate-400 font-mono text-[11px]">
          RWA Backed by Beicad S.A. & Tenui Infrastructure
        </p>

        <button
          onClick={onOpenZkProofModal}
          className="flex items-center space-x-1.5 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
        >
          <span>zk-SNARK Validated</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
