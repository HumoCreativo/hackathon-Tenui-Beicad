import React, { useState, useEffect } from 'react';
import { Leaf, Shield, AlertTriangle, Flame, ArrowLeftRight } from 'lucide-react';
import { TRANSLATIONS, Language } from '../i18n/translations';

interface CarbonCreditsPanelProps {
  lang: Language;
  onBurnOffset: () => void;
  onTradeSecondary: () => void;
}

export const CarbonCreditsPanel: React.FC<CarbonCreditsPanelProps> = ({
  lang,
  onBurnOffset,
  onTradeSecondary,
}) => {
  const t = TRANSLATIONS[lang];
  const [secondsLeft, setSecondsLeft] = useState(12 * 86400 - 3612);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(secondsLeft / 86400);
  const hours = Math.floor((secondsLeft % 86400) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="nexus-card-emerald p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-emerald-500/30">
        <div>
          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-mono font-bold uppercase">
            {t.envYieldTitle}
          </span>
          <h2 className="text-lg font-bold text-slate-100 tracking-tight flex items-center gap-2 mt-1">
            <Leaf className="w-5 h-5 text-emerald-400" />
            <span>{t.unclaimedCreditsTitle}</span>
          </h2>
        </div>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-emerald-glow" />
      </div>

      {/* Unclaimed Carbon Credits Readout */}
      <div className="mt-5 space-y-4">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-mono">NCT-CARBON Utility Tokens</div>
            <div className="text-2xl font-black font-mono text-emerald-400 mt-0.5">
              {t.unclaimedCreditsCount}
            </div>
            <div className="text-[11px] text-emerald-300/80 font-mono mt-0.5">
              {t.creditsValuation}
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/50 flex items-center justify-center">
            <Shield className="w-6 h-6 text-emerald-400" />
          </div>
        </div>

        {/* Dynamic Time-Decay Warning Box */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/50 space-y-2">
          <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs font-mono">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 animate-bounce" />
            <span>{t.timeDecayWarningMsg}</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
            {t.timeDecayDesc}
          </p>

          {/* Time Remaining Clock */}
          <div className="pt-2 border-t border-amber-900/60 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">{t.timeRemainingLabel}</span>
            <span className="font-bold text-amber-400 bg-slate-950 px-2.5 py-1 rounded border border-amber-900">
              {days}d {hours}h {minutes}m {seconds}s
            </span>
          </div>
        </div>

        {/* Action Buttons: "Burn for Offset" or "Trade on Secondary" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <button
            onClick={onBurnOffset}
            className="py-3 px-4 rounded-xl bg-emerald-900/40 hover:bg-emerald-900/70 border border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-200 font-sans text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
          >
            <Flame className="w-4 h-4 text-emerald-400" />
            <span>{t.burnForOffsetBtn}</span>
          </button>

          <button
            onClick={onTradeSecondary}
            className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-blue-500 text-slate-200 hover:text-white font-sans text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
          >
            <ArrowLeftRight className="w-4 h-4 text-blue-400" />
            <span>{t.tradeOnSecondaryBtn}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
