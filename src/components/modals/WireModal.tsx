import React from 'react';
import { X, Landmark, Copy, CheckCircle2, ShieldCheck, Building } from 'lucide-react';
import { FiatRailInfo } from '../../types/dashboard';

interface WireModalProps {
  isOpen: boolean;
  onClose: () => void;
  fiatRails: FiatRailInfo;
}

export const WireModal: React.FC<WireModalProps> = ({
  isOpen,
  onClose,
  fiatRails,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="nexus-card w-full max-w-xl p-6 relative border-indigo-500/50 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-900/30 border border-indigo-500/40 flex items-center justify-center">
              <Landmark className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <span>Institutional Wire Instructions</span>
              </h3>
              <p className="text-xs text-indigo-300 font-mono">
                Powered by Tenui Global Infrastructure
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bank Wire Details Box */}
        <div className="mt-5 space-y-3 font-mono text-xs">
          
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-slate-400">
              <span>Beneficiary Name:</span>
              <span className="font-bold text-slate-100">{fiatRails.custodianTrust}</span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>Bank Custodian:</span>
              <span className="font-bold text-slate-100">J.P. Morgan Bank Luxembourg S.A.</span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>IBAN / Account #:</span>
              <span className="font-bold text-emerald-400">LU89 3704 0019 4810 2938 11</span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>SWIFT / BIC Code:</span>
              <span className="font-bold text-slate-100">CHASLU22XXX</span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>Payment Reference (Required):</span>
              <span className="font-bold text-blue-400">NEXUS-BEICAD-SERIESA-0891</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 text-[11px] leading-relaxed">
            ⚡ Tenui settlement engine auto-detects incoming SEPA Instant / Fedwire deposits and issues USDC directly to your ERC-4337 Smart Account with 0.02% FX spread.
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-bold transition-all cursor-pointer"
          >
            Close Wire Modal
          </button>
        </div>

      </div>
    </div>
  );
};
