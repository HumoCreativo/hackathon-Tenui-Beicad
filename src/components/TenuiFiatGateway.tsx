import React, { useState } from 'react';
import { Landmark, ArrowDownLeft, ArrowUpRight, CreditCard, Clock } from 'lucide-react';
import { TRANSLATIONS, Language } from '../i18n/translations';
import { SmartAccountInfo } from '../types/dashboard';

interface TenuiFiatGatewayProps {
  lang: Language;
  smartAccount: SmartAccountInfo;
  onDepositSubmit: (amount: number) => void;
  onWithdrawSubmit: (amount: number) => void;
}

export const TenuiFiatGateway: React.FC<TenuiFiatGatewayProps> = ({
  lang,
  smartAccount,
  onDepositSubmit,
  onWithdrawSubmit,
}) => {
  const t = TRANSLATIONS[lang];
  const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw'>('deposit');
  const [depositAmount, setDepositAmount] = useState('50000');
  const [withdrawAmount, setWithdrawAmount] = useState('25000');
  const [selectedBank, setSelectedBank] = useState('J.P. Morgan Luxembourg S.A. (IBAN LU89...2938)');

  return (
    <div className="nexus-card p-6 border-blue-900/40 relative">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-blue-400" />
            <span>{t.financialHubTitle}</span>
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            {t.financialHubDesc}
          </p>
        </div>
      </div>

      {/* Two Prominent Tabs: "Deposit (On-Ramp)" & "Withdraw (Off-Ramp)" */}
      <div className="my-5 flex p-1 bg-slate-950 rounded-xl border border-slate-800 font-sans text-sm font-bold">
        <button
          onClick={() => setActiveTab('deposit')}
          className={`flex-1 py-3 rounded-lg transition-all flex items-center justify-center space-x-2 cursor-pointer ${
            activeTab === 'deposit'
              ? 'bg-blue-600 text-blue-50 shadow-md shadow-blue-600/30 font-extrabold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <ArrowDownLeft className="w-4 h-4 text-emerald-400" />
          <span>{t.tabDeposit}</span>
        </button>

        <button
          onClick={() => setActiveTab('withdraw')}
          className={`flex-1 py-3 rounded-lg transition-all flex items-center justify-center space-x-2 cursor-pointer ${
            activeTab === 'withdraw'
              ? 'bg-blue-600 text-blue-50 shadow-md shadow-blue-600/30 font-extrabold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <ArrowUpRight className="w-4 h-4 text-blue-300" />
          <span>{t.tabWithdraw}</span>
        </button>
      </div>

      {/* Tab 1: Deposit View */}
      {activeTab === 'deposit' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex justify-between items-center text-xs font-mono text-slate-300">
            <label>{t.depositInputLabel}</label>
            <span className="text-slate-400">Current Balance: <strong className="text-slate-100 font-bold">{smartAccount.balanceUSDC.toLocaleString()} USDC</strong></span>
          </div>

          <div className="relative">
            <input
              type="text"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value.replace(/[^0-9.]/g, ''))}
              placeholder="50,000"
              className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3.5 text-lg font-mono font-bold text-slate-100 outline-none pr-24"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-400 px-2 py-1 bg-slate-900 rounded border border-slate-800">
              USD ($)
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 font-mono text-xs">
            <div className="flex justify-between"><span className="text-slate-400">Minted Token Result:</span><span className="font-bold text-emerald-400">+{parseFloat(depositAmount || '0').toLocaleString()} USDC</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Tenui Settlement Engine:</span><span className="font-semibold text-blue-400">SEPA Instant / Wire</span></div>
          </div>

          {/* Primary Action Button: "Wire Transfer via Tenui -> Mints USDC" */}
          <button
            onClick={() => onDepositSubmit(parseFloat(depositAmount) || 0)}
            className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-blue-50 font-bold font-sans text-base transition-all flex items-center justify-center space-x-2.5 shadow-xl shadow-blue-600/30 active:scale-[0.99] cursor-pointer"
          >
            <CreditCard className="w-5 h-5 text-blue-100" />
            <span>{t.depositBtnText}</span>
          </button>
        </div>
      )}

      {/* Tab 2: Withdraw View */}
      {activeTab === 'withdraw' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex justify-between items-center text-xs font-mono text-slate-300">
            <label>{t.withdrawInputLabel}</label>
            <span className="text-slate-400">Available: <strong className="text-slate-100 font-bold">{smartAccount.balanceUSDC.toLocaleString()} USDC</strong></span>
          </div>

          <div className="relative">
            <input
              type="text"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value.replace(/[^0-9.]/g, ''))}
              placeholder="25,000"
              className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3.5 text-lg font-mono font-bold text-slate-100 outline-none pr-24"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-400 px-2 py-1 bg-slate-900 rounded border border-slate-800">
              USDC
            </span>
          </div>

          {/* Select linked bank account */}
          <div className="space-y-1 font-mono text-xs">
            <label className="text-slate-400">{t.selectBankLabel}</label>
            <select
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl p-3 font-mono text-xs font-bold outline-none cursor-pointer"
            >
              <option value="J.P. Morgan Luxembourg S.A. (IBAN LU89...2938)">J.P. Morgan Luxembourg S.A. (IBAN LU89...2938)</option>
              <option value="Sygnum Bank AG (CH93...8492)">Sygnum Bank AG (CH93...8492)</option>
              <option value="Payoneer Corporate Escrow Account (#48910)">Payoneer Corporate Escrow Account (#48910)</option>
            </select>
          </div>

          {/* Primary Action Button: "Withdraw Fiat via Tenui" */}
          <button
            onClick={() => onWithdrawSubmit(parseFloat(withdrawAmount) || 0)}
            className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-blue-50 font-bold font-sans text-base transition-all flex items-center justify-center space-x-2.5 shadow-xl shadow-blue-600/30 active:scale-[0.99] cursor-pointer"
          >
            <ArrowUpRight className="w-5 h-5 text-blue-100" />
            <span>{t.withdrawBtnText}</span>
          </button>

          {/* Brief Disclaimer: "Liquidated through Payoneer rails in 2-4 hours" */}
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center space-x-2">
            <Clock className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Disclaimer: {t.payoneerDisclaimer}.</span>
          </div>
        </div>
      )}

    </div>
  );
};
