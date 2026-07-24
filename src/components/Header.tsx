import React, { useState } from 'react';
import { ShieldCheck, Zap, ExternalLink, Wallet, Globe } from 'lucide-react';
import { SmartAccountInfo, ComplianceCredential } from '../types/dashboard';

interface HeaderProps {
  smartAccount: SmartAccountInfo;
  compliance: ComplianceCredential;
  onOpenSmartAccountModal: () => void;
  onOpenComplianceModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  smartAccount,
  onOpenSmartAccountModal,
  onOpenComplianceModal,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Sleek "NEXUS" typographic logo */}
        <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center space-x-3">
            <img
              src="./nexus-logo.png"
              alt="NEXUS Logo"
              className="h-9 w-auto rounded-xl object-contain border border-emerald-500/40 shadow-lg shadow-emerald-950/50"
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-black text-2xl tracking-widest text-slate-100 uppercase">NEXUS</span>
                <span className="text-[10px] uppercase font-mono font-semibold tracking-wider px-1.5 py-0.5 rounded bg-blue-900/40 text-blue-300 border border-blue-800">
                  RWA Platform
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Beicad S.A. & Tenui Infrastructure</span>
              </p>
            </div>
          </div>
        </div>

        {/* Center: Environmental Alignment Badge */}
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-medium font-sans shadow-inner">
            <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Aligned with Uruguay + Circular Plan</span>
          </div>
        </div>

        {/* Right: Security Badge & Smart Account Dropdown */}
        <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
          
          {/* Glowing Security Badge ONCHAINID: Verified (ERC-3643) */}
          <button
            onClick={onOpenComplianceModal}
            className="group relative flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-emerald-500/40 hover:border-emerald-400 shadow-md transition-all cursor-pointer"
            title="ERC-3643 Institutional Compliance"
          >
            <div className="relative">
              <ShieldCheck className="w-4 h-4 text-emerald-400 transition-transform group-hover:scale-110" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
            </div>
            <div className="flex items-center space-x-1 text-xs font-mono">
              <span className="font-semibold text-slate-200">ONCHAINID:</span>
              <span className="font-bold text-emerald-400">Verified</span>
            </div>
            <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 transition-colors" />
          </button>

          {/* Wallet Dropdown: Smart Account Active */}
          <div className="relative">
            <button
              onClick={onOpenSmartAccountModal}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="flex items-center space-x-2.5 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/60 shadow-md transition-all cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-lg bg-blue-900/40 border border-blue-500/40 flex items-center justify-center">
                <Wallet className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-bold text-slate-100 font-sans">
                    Smart Account Active
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="text-[10px] text-blue-400 font-mono">
                  {smartAccount.balanceUSDC.toLocaleString()} USDC
                </div>
              </div>
            </button>

            {/* Tooltip: Zero Gas Fees: Transactions sponsored by NEXUS Paymaster (ERC-4337) */}
            {showTooltip && (
              <div className="absolute right-0 top-full mt-2 w-72 p-3 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl text-xs text-slate-200 z-50 animate-in fade-in duration-150">
                <div className="flex items-start space-x-2">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-100">Zero Gas Fees</p>
                    <p className="text-slate-300 text-[11px] mt-0.5 leading-relaxed">
                      Transactions sponsored by NEXUS Paymaster (ERC-4337)
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </header>
  );
};
