import React from 'react';
import { X, Zap, ShieldCheck, Cpu, Copy, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SmartAccountInfo } from '../../types/dashboard';

interface SmartAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  smartAccount: SmartAccountInfo;
}

export const SmartAccountModal: React.FC<SmartAccountModalProps> = ({
  isOpen,
  onClose,
  smartAccount,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="nexus-card w-full max-w-xl p-6 relative border-blue-900/50 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900/30 border border-blue-500/40 flex items-center justify-center">
              <Zap className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <span>ERC-4337 Smart Account</span>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  NEXUS Paymaster
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Zero gas fee account abstraction infrastructure.
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

        {/* Modal Body */}
        <div className="mt-5 space-y-4 font-mono text-xs">
          
          {/* Account Address Box */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] text-slate-500 uppercase mb-1">Contract Address (Safe / ERC-4337)</div>
            <div className="flex items-center justify-between text-slate-200 font-bold text-xs break-all">
              <span>{smartAccount.address}</span>
              <button
                onClick={() => navigator.clipboard.writeText(smartAccount.address)}
                className="ml-2 p-1 hover:text-blue-400 transition-colors shrink-0"
                title="Copy Address"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Paymaster Policy Card */}
          <div className="p-4 rounded-xl bg-slate-950 border border-blue-900/40 space-y-3">
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-400">Paymaster Sponsor:</span>
              <span className="font-bold text-blue-400">{smartAccount.paymasterSponsorName}</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-400">Sponsorship Policy:</span>
              <span className="font-semibold text-slate-200">Zero Gas for RWA Series A</span>
            </div>
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-400">UserOperations Executed:</span>
              <span className="font-bold text-emerald-400">{smartAccount.userOpsExecuted} UserOps</span>
            </div>
            <div className="flex items-center justify-between text-slate-300 pt-2 border-t border-slate-800">
              <span className="text-slate-400">Total Gas Subsidized:</span>
              <span className="font-extrabold text-emerald-400 text-sm">${smartAccount.totalGasSavedUSDC.toFixed(2)} USDC</span>
            </div>
          </div>

          {/* Infrastructure Specs */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-500">Bundler Node</div>
              <div className="text-slate-200 font-semibold text-xs mt-0.5 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Alchemy Bundler
              </div>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-500">Signature Module</div>
              <div className="text-slate-200 font-semibold text-xs mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-blue-400" /> WebAuthn / Passkey
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-bold transition-all cursor-pointer"
          >
            Close Dialog
          </button>
        </div>

      </div>
    </div>
  );
};
