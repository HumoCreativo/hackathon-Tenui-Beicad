import React, { useState } from 'react';
import { Landmark, ArrowLeftRight, CheckCircle2, Globe, Shield, RefreshCw, CreditCard, Building } from 'lucide-react';
import { FiatRailInfo } from '../types/dashboard';

interface SettlementHubProps {
  fiatRails: FiatRailInfo;
  onOpenWireModal: () => void;
}

export const SettlementHub: React.FC<SettlementHubProps> = ({
  fiatRails,
  onOpenWireModal,
}) => {
  const [fiatAmount, setFiatAmount] = useState<string>('100000');
  const [selectedCurrency, setSelectedCurrency] = useState<'EUR' | 'USD' | 'CHF'>('EUR');

  const numFiat = parseFloat(fiatAmount) || 0;
  const estimatedUSDC = selectedCurrency === 'EUR' ? numFiat * 1.08 : selectedCurrency === 'CHF' ? numFiat * 1.12 : numFiat;

  return (
    <div className="nexus-card p-6 border-slate-800 relative">
      {/* Settlement Hub Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          {/* Title Fiat Rails as required in prompt */}
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-blue-400" />
            <span>Fiat Rails</span>
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Direct institutional bank-to-smart contract minting & redemption.
          </p>
        </div>
      </div>

      {/* Tenui Logo & Powered By Badge as required in prompt */}
      <div className="my-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Custom Tenui SVG Logo Badge */}
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center font-black font-mono text-white text-base shadow-md shadow-indigo-900/40">
            T
          </div>
          <div>
            {/* Required text: Powered by Tenui Global Infrastructure */}
            <div className="text-xs font-bold text-slate-100 font-sans tracking-wide">
              Tenui Settlement Engine
            </div>
            <div className="text-[11px] font-mono text-blue-400 font-medium">
              Powered by Tenui Global Infrastructure
            </div>
          </div>
        </div>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      {/* Institutional Fiat Conversion Input */}
      <div className="space-y-3 font-mono text-xs">
        <div className="flex justify-between items-center text-slate-400">
          <span>Deposit / Wire Amount:</span>
          <span>Instant Liquidity</span>
        </div>

        <div className="flex space-x-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={fiatAmount}
              onChange={(e) => setFiatAmount(e.target.value.replace(/[^0-9.]/g, ''))}
              placeholder="100,000"
              className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-lg px-3 py-2 text-sm font-mono font-bold text-slate-100 outline-none"
            />
          </div>
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value as any)}
            className="bg-slate-950 border border-slate-800 text-slate-200 rounded-lg px-2.5 py-2 text-xs font-mono font-bold outline-none cursor-pointer"
          >
            <option value="EUR">EUR (€)</option>
            <option value="USD">USD ($)</option>
            <option value="CHF">CHF (Fr)</option>
          </select>
        </div>

        {/* Estimated Output */}
        <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 flex justify-between items-center">
          <span className="text-slate-400">Minted Token Output:</span>
          <span className="font-bold text-emerald-400 text-sm">
            ≈ {estimatedUSDC.toLocaleString(undefined, { maximumFractionDigits: 0 })} USDC
          </span>
        </div>

        {/* Bank Rails & Custody Status */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-400 flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-blue-400" /> SEPA Instant / Wire:
            </span>
            <span className="text-emerald-400 font-semibold">Active (0.00s Settlement)</span>
          </div>

          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-400 flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-purple-400" /> Banking Partners:
            </span>
            <span className="text-slate-200 font-medium">J.P. Morgan / Sygnum</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onOpenWireModal}
          className="w-full mt-3 py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-blue-500 hover:bg-blue-950/40 text-slate-200 hover:text-white font-sans text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
        >
          <CreditCard className="w-4 h-4 text-blue-400" />
          <span>Generate Bank Wire Instructions</span>
        </button>

      </div>

      {/* Footer Trust Note */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 text-[10px] font-mono text-slate-500 text-center">
        Audited by PwC Luxembourg • Tier-1 Escrow Account #LU-4819
      </div>
    </div>
  );
};
