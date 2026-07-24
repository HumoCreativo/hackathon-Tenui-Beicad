import React, { useState, useEffect } from 'react';
import { Flame, Shield, Activity, FileCode } from 'lucide-react';
import { TRANSLATIONS, Language } from '../i18n/translations';

interface TelemetryFooterProps {
  lang: Language;
  onOpenZkProofModal: () => void;
}

export const TelemetryFooter: React.FC<TelemetryFooterProps> = ({
  lang,
  onOpenZkProofModal,
}) => {
  const t = TRANSLATIONS[lang];
  const [temp, setTemp] = useState<number>(5240);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemp((prev) => Math.max(5150, Math.min(5400, prev + Math.floor(Math.random() * 30) - 15)));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="mt-8 border-t border-slate-800 bg-slate-950/95 py-6 px-4 lg:px-8">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
        
        {/* Telemetry Real-time Data Badges */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-slate-400">{t.plasmaTemp}</span>
            <span className="font-bold text-amber-400 font-mono">&gt;{temp.toLocaleString()}°C</span>
          </div>

          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-emerald-900/30 border border-emerald-500/40">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300">{t.dioxinEmissions}</span>
            <span className="font-black text-emerald-400 font-mono">0%</span>
          </div>

          <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
            <Activity className="w-4 h-4 text-blue-400" />
            <span className="text-slate-400">Syngas Flow:</span>
            <span className="font-bold text-blue-400">4,890 Nm³/h</span>
          </div>
        </div>

        {/* Required Footer Line: "Data validated on-chain via zk-SNARKs. Fiat Rails powered by Tenui" */}
        <div className="flex items-center space-x-3 text-slate-400 text-[11px]">
          <button
            onClick={onOpenZkProofModal}
            className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <FileCode className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-slate-200">{t.telemetryFooterLine}</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
