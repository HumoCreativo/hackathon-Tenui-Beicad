import React, { useState } from 'react';
import { Lock, Zap, CheckCircle2, AlertCircle, ArrowRight, Shield, ShieldCheck, DollarSign } from 'lucide-react';
import { SmartAccountInfo, ComplianceCredential } from '../types/dashboard';

interface ActionPanelProps {
  smartAccount: SmartAccountInfo;
  compliance: ComplianceCredential;
  onSubscribeSubmit: (amount: number) => void;
}

export const ActionPanel: React.FC<ActionPanelProps> = ({
  smartAccount,
  compliance,
  onSubscribeSubmit,
}) => {
  const [usdcAmount, setUsdcAmount] = useState<string>('50000');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const numericAmount = parseFloat(usdcAmount) || 0;
  const targetAPY = 0.142; // 14.2% Net
  const projectedAnnualDividend = numericAmount * targetAPY;
  const tokenAllocation = numericAmount; // 1 USDC = 1 RWA-DMP Series A Token

  const handlePreset = (pct: number) => {
    const calculated = (smartAccount.balanceUSDC * pct).toFixed(0);
    setUsdcAmount(calculated);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9.]/g, '');
    setUsdcAmount(val);
  };

  const isValidAmount = numericAmount >= 1000 && numericAmount <= smartAccount.balanceUSDC;

  return (
    <div className="nexus-card p-6 border-blue-900/40 relative">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <span>Primary Subscription Hub</span>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
              ERC-3643 Standard
            </span>
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Direct minting into ERC-4337 Smart Account with instant identity compliance validation.
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        
        {/* Input Label & Balance */}
        <div className="flex items-center justify-between text-xs font-mono">
          <label className="text-slate-300 font-medium flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5 text-blue-400" /> USDC Investment Amount
          </label>
          <span className="text-slate-400">
            Available: <strong className="text-slate-200 font-bold">{smartAccount.balanceUSDC.toLocaleString()} USDC</strong>
          </span>
        </div>

        {/* Amount Input with Presets */}
        <div className="relative">
          <input
            type="text"
            value={usdcAmount}
            onChange={handleInputChange}
            placeholder="Enter USDC amount (e.g. 50,000)"
            className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3.5 text-lg font-mono font-bold text-slate-100 placeholder-slate-600 outline-none transition-all pr-28"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-1">
            <span className="text-xs font-mono font-bold text-slate-400 px-2 py-1 bg-slate-900 rounded border border-slate-800">
              USDC
            </span>
          </div>
        </div>

        {/* Quick Percent Presets */}
        <div className="grid grid-cols-4 gap-2 font-mono text-xs">
          {[0.25, 0.50, 0.75, 1.0].map((pct) => (
            <button
              key={pct}
              type="button"
              onClick={() => handlePreset(pct)}
              className="py-1.5 px-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all font-semibold"
            >
              {pct === 1.0 ? 'MAX' : `${pct * 100}%`}
            </button>
          ))}
        </div>

        {/* Live Return Estimation */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5 font-mono text-xs">
          <div className="flex justify-between items-center text-slate-300">
            <span className="text-slate-400">Allocated Token Tokens:</span>
            <span className="font-bold text-slate-100">{tokenAllocation.toLocaleString()} RWA-DMP</span>
          </div>
          <div className="flex justify-between items-center text-slate-300">
            <span className="text-slate-400">Est. Net Annual Return (14.2%):</span>
            <span className="font-bold text-emerald-400">+${projectedAnnualDividend.toLocaleString(undefined, { maximumFractionDigits: 2 })} USDC/yr</span>
          </div>
          <div className="flex justify-between items-center text-slate-300">
            <span className="text-slate-400 flex items-center gap-1">
              <Zap className="w-3 h-3 text-emerald-400" /> Gas Fee (ERC-4337):
            </span>
            <span className="font-semibold text-emerald-400">$0.00 (Sponsored by NEXUS)</span>
          </div>
          <div className="pt-2 border-t border-slate-800/80 flex justify-between items-center text-[11px]">
            <span className="text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> ERC-3643 Transfer Policy:
            </span>
            <span className="text-blue-400 font-semibold">ONCHAINID Verified</span>
          </div>
        </div>

        {/* Prominent Transaction Button as required in Prompt */}
        <button
          onClick={() => onSubscribeSubmit(numericAmount)}
          disabled={!isValidAmount}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-full py-4 px-6 rounded-xl font-bold font-sans text-base transition-all flex items-center justify-center space-x-2.5 shadow-xl cursor-pointer ${
            isValidAmount
              ? 'bg-blue-600 hover:bg-blue-500 text-blue-50 shadow-blue-600/25 active:scale-[0.99] border border-blue-400/30'
              : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
          }`}
        >
          {/* Lock icon to denote ERC-3643 compliance validation as requested */}
          <Lock className="w-4 h-4 text-blue-100 shrink-0" />
          <span>Subscribe RWA Participation</span>
          <ArrowRight className={`w-4 h-4 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
        </button>

        {/* Compliance Footer Disclaimer */}
        <p className="text-[11px] font-mono text-slate-500 text-center leading-relaxed">
          🔒 Validation via ERC-3643 Compliance Registry. Smart contract execution sponsored by NEXUS Paymaster.
        </p>

      </div>
    </div>
  );
};
