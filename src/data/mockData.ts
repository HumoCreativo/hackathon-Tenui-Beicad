import { YieldPoint, TelemetryReading, ComplianceCredential, SmartAccountInfo, FiatRailInfo, AuditLogEntry } from '../types/dashboard';

export const INITIAL_YIELD_DATA: YieldPoint[] = [
  { month: 'Q1 2025', syngasRevenueUSDC: 850000, investorDividendUSDC: 301000, projectedYieldAPY: 13.4, cumulativePayoutUSDC: 301000 },
  { month: 'Q2 2025', syngasRevenueUSDC: 920000, investorDividendUSDC: 326000, projectedYieldAPY: 13.8, cumulativePayoutUSDC: 627000 },
  { month: 'Q3 2025', syngasRevenueUSDC: 980000, investorDividendUSDC: 348000, projectedYieldAPY: 14.1, cumulativePayoutUSDC: 975000 },
  { month: 'Q4 2025', syngasRevenueUSDC: 1050000, investorDividendUSDC: 373000, projectedYieldAPY: 14.2, cumulativePayoutUSDC: 1348000 },
  { month: 'Q1 2026', syngasRevenueUSDC: 1120000, investorDividendUSDC: 398000, projectedYieldAPY: 14.4, cumulativePayoutUSDC: 1746000 },
  { month: 'Q2 2026 (Est)', syngasRevenueUSDC: 1190000, investorDividendUSDC: 422000, projectedYieldAPY: 14.5, cumulativePayoutUSDC: 2168000 },
  { month: 'Q3 2026 (Est)', syngasRevenueUSDC: 1250000, investorDividendUSDC: 443000, projectedYieldAPY: 14.6, cumulativePayoutUSDC: 2611000 },
  { month: 'Q4 2026 (Est)', syngasRevenueUSDC: 1320000, investorDividendUSDC: 468000, projectedYieldAPY: 14.8, cumulativePayoutUSDC: 3079000 },
];

export const INITIAL_TELEMETRY: TelemetryReading = {
  plasmaTempC: 5240,
  dioxinEmissionsPct: 0.0,
  syngasOutputNm3h: 4890,
  wasteProcessedTonsDay: 125,
  co2OffsetTonsMonth: 8420,
  powerGeneratedMWh: 14.2,
  zkSnarkProofHash: '0x8f93a1c9e4210948b812f8832a104f7621c9a1038b762c99a01f4a90d8102bc9',
  lastVerifiedTimestamp: 'Block #19,482,019 (24 sec ago)'
};

export const MOCK_COMPLIANCE: ComplianceCredential = {
  onchainID: '0x3A9F...84E2 (ONCHAINID-DE-892110)',
  investorClass: 'Institutional Tier 1',
  jurisdiction: 'EU (Luxembourg / MiFID II Annex II)',
  mifidIIStatus: 'Compliant',
  erc3643ValidUntil: '2027-12-31',
  sanctionsCheckStatus: 'Passed - OFAC Clean',
  accreditationIssuer: 'Deloitte Compliance Oracle'
};

export const MOCK_SMART_ACCOUNT: SmartAccountInfo = {
  address: '0x71C84A92e59124419918237D9104A1F8293949A2',
  balanceUSDC: 250000,
  rwaTokensHeld: 150000,
  paymasterSponsorName: 'NEXUS Gasless Paymaster v4',
  paymasterPolicyId: 'POLICY_BEICAD_SERIES_A_PREFERRED',
  totalGasSavedUSDC: 1420.50,
  userOpsExecuted: 48
};

export const MOCK_FIAT_RAILS: FiatRailInfo = {
  provider: 'Tenui Global Infrastructure',
  partnerBanks: ['J.P. Morgan Luxembourg', 'Sygnum Bank AG', 'Circle Custody'],
  supportedCurrencies: ['EUR', 'USD', 'CHF', 'GBP'],
  instantSepaEnabled: true,
  swiftDirectWiring: true,
  conversionSpreadPct: 0.02,
  custodianTrust: 'Beicad Fideicomiso Serie A Trust Account'
};

export const INITIAL_AUDIT_LOGS: AuditLogEntry[] = [
  { id: '1', timestamp: '15:28:10', event: 'zk-SNARK Dioxin Verification Attestation Batch #4892', type: 'telemetry', txHash: '0x9a8f...39c1', status: 'Verified' },
  { id: '2', timestamp: '14:50:02', event: 'ERC-3643 Identity Re-certification Check Passed', type: 'compliance', txHash: '0x7b21...e042', status: 'Verified' },
  { id: '3', timestamp: '12:15:44', event: 'ERC-4337 UserOp: Paymaster Sponsored Yield Claim', type: 'erc4337', txHash: '0x1c4d...89ff', status: 'Confirmed' },
  { id: '4', timestamp: '09:02:19', event: 'Tenui SEPA Instant Settlement: €50,000 Minting', type: 'settlement', txHash: '0x4e88...a123', status: 'Confirmed' },
];
