import React, { useState, useEffect } from 'react';
import { X, Lock, Zap, CheckCircle2, Loader2, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { SmartAccountInfo } from '../../types/dashboard';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  smartAccount: SmartAccountInfo;
  onSuccess: (amount: number) => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  amount,
  smartAccount,
  onSuccess,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [txHash, setTxHash] = useState<string>('');

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      return;
    }

    // Step 1: ERC-3643 Compliance Verification (1.2s)
    const t1 = setTimeout(() => {
      setStep(2);
    }, 1200);

    // Step 2: ERC-4337 Paymaster Gas Sponsorship (1.2s)
    const t2 = setTimeout(() => {
      setStep(3);
    }, 2400);

    // Step 3: Bundler Execution & Onchain Finalization (1.5s)
    const t3 = setTimeout(() => {
      const generatedHash = '0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      setTxHash(generatedHash);
      setStep(4);
      onSuccess(amount);
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isOpen, amount]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="nexus-card w-full max-w-xl p-6 relative border-blue-600/50 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
              <Lock className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100">
                ERC-4337 Gasless Subscription
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Beicad DMP 5.000 AP Plasma Trust Series A
              </p>
            </div>
          </div>
          {step === 4 && (
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Modal Progress Content */}
        <div className="mt-6 space-y-4 font-mono text-xs">
          
          {/* Subscription Summary Box */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-slate-500 uppercase">Subscription Principal</div>
              <div className="text-xl font-black text-slate-100 font-mono">
                ${amount.toLocaleString()} USDC
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-slate-500 uppercase">Tokens Allocated</div>
              <div className="text-lg font-bold text-emerald-400 font-mono">
                +{amount.toLocaleString()} RWA-DMP
              </div>
            </div>
          </div>

          {/* Stepper Progress */}
          <div className="space-y-3 pt-2">
            
            {/* Step 1 */}
            <div className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
              step > 1 ? 'bg-slate-950 border-emerald-500/40 text-slate-200' :
              step === 1 ? 'bg-blue-950/40 border-blue-500/60 text-blue-300' : 'bg-slate-950/50 border-slate-800 text-slate-500'
            }`}>
              <div className="flex items-center space-x-3">
                {step > 1 ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : step === 1 ? (
                  <Loader2 className="w-4 h-4 text-blue-400 animate-spin shrink-0" />
                ) : (
                  <span className="w-4 h-4 rounded-full border border-slate-700 text-[10px] flex items-center justify-center">1</span>
                )}
                <span className="font-semibold">ERC-3643 ONCHAINID Compliance Validation</span>
              </div>
              <span className="text-[10px] font-mono font-bold">
                {step > 1 ? 'Passed' : step === 1 ? 'Verifying...' : 'Pending'}
              </span>
            </div>

            {/* Step 2 */}
            <div className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
              step > 2 ? 'bg-slate-950 border-emerald-500/40 text-slate-200' :
              step === 2 ? 'bg-blue-950/40 border-blue-500/60 text-blue-300' : 'bg-slate-950/50 border-slate-800 text-slate-500'
            }`}>
              <div className="flex items-center space-x-3">
                {step > 2 ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : step === 2 ? (
                  <Loader2 className="w-4 h-4 text-blue-400 animate-spin shrink-0" />
                ) : (
                  <span className="w-4 h-4 rounded-full border border-slate-700 text-[10px] flex items-center justify-center">2</span>
                )}
                <span className="font-semibold">ERC-4337 Paymaster Gas Sponsorship</span>
              </div>
              <span className="text-[10px] font-mono font-bold">
                {step > 2 ? 'Gas $0.00' : step === 2 ? 'Sponsoring...' : 'Pending'}
              </span>
            </div>

            {/* Step 3 & 4 */}
            <div className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
              step === 4 ? 'bg-slate-950 border-emerald-500/40 text-slate-200' :
              step === 3 ? 'bg-blue-950/40 border-blue-500/60 text-blue-300' : 'bg-slate-950/50 border-slate-800 text-slate-500'
            }`}>
              <div className="flex items-center space-x-3">
                {step === 4 ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : step === 3 ? (
                  <Loader2 className="w-4 h-4 text-blue-400 animate-spin shrink-0" />
                ) : (
                  <span className="w-4 h-4 rounded-full border border-slate-700 text-[10px] flex items-center justify-center">3</span>
                )}
                <span className="font-semibold">Polygon zkEVM Bundler Settlement</span>
              </div>
              <span className="text-[10px] font-mono font-bold">
                {step === 4 ? 'Confirmed' : step === 3 ? 'Bundling...' : 'Pending'}
              </span>
            </div>

          </div>

          {/* Success Screen */}
          {step === 4 && (
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/50 space-y-2 animate-in zoom-in-95 duration-200">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Subscription Finalized Successfully!</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Your investment of <strong>${amount.toLocaleString()} USDC</strong> has been allocated into Beicad DMP 5.000 AP Series A Trust.
              </p>
              <div className="pt-2 border-t border-emerald-900/60 flex justify-between items-center text-[10px] text-slate-400">
                <span>Transaction Hash:</span>
                <span className="text-emerald-400 font-mono">{txHash.substring(0, 20)}...</span>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          {step === 4 ? (
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-bold transition-all cursor-pointer shadow-lg shadow-emerald-600/30"
            >
              Done & Return to Portfolio
            </button>
          ) : (
            <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-400" />
              <span>Executing zero-gas UserOp on-chain...</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
