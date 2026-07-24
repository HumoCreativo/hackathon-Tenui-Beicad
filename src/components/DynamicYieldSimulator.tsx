import React, { useState } from 'react';
import { Sliders, Leaf } from 'lucide-react';
import { TRANSLATIONS, Language } from '../i18n/translations';

interface DynamicYieldSimulatorProps {
  lang: Language;
}

export const DynamicYieldSimulator: React.FC<DynamicYieldSimulatorProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [horizonYears, setHorizonYears] = useState<number>(5);

  // Dynamic APY metric calculation (Year 1: 8.5%, Year 5: 11.2%, Year 10: 14.1%)
  // Uses text-purple-400 as specified to distinguish from hard balances
  const dynamicApy = Number((8.5 + (horizonYears - 1) * (5.6 / 9)).toFixed(1));
  const carbonCreditsGenerated = Math.round(horizonYears * 450);
  const estPayout = Math.round(150000 * (dynamicApy / 100) * horizonYears);

  return (
    <div className="nexus-card-purple p-6 relative overflow-hidden">
      <div className="flex items-center justify-between pb-4 border-b border-purple-500/30">
        <div>
          <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 text-[10px] font-mono font-bold uppercase">
            Simulator Engine
          </span>
          <h2 className="text-lg font-bold text-slate-100 tracking-tight flex items-center gap-2 mt-1">
            <Sliders className="w-5 h-5 text-purple-400" />
            <span>{t.simulatorTitle}</span>
          </h2>
        </div>
      </div>

      {/* Custom Range Slider Labeled: "Investment Horizon (Years)" (Range 1 to 10) */}
      <div className="mt-5 space-y-4">
        <div className="p-4 rounded-xl bg-slate-950 border border-purple-900/50 space-y-3">
          <div className="flex justify-between items-center font-mono text-xs">
            <label className="text-slate-300 font-bold">{t.sliderLabel}</label>
            <span className="text-lg font-extrabold text-purple-400 px-3 py-0.5 bg-purple-950 rounded border border-purple-800">
              {horizonYears} {horizonYears === 1 ? 'Year' : 'Years'}
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={horizonYears}
            onChange={(e) => setHorizonYears(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />

          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>1 Year (8.5%)</span>
            <span>5 Years (11.2%)</span>
            <span>10 Years (14.1%)</span>
          </div>
        </div>

        {/* Dynamic Metrics with text-purple-400 accent for dynamic APY */}
        <div className="grid grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-slate-400 mb-1">{t.projectedApyLabel}</div>
            <div className="text-2xl font-black text-purple-400 tracking-tight">
              {dynamicApy}% APY
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Dynamic Amortization</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-slate-400 mb-1">{t.estCarbonGenerated}</div>
            <div className="text-xl font-bold text-emerald-400 flex items-center gap-1">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>+{carbonCreditsGenerated.toLocaleString()} NCT</span>
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Time-Decay Tokens</div>
          </div>
        </div>

        {/* Trajectory Yield Line Graph (SVG) */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400">
            <span>Trajectory Curve ({horizonYears}y)</span>
            <span className="font-bold text-purple-400">Est. Payout: ${estPayout.toLocaleString()} USDC</span>
          </div>

          <div className="h-28 w-full relative pt-2">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c084fc" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d={`M 0,70 Q 150,${70 - horizonYears * 5} 300,${70 - horizonYears * 6} L 300,80 L 0,80 Z`}
                fill="url(#purpleGrad)"
              />
              <path
                d={`M 0,70 Q 150,${70 - horizonYears * 5} 300,${70 - horizonYears * 6}`}
                fill="none"
                stroke="#c084fc"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};
