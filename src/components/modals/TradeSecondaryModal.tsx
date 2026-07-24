import React from 'react';
import { X, ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS, Language } from '../../i18n/translations';

interface TradeSecondaryModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const TradeSecondaryModal: React.FC<TradeSecondaryModalProps> = ({
  lang,
  isOpen,
  onClose,
}) => {
  const t = TRANSLATIONS[lang];
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="nexus-card w-full max-w-lg p-6 relative border-blue-600/50 shadow-2xl space-y-4 font-mono text-xs">
        <div className="flex justify-between items-center border-b border-slate-800 pb-3 font-sans">
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-blue-400" />
            <span>Trade Carbon Credits on Secondary DEX</span>
          </h3>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
          <div className="flex justify-between"><span className="text-slate-400">Credits to Sell:</span><span className="font-bold text-slate-100">450 NCT-CARBON</span></div>
          <div className="flex justify-between"><span className="text-slate-400">DEX Spot Price:</span><span className="font-bold text-emerald-400">$30.00 USDC / Token</span></div>
          <div className="flex justify-between pt-2 border-t border-slate-800"><span className="text-slate-400">Est. Proceeds:</span><span className="font-bold text-blue-400 text-sm">$13,500.00 USDC</span></div>
        </div>

        <div className="flex justify-end pt-2 font-sans">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all cursor-pointer shadow-lg shadow-blue-600/30"
          >
            Execute Secondary Order
          </button>
        </div>
      </div>
    </div>
  );
};
