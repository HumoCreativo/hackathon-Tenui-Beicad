import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Leaf, TrendingUp, Landmark, ArrowUpRight, ArrowDownLeft, ShieldCheck, Info } from 'lucide-react';
import { SmartAccountInfo } from '../types/dashboard';
import { Language } from '../i18n/translations';

interface FinancialHubProps {
  lang: Language;
  smartAccount: SmartAccountInfo;
  onDepositSubmit: (amount: number) => void;
  onWithdrawSubmit: (amount: number) => void;
}

export const FinancialHub: React.FC<FinancialHubProps> = ({
  lang,
  smartAccount,
  onDepositSubmit,
  onWithdrawSubmit,
}) => {
  const [fiatAmount, setFiatAmount] = useState<string>('50000');
  const [notification, setNotification] = useState<string | null>(null);
  const [selectedHorizon, setSelectedHorizon] = useState<number>(3); // 3-year projection

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(fiatAmount);
    if (!isNaN(val) && val > 0) {
      onDepositSubmit(val);
      setNotification(`Successfully processed EUR/USD deposit of $${val.toLocaleString()} via Tenui Fiat Gateway.`);
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const handleWithdraw = () => {
    const val = parseFloat(fiatAmount);
    if (!isNaN(val) && val > 0) {
      onWithdrawSubmit(val);
      setNotification(`Requested dividend payout of $${val.toLocaleString()} USDC to linked bank account via Tenui.`);
      setTimeout(() => setNotification(null), 5000);
    }
  };

  // 3-Year Projection Chart points (CAPEX Net Cost vs Cumulative Carbon Credit Sales)
  const chartPoints = [
    { year: 'Year 0', capex: 100, carbonRevenue: 0, netInvestment: 100 },
    { year: 'Year 1', capex: 82, carbonRevenue: 28, netInvestment: 54 },
    { year: 'Year 2', capex: 65, carbonRevenue: 58, netInvestment: 7 }, // Lines cross around Year 2.2
    { year: 'Year 3', capex: 48, carbonRevenue: 92, netInvestment: -44 }, // Carbon credit sales offset CAPEX
  ];

  return (
    <div className="space-y-6">
      
      {/* 1. Top Section: TVL & Balances */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              RWA Capital Reserve
            </span>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Total Value Locked (TVL)</div>
            <div className="text-3xl lg:text-4xl font-extrabold text-slate-100 font-mono tracking-tight mt-1">
              $45,000,000 <span className="text-sm font-semibold text-slate-400">USDC</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            <Landmark className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono text-slate-300">Audited Custody: Tenui Bank Escrow</span>
          </div>
        </div>

        {/* Split Balances */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          
          {/* Blue Dividend Balance */}
          <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-300 font-medium">Dividend Balance</div>
              <div className="text-2xl font-black font-mono text-blue-400 mt-1">
                15,000 <span className="text-xs font-normal">USDC</span>
              </div>
              <div className="text-[10px] text-blue-300/70 font-mono mt-0.5">Quarterly Yield Available</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-900/50 border border-blue-500/40 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-400" />
            </div>
          </div>

          {/* Emerald Active Carbon Credits */}
          <div className="p-4 rounded-xl bg-emerald-900/30 border border-emerald-800/60 flex items-center justify-between">
            <div>
              <div className="text-xs text-emerald-300 font-medium">Active Carbon Credits</div>
              <div className="text-2xl font-black font-mono text-emerald-400 mt-1">
                450 <span className="text-xs font-normal">ESG Tokens</span>
              </div>
              <div className="text-[10px] text-emerald-300/70 font-mono mt-0.5">Certified CO₂ Avoidance</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-emerald-400" />
            </div>
          </div>

        </div>
      </div>

      {/* 2. Middle Section: Carbon Credit Monetization Engine */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-emerald-950 border border-emerald-500/40">
              <Leaf className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100 tracking-tight">
                Carbon Credit Monetization Engine
              </h2>
              <p className="text-xs text-slate-400 font-mono">ESG Value Generation & Net CAPEX Amortization</p>
            </div>
          </div>

          <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-mono font-bold uppercase">
            3-Year Forecast
          </span>
        </div>

        {/* Contextual Text as explicitly specified */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
          "La solución BEICAD, al integrar plasma de vapor y microondas, reduce significativamente las emisiones contaminantes asociadas a la conversión de residuos, posicionándose como una tecnología de descontaminación altamente sostenible, lo que permite la generación de bonos de carbono."
        </div>

        {/* Projection Chart Container */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
            <p className="text-slate-400">
              el beneficio económico derivado de la emisión y comercialización de estos créditos de carbono contribuirá a disminuir efectivamente el costo neto de la inversión.
            </p>
            <div className="flex items-center space-x-3 shrink-0">
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-0.5 bg-blue-500 rounded"></span>
                <span className="text-[10px] text-slate-400">Net CAPEX</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-0.5 bg-emerald-400 rounded"></span>
                <span className="text-[10px] text-emerald-400">Carbon Credit Revenue</span>
              </div>
            </div>
          </div>

          {/* Interactive Framer-Motion Chart Visualizer */}
          <div className="h-44 w-full relative pt-2">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="emeraldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="blueCapGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Area fills */}
              <path d="M 0,110 L 130,75 L 260,35 L 400,10 L 400,110 Z" fill="url(#emeraldGrad)" />
              <path d="M 0,10 L 130,45 L 260,85 L 400,110 L 400,110 Z" fill="url(#blueCapGrad)" />

              {/* Lines */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M 0,10 L 130,45 L 260,85 L 400,110"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M 0,110 L 130,75 L 260,35 L 400,10"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray="5 3"
              />

              {/* Crossover Intersection Point at Year 2.2 */}
              <circle cx="210" cy="55" r="6" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
            </svg>

            {/* Labels on Chart */}
            <div className="absolute top-[38%] left-[48%] -translate-y-1/2 bg-emerald-950/90 border border-emerald-500/50 px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 font-bold shadow-lg">
              ★ CAPEX Offset Point (Year 2.2)
            </div>

            {/* X Axis Labels */}
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-2">
              <span>Year 0 (Initial CAPEX)</span>
              <span>Year 1</span>
              <span>Year 2 (Break-even)</span>
              <span>Year 3 (Net Positive)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Section: Tenui Global Settlement */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-blue-950 border border-blue-500/40">
              <Landmark className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100 tracking-tight">
                Tenui Global Settlement
              </h2>
              <p className="text-xs text-slate-400 font-mono">Institutional Fiat On/Off Ramp & Dividend Payouts</p>
            </div>
          </div>

          <span className="px-2.5 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800 text-[10px] font-mono font-bold uppercase">
            SEPA & SWIFT Ready
          </span>
        </div>

        {/* Success/Action Notification */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center justify-between"
            >
              <span>{notification}</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleDeposit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Settlement Amount (EUR / USD)
            </label>
            <div className="relative">
              <input
                type="number"
                value={fiatAmount}
                onChange={(e) => setFiatAmount(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 font-mono font-bold text-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="50000"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">
                USDC Equivalent
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-blue-50 py-3.5 px-4 rounded-xl font-bold shadow-lg shadow-blue-950/50 flex items-center justify-center space-x-2 transition-all cursor-pointer group"
            >
              <ArrowDownLeft className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform" />
              <span>Deposit Fiat (EUR/USD) -&gt; Mints USDC</span>
            </button>

            <button
              type="button"
              onClick={handleWithdraw}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-100 py-3.5 px-4 rounded-xl font-semibold border border-slate-700 shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer group"
            >
              <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Withdraw Dividends to Bank</span>
            </button>
          </div>

          {/* Helper Text as explicitly requested */}
          <div className="flex items-center justify-center space-x-2 pt-2 text-xs text-slate-400 font-mono">
            <Info className="w-3.5 h-3.5 text-blue-400" />
            <span>Institutional payments and KYC compliance automated by Tenui</span>
          </div>
        </form>
      </div>

    </div>
  );
};
