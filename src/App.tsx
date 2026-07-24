import React, { useState } from 'react';
import { Header } from './components/Header';
import { TelemetryCard } from './components/TelemetryCard';
import { FinancialHub } from './components/FinancialHub';
import { TelemetryFooter } from './components/TelemetryFooter';

import { SmartAccountModal } from './components/modals/SmartAccountModal';
import { ComplianceModal } from './components/modals/ComplianceModal';
import { ZkProofModal } from './components/modals/ZkProofModal';
import { BurnOffsetModal } from './components/modals/BurnOffsetModal';

import { MOCK_SMART_ACCOUNT, MOCK_COMPLIANCE, INITIAL_TELEMETRY } from './data/mockData';
import { SmartAccountInfo } from './types/dashboard';
import { Language } from './i18n/translations';

export const App: React.FC = () => {
  const [lang] = useState<Language>('es');

  const [smartAccount, setSmartAccount] = useState<SmartAccountInfo>({
    ...MOCK_SMART_ACCOUNT,
    balanceUSDC: 150000,
  });

  // Modal Visibility States
  const [isSmartAccountOpen, setIsSmartAccountOpen] = useState(false);
  const [isComplianceOpen, setIsComplianceOpen] = useState(false);
  const [isZkProofOpen, setIsZkProofOpen] = useState(false);
  const [isBurnOffsetOpen, setIsBurnOffsetOpen] = useState(false);

  const handleDepositSubmit = (amount: number) => {
    setSmartAccount((prev) => ({
      ...prev,
      balanceUSDC: prev.balanceUSDC + amount,
    }));
  };

  const handleWithdrawSubmit = (amount: number) => {
    setSmartAccount((prev) => ({
      ...prev,
      balanceUSDC: Math.max(0, prev.balanceUSDC - amount),
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <div>
        {/* 1. Global Top Navigation */}
        <Header
          smartAccount={smartAccount}
          compliance={MOCK_COMPLIANCE}
          onOpenSmartAccountModal={() => setIsSmartAccountOpen(true)}
          onOpenComplianceModal={() => setIsComplianceOpen(true)}
        />

        {/* Main Grid Layout System */}
        <main className="max-w-[1600px] w-full mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* 2. Left Column: Asset Telemetry & RWA Data (40% width -> lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6">
              <TelemetryCard
                telemetry={INITIAL_TELEMETRY}
                onOpenZkProofModal={() => setIsZkProofOpen(true)}
              />
            </div>

            {/* 3. Center/Right Column: Financial Hub & Dual Yield Simulator (60% width -> lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              <FinancialHub
                lang={lang}
                smartAccount={smartAccount}
                onDepositSubmit={handleDepositSubmit}
                onWithdrawSubmit={handleWithdrawSubmit}
              />
            </div>

          </div>
        </main>
      </div>

      {/* Institutional Telemetry Footer */}
      <TelemetryFooter
        lang={lang}
        onOpenZkProofModal={() => setIsZkProofOpen(true)}
      />

      {/* Interactive Modals */}
      <SmartAccountModal
        isOpen={isSmartAccountOpen}
        onClose={() => setIsSmartAccountOpen(false)}
        smartAccount={smartAccount}
      />

      <ComplianceModal
        isOpen={isComplianceOpen}
        onClose={() => setIsComplianceOpen(false)}
        compliance={MOCK_COMPLIANCE}
      />

      <ZkProofModal
        isOpen={isZkProofOpen}
        onClose={() => setIsZkProofOpen(false)}
        telemetry={INITIAL_TELEMETRY}
      />

      <BurnOffsetModal
        lang={lang}
        isOpen={isBurnOffsetOpen}
        onClose={() => setIsBurnOffsetOpen(false)}
      />
    </div>
  );
};

export default App;
