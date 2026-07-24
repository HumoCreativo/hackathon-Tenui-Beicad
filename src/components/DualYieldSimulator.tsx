import React, { useState } from 'react';
import { Sliders, Leaf } from 'lucide-react';
import { TRANSLATIONS, Language } from '../i18n/translations';

interface DualYieldSimulatorProps {
  lang: Language;
}

export const DualYieldSimulator: React.FC<DualYieldSimulatorProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [horizonYears, setHorizonYears] = useState<number>(5);

  // Dynamic USDC APY (text-purple-400)
  const dynamicUsdcApy = Number((8.5 + (horizonYears - 1) * (5.6 / 9)).toFixed(1));
  // Dynamic Carbon Credit Generation (text-emerald-400)
  const carbonGeneratedCo2t = Math.round(150 + (horizonYears - 1) * (1650 / 9));
  const estPayout = Math.round(150000 * (dynamicUsdcApy / 100) * horizonYears);

  return (
    <div className="nexus-card-purple p-6 relative overflow-hidden">
      <div className="flex items-center justify-between pb-4 border-b border-purple-500/30">
        <div>
          <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 text-[10px] font-mono font-bold uppercase">
            Dual Projection Engine
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
            <span>1 Year</span>
            <span>5 Years</span>
            <span>10 Years</span>
          </div>
        </div>

        {/* Dual Metrics Display: text-purple-400 for USDC APY & text-emerald-400 for Carbon Credits */}
        <div className="grid grid-cols-2 gap-3 font-mono text-xs">
          
          {/* Metric 1: Projected APY (USDC) in text-purple-400 */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-slate-400 mb-1">{t.projectedApyUsdc}</div>
            <div className="text-2xl font-black text-purple-400 tracking-tight">
              {dynamicUsdcApy}% APY
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Amortized Yield</div>
          </div>

          {/* Metric 2: Estimated Carbon Credits Generated in text-emerald-400 */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-slate-400 mb-1">{t.estCarbonGeneratedCo2t}</div>
            <div className="text-2xl font-black text-emerald-400 tracking-tight flex items-center gap-1">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>{carbonGeneratedCo2t} CO₂t</span>
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Time-Decay Utility</div>
          </div>

        </div>

        {/* Dual-Axis Yield Graph: Blue area for USDC yield, Emerald line for Carbon Credits */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded bg-blue-500"></span> USDC Yield
              <span className="w-2.5 h-2.5 rounded bg-emerald-400 ml-1"></span> Carbon CO₂t
            </span>
            <span className="font-bold text-purple-400">Payout: ${estPayout.toLocaleString()} USDC</span>
          </div>

          <div className="h-32 w-full relative pt-2">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 90" preserveAspectRatio="none">
              <defs>
                <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Blue Area Graph for USDC yield trajectory */}
              <path
                d={`M 0,80 Q 150,${80 - horizonYears * 5} 300,${80 - horizonYears * 6.5} L 300,90 L 0,90 Z`}
                fill="url(#blueGrad)"
              />
              <path
                d={`M 0,80 Q 150,${80 - horizonYears * 5} 300,${80 - horizonYears * 6.5}`}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
              />

              {/* Emerald Line Graph for Carbon Credits accumulated */}
              <path
                d={`M 0,85 Q 150,${85 - horizonYears * 6} 300,${85 - horizonYears * 7.5}`}
                fill="none"
                stroke="#34d399"
                strokeWidth="3"
                strokeDasharray="4 2"
              />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};
