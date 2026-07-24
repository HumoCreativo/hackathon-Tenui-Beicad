import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroAssetCard } from './components/HeroAssetCard';
import { TenuiFiatGateway } from './components/TenuiFiatGateway';
import { CarbonCreditWallet } from './components/CarbonCreditWallet';
import { DualYieldSimulator } from './components/DualYieldSimulator';
import { TelemetryFooter } from './components/TelemetryFooter';

import { SmartAccountModal } from './components/modals/SmartAccountModal';
import { ComplianceModal } from './components/modals/ComplianceModal';
import { ZkProofModal } from './components/modals/ZkProofModal';
import { BurnOffsetModal } from './components/modals/BurnOffsetModal';

import { MOCK_SMART_ACCOUNT, MOCK_COMPLIANCE, INITIAL_TELEMETRY } from './data/mockData';
import { SmartAccountInfo } from './types/dashboard';
import { Language, TRANSLATIONS } from './i18n/translations';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const t = TRANSLATIONS[lang];

  const [smartAccount, setSmartAccount] = useState<SmartAccountInfo>({
    ...MOCK_SMART_ACCOUNT,
    balanceUSDC: 150000, // Balance: 150,000 USDC
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
    <div className="min-h-screen bg-slate-950 text-slate-100 bg-grid-pattern flex flex-col justify-between">
      <div>
        {/* 1. Global Header */}
        <Header
          smartAccount={smartAccount}
          compliance={MOCK_COMPLIANCE}
          onOpenSmartAccountModal={() => setIsSmartAccountOpen(true)}
          onOpenComplianceModal={() => setIsComplianceOpen(true)}
        />

        {/* Main Container Layout */}
        <main className="max-w-[1600px] w-full mx-auto px-4 lg:px-8 py-6 space-y-6">
          {/* Top Hero Card */}
          <HeroAssetCard />

          {/* 50% Left Column (Financial Hub + Carbon Credit Wallet), 50% Right Column (Dual Dynamic Yield Simulator) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column (50% - lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-6">
              <TenuiFiatGateway
                lang={lang}
                smartAccount={smartAccount}
                onDepositSubmit={handleDepositSubmit}
                onWithdrawSubmit={handleWithdrawSubmit}
              />

              <CarbonCreditWallet
                lang={lang}
                onBurnOffset={() => setIsBurnOffsetOpen(true)}
              />
            </div>

            {/* Right Column (50% - lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-6">
              <DualYieldSimulator lang={lang} />
            </div>

          </div>
        </main>
      </div>

      {/* Telemetry Footer */}
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
