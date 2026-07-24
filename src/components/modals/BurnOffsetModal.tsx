import React from 'react';
import { X, Flame, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS, Language } from '../../i18n/translations';

interface BurnOffsetModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const BurnOffsetModal: React.FC<BurnOffsetModalProps> = ({
  lang,
  isOpen,
  onClose,
}) => {
  const t = TRANSLATIONS[lang];
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="nexus-card-emerald w-full max-w-lg p-6 relative border-emerald-500/60 shadow-2xl space-y-4 font-mono text-xs">
        <div className="flex justify-between items-center border-b border-emerald-500/30 pb-3 font-sans">
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Flame className="w-5 h-5 text-emerald-400" />
            <span>Burn for Carbon Offset</span>
          </h3>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-2">
          <div className="text-slate-300">Retiring <strong>450 NCT-CARBON Tokens</strong></div>
          <div className="text-emerald-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Generated Proof: 450 Metric Tons CO₂ Permanently Retired</span>
          </div>
          <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-800">
            Attestation: Polygon zkEVM Carbon Verifier #0x712a...
          </div>
        </div>

        <div className="flex justify-end pt-2 font-sans">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all cursor-pointer shadow-lg shadow-emerald-900/40"
          >
            Confirm Offset Retirement
          </button>
        </div>
      </div>
    </div>
  );
};
