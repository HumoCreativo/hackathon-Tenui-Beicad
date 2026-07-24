import React, { useState, useEffect } from 'react';
import { Leaf, AlertTriangle, Flame } from 'lucide-react';
import { TRANSLATIONS, Language } from '../i18n/translations';

interface CarbonCreditWalletProps {
  lang: Language;
  onBurnOffset: () => void;
}

export const CarbonCreditWallet: React.FC<CarbonCreditWalletProps> = ({ lang, onBurnOffset }) => {
  const t = TRANSLATIONS[lang];
  const [secondsLeft, setSecondsLeft] = useState(12 * 86400 - 3612);

  useEffect(() => {
    const interval = setInterval(() => setSecondsLeft((prev) => Math.max(0, prev - 1)), 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(secondsLeft / 86400);
  const hours = Math.floor((secondsLeft % 86400) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);

  return (
    <div className="nexus-card-emerald p-5 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-emerald-500/30">
        <div className="flex items-center space-x-2">
          <Leaf className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-slate-100 text-sm">{t.carbonWalletTitle}</span>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 font-bold">{t.unclaimedCreditsCount}</span>
      </div>

      <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 space-y-1.5">
        <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs font-mono">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
          <span>{t.timeDecayWarningMsg}</span>
        </div>
        <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 pt-1">
          <span>{t.timeRemainingLabel}</span>
          <span className="font-bold text-amber-400">{days}d {hours}h {minutes}m</span>
        </div>
      </div>

      <button
        onClick={onBurnOffset}
        className="w-full py-2.5 px-4 rounded-xl bg-emerald-900/40 hover:bg-emerald-900/70 border border-emerald-500/50 text-emerald-400 font-sans text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
      >
        <Flame className="w-4 h-4 text-emerald-400" />
        <span>{t.burnForOffsetBtn}</span>
      </button>
    </div>
  );
};
