export interface YieldPoint {
  month: string;
  syngasRevenueUSDC: number;
  investorDividendUSDC: number;
  projectedYieldAPY: number;
  cumulativePayoutUSDC: number;
}

export interface TelemetryReading {
  plasmaTempC: number;
  dioxinEmissionsPct: number;
  syngasOutputNm3h: number;
  wasteProcessedTonsDay: number;
  co2OffsetTonsMonth: number;
  powerGeneratedMWh: number;
  zkSnarkProofHash: string;
  lastVerifiedTimestamp: string;
}

export interface ComplianceCredential {
  onchainID: string;
  investorClass: 'Institutional Tier 1' | 'QIB' | 'Accredited Entity';
  jurisdiction: string;
  mifidIIStatus: 'Compliant' | 'Pending Review';
  erc3643ValidUntil: string;
  sanctionsCheckStatus: 'Passed - OFAC Clean';
  accreditationIssuer: 'Deloitte Compliance Oracle';
}

export interface SmartAccountInfo {
  address: string;
  balanceUSDC: number;
  rwaTokensHeld: number;
  paymasterSponsorName: string;
  paymasterPolicyId: string;
  totalGasSavedUSDC: number;
  userOpsExecuted: number;
}

export interface FiatRailInfo {
  provider: string;
  partnerBanks: string[];
  supportedCurrencies: string[];
  instantSepaEnabled: boolean;
  swiftDirectWiring: boolean;
  conversionSpreadPct: number;
  custodianTrust: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  event: string;
  type: 'compliance' | 'telemetry' | 'settlement' | 'erc4337';
  txHash: string;
  status: 'Verified' | 'Confirmed';
}
