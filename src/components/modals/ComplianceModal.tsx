import React from 'react';
import { X, ShieldCheck, CheckCircle2, FileCheck, Landmark, Lock, ExternalLink } from 'lucide-react';
import { ComplianceCredential } from '../../types/dashboard';

interface ComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
  compliance: ComplianceCredential;
}

export const ComplianceModal: React.FC<ComplianceModalProps> = ({
  isOpen,
  onClose,
  compliance,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="nexus-card w-full max-w-xl p-6 relative border-emerald-500/40 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <span>ONCHAINID Compliance Certificate</span>
              </h3>
              <p className="text-xs text-emerald-400 font-mono">
                ERC-3643 Permissioned Token Identity Contract
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

        {/* Credentials Grid */}
        <div className="mt-5 space-y-3 font-mono text-xs">
          
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-slate-500 uppercase mb-1">ONCHAINID Identity Address</div>
            <div className="text-slate-100 font-bold">{compliance.onchainID}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Investor Classification:</span>
              <span className="font-bold text-emerald-400">{compliance.investorClass}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Jurisdiction & Directive:</span>
              <span className="font-semibold text-slate-200">{compliance.jurisdiction}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">MiFID II Status:</span>
              <span className="font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {compliance.mifidIIStatus}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">AML / Sanctions Screening:</span>
              <span className="font-semibold text-emerald-400">{compliance.sanctionsCheckStatus}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Identity Attestation Oracle:</span>
              <span className="text-slate-200">{compliance.accreditationIssuer}</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] leading-relaxed">
            ✓ Smart contracts automatically enforce eligibility criteria prior to every transfer or dividend distribution (ERC-3643 standard).
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-bold transition-all cursor-pointer"
          >
            Close Certificate
          </button>
        </div>

      </div>
    </div>
  );
};
