import React, { useState } from 'react';
import { ShieldCheck, Zap, Info, ExternalLink, Cpu, Wallet, Layers } from 'lucide-react';
import { SmartAccountInfo, ComplianceCredential } from '../types/dashboard';

interface HeaderProps {
  smartAccount: SmartAccountInfo;
  compliance: ComplianceCredential;
  onOpenSmartAccountModal: () => void;
  onOpenComplianceModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  smartAccount,
  compliance,
  onOpenSmartAccountModal,
  onOpenComplianceModal,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Official NEXUS Brand Logo & Network Status */}
        <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <img
                src="./nexus-logo.png"
                alt="NEXUS Brand Logo"
                className="h-10 w-auto rounded-xl object-contain border border-emerald-500/40 shadow-lg shadow-emerald-950/50 hover:border-emerald-400 transition-all"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-black text-2xl tracking-widest text-slate-100 uppercase">NEXUS</span>
                <span className="text-[10px] uppercase font-mono font-semibold tracking-wider px-1.5 py-0.5 rounded bg-blue-900/40 text-blue-300 border border-blue-800">
                  RWA Engine
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Polygon zkEVM</span>
                <span className="text-slate-600">|</span>
                <span>Beicad Trust #4801</span>
              </p>
            </div>
          </div>
        </div>

        {/* Center: Glowing Security Badge ONCHAINID: Verified (MiFID II Compliant) */}
        <div className="flex items-center justify-center">
          <button
            onClick={onOpenComplianceModal}
            className="group relative flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 hover:border-emerald-400/60 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
            title="Click to view MiFID II & ERC-3643 ONCHAINID Certificate"
          >
            <div className="relative">
              <ShieldCheck className="w-4 h-4 text-emerald-400 transition-transform group-hover:scale-110" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-emerald-glow" />
            </div>
            <div className="flex items-center space-x-1.5 text-xs font-mono">
              <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                ONCHAINID:
              </span>
              <span className="font-bold text-emerald-400">
                Verified
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 font-normal">
                (MiFID II Compliant)
              </span>
            </div>
            <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 transition-colors" />
          </button>
        </div>

        {/* Right: ERC-4337 Smart Account Component */}
        <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
          <div className="relative">
            <button
              onClick={onOpenSmartAccountModal}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="flex items-center space-x-3 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all cursor-pointer group shadow-md"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-900/30 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-800/40 transition-colors">
                <Wallet className="w-3.5 h-3.5 text-blue-400" />
              </div>

              <div className="text-left">
                <div className="flex items-center space-x-1.5">
                  <span className="text-[10px] font-mono font-medium text-slate-400 uppercase tracking-wider">
                    Smart Account
                  </span>
                  <span className="text-[9px] font-mono font-semibold px-1 rounded bg-blue-950 text-blue-400 border border-blue-800">
                    ERC-4337
                  </span>
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-xs text-slate-400 font-mono">Balance:</span>
                  <span className="text-sm font-bold font-mono text-slate-100 tracking-tight">
                    {smartAccount.balanceUSDC.toLocaleString()}
                  </span>
                  <span className="text-[11px] font-mono text-blue-400 font-semibold">USDC</span>
                </div>
              </div>

              <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse ml-1" />
            </button>

            {/* Zero gas fees Tooltip */}
            {showTooltip && (
              <div className="absolute right-0 top-full mt-2 w-80 p-3.5 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl text-xs text-slate-200 z-50 animate-in fade-in duration-150">
                <div className="flex items-start space-x-2.5">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-100 text-xs">ERC-4337 Sponsored Account</p>
                    <p className="text-slate-300 mt-1 text-[11px] leading-relaxed">
                      Zero gas fees via Paymaster.
                    </p>
                    <div className="mt-2 pt-2 border-t border-slate-800 flex justify-between text-[10px] font-mono text-slate-400">
                      <span>Total Gas Saved:</span>
                      <span className="text-emerald-400 font-bold">${smartAccount.totalGasSavedUSDC.toFixed(2)} USDC</span>
                    </div>
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
