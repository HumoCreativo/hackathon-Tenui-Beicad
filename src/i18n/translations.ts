export type Language = 'es' | 'en';

export interface TranslationKeys {
  langName: string;
  network: string;
  onchainid: string;
  verified: string;
  mifid: string;
  smartAccount: string;
  balanceLabel: string;
  hardBalance: string;
  gaslessTooltipTitle: string;
  gaslessTooltipDesc: string;
  totalGasSaved: string;

  heroBadgeTrust: string;
  heroTitle: string;
  heroSubtitle: string;
  targetApy: string;
  sponsor: string;
  plantCap: string;
  valuation: string;
  distribution: string;
  offtakeActive: string;
  escrowCustody: string;

  // Financial Yield (USDC) & Chart
  financialYieldTitle: string;
  chartTitle: string;
  chartDesc: string;
  syngasIndex: string;
  plantUptime: string;
  grossVsNet: string;
  estQuarterlyDiv: string;
  effectiveApy: string;
  contractRail: string;

  // Subscription Panel
  subHubTitle: string;
  subHubDesc: string;
  investmentAmount: string;
  available: string;
  tokensAllocated: string;
  estAnnualReturn: string;
  gasFeeLabel: string;
  gasFree: string;
  subscribeBtn: string;
  subDisclaimer: string;

  // Financial Hub & Tenui Gateway
  financialHubTitle: string;
  financialHubDesc: string;
  tabDeposit: string;
  tabWithdraw: string;
  depositInputLabel: string;
  depositBtnText: string;
  withdrawInputLabel: string;
  selectBankLabel: string;
  withdrawBtnText: string;
  payoneerDisclaimer: string;

  // Carbon Credits Panel & Wallet
  envYieldTitle: string;
  unclaimedCreditsTitle: string;
  unclaimedCreditsCount: string;
  creditsValuation: string;
  timeDecayWarningTitle: string;
  timeDecayWarningMsg: string;
  timeDecayDesc: string;
  timeRemainingLabel: string;
  burnForOffsetBtn: string;
  tradeOnSecondaryBtn: string;
  carbonWalletTitle: string;
  carbonWalletDesc: string;

  // Dynamic Yield Simulators
  simulatorTitle: string;
  simulatorDesc: string;
  sliderLabel: string;
  projectedApyLabel: string;
  projectedApyUsdc: string;
  estCarbonGenerated: string;
  estCarbonGeneratedCo2t: string;
  estCumulativePayout: string;

  // Telemetry & Footer
  telemetryTitle: string;
  telemetryDesc: string;
  plasmaTemp: string;
  plasmaDesc: string;
  envSafety: string;
  dioxinEmissions: string;
  zeroToxins: string;
  syngasFlow: string;
  wasteDiverted: string;
  co2Offset: string;
  zkSnarkFooter: string;
  telemetryHeader: string;
  telemetryFooterLine: string;

  // Fiat Rails
  fiatRailsTitle: string;
  fiatRailsDesc: string;
  tenuiEngine: string;
  poweredByTenui: string;
  sepaLabel: string;
  instantMinting: string;
  mintedOutput: string;
  generateWireBtn: string;

  // Audit Log
  auditTitle: string;
  immutableLedger: string;
  auditDesc: string;

  // Common Modal Buttons
  closeBtn: string;
  closeCert: string;
  doneBtn: string;
}

export const TRANSLATIONS: Record<Language, TranslationKeys> = {
  es: {
    langName: 'Español',
    network: 'Polygon zkEVM Mainnet',
    onchainid: 'ONCHAINID:',
    verified: 'Verified',
    mifid: '(MiFID II Compliant)',
    smartAccount: 'Smart Account',
    balanceLabel: 'Balance:',
    hardBalance: '150,000 USDC',
    gaslessTooltipTitle: 'Cuenta ERC-4337 Patrocinada',
    gaslessTooltipDesc: 'Zero gas fees via Paymaster.',
    totalGasSaved: 'Gas Total Ahorrado:',

    heroBadgeTrust: 'Fideicomiso Verificado ERC-3643',
    heroTitle: 'Reactor de Plasma DMP 5.000 AP - Fideicomiso Serie A',
    heroSubtitle: 'Desintegración molecular plasmática. Cero pasivos ambientales.',
    targetApy: 'Rendimiento Net Objetivo',
    sponsor: 'Entidad Patrocinadora',
    plantCap: 'Capacidad de Planta',
    valuation: 'Valuación de Serie',
    distribution: 'Riel de Distribución',
    offtakeActive: 'Acuerdo de Compra Syngas Activo',
    escrowCustody: 'Custodia Bancaria Escrow (Tenui Global)',

    financialYieldTitle: 'Rendimiento Financiero (USDC)',
    chartTitle: 'Proyección de Dividendos por Comercialización de Syngas',
    chartDesc: 'Dividendos trimestrales en USDC respaldados por contratos industriales de compra de syngas.',
    syngasIndex: 'Índice de Mercado Syngas',
    plantUptime: 'Disponibilidad de Planta',
    grossVsNet: 'Ventas Brutas vs Distribuciones USDC',
    estQuarterlyDiv: 'Dividendo Trimestral Est.',
    effectiveApy: 'Rendimiento Efectivo',
    contractRail: 'Riel Smart Contract',

    subHubTitle: 'Centro de Suscripción RWA',
    subHubDesc: 'Emisión directa en Smart Account ERC-4337 con validación de identidad ERC-3643.',
    investmentAmount: 'Monto de Inversión USDC:',
    available: 'Saldo Disponible:',
    tokensAllocated: 'Tokens Serie A Asignados:',
    estAnnualReturn: 'Retorno Anual Estimado (14.2%):',
    gasFeeLabel: 'Comisión de Gas (ERC-4337):',
    gasFree: '$0.00 (Patrocinado por NEXUS Paymaster)',
    subscribeBtn: 'Subscribe RWA Participation',
    subDisclaimer: '🔒 Validación vía Registro ERC-3643. Transacciones patrocinadas por NEXUS Paymaster.',

    financialHubTitle: 'Billetera y Pasarela Fiat Tenui',
    financialHubDesc: 'Depósitos y retiros directos entre tu banco e infraestructura de smart contract.',
    tabDeposit: 'Deposit (On-Ramp)',
    tabWithdraw: 'Withdraw (Off-Ramp)',
    depositInputLabel: 'Monto a Depositar (USD):',
    depositBtnText: 'Wire Transfer via Tenui -> Mints USDC',
    withdrawInputLabel: 'Monto a Retirar (USDC):',
    selectBankLabel: 'Cuenta Bancaria Vinculada:',
    withdrawBtnText: 'Withdraw Fiat via Tenui',
    payoneerDisclaimer: 'Liquidated through Payoneer rails in 2-4 hours',

    envYieldTitle: 'Rendimiento Ambiental (Créditos de Carbono)',
    unclaimedCreditsTitle: 'Créditos de Carbono Sin Reclamar',
    unclaimedCreditsCount: '450 NCT-CARBON Tokens',
    creditsValuation: 'Valor de Mercado Estimado: $13,500 USDC ($30 / Crédito)',
    timeDecayWarningTitle: '¡Advertencia de Desintegración Temporal!',
    timeDecayWarningMsg: 'Warning: 450 Carbon Credits expire in 12 Days (Time-Decay mechanism)',
    timeDecayDesc: 'Los tokens de utilidad ambiental deprecian su valor si no se queman o venden antes del vencimiento para incentivar la compensación corporativa rápida.',
    timeRemainingLabel: 'Tiempo Restante:',
    burnForOffsetBtn: 'Burn for Offset',
    tradeOnSecondaryBtn: 'Trade on Secondary',
    carbonWalletTitle: 'Billetera de Créditos de Carbono (ESG)',
    carbonWalletDesc: 'Tokens de utilidad ambiental con mecanismo de desintegración temporal.',

    simulatorTitle: 'RWA Projection Engine (DMP 5.000 AP)',
    simulatorDesc: 'Simulador de rendimiento dinámico que ajusta la rentabilidad a lo largo del tiempo.',
    sliderLabel: 'Investment Horizon (Years)',
    projectedApyLabel: 'Projected APY',
    projectedApyUsdc: 'Projected APY (USDC)',
    estCarbonGenerated: 'Estimated Carbon Credits Generated',
    estCarbonGeneratedCo2t: 'Estimated Carbon Credits Generated',
    estCumulativePayout: 'Pago Acumulado Estimado',

    telemetryTitle: 'Telemetría de Sensores y ESG',
    telemetryDesc: 'Relevamiento IoT directo desde Planta Beicad #01.',
    plasmaTemp: 'Plasma Temp:',
    plasmaDesc: 'Arco Molecular',
    envSafety: 'Seguridad Ambiental',
    dioxinEmissions: 'Dioxin Emissions:',
    zeroToxins: 'Cero Toxinas',
    syngasFlow: 'Flujo de Syngas',
    wasteDiverted: 'Residuos Desviados',
    co2Offset: 'Compensación Mensual CO₂',
    zkSnarkFooter: 'Datos validados en cadena vía zk-SNARKs',
    telemetryHeader: 'Telemetría de Planta en Tiempo Real',
    telemetryFooterLine: 'Data validated on-chain via zk-SNARKs. Fiat Rails powered by Tenui',

    fiatRailsTitle: 'Rieles Fiat',
    fiatRailsDesc: 'Depósitos e instrucciones de giro bancario institucional a smart contract.',
    tenuiEngine: 'Motor de Liquidación Tenui',
    poweredByTenui: 'Impulsado por Tenui Global Infrastructure',
    sepaLabel: 'Transferencia SEPA / Wire EUR:',
    instantMinting: 'Liquidación Instantánea',
    mintedOutput: 'Tokens Emitidos Estimados:',
    generateWireBtn: 'Generar Instrucciones Bancarias Wire',

    auditTitle: 'Flujo de Auditoría de Verificación En Cadena',
    immutableLedger: 'Registro Inmutable',
    auditDesc: 'Pruebas criptográficas y atestaciones reglamentarias automatizadas en tiempo real.',

    closeBtn: 'Cerrar',
    closeCert: 'Cerrar Certificado',
    doneBtn: 'Volver al Portafolio',
  },
  en: {
    langName: 'English',
    network: 'Polygon zkEVM Mainnet',
    onchainid: 'ONCHAINID:',
    verified: 'Verified',
    mifid: '(MiFID II Compliant)',
    smartAccount: 'Smart Account',
    balanceLabel: 'Balance:',
    hardBalance: '150,000 USDC',
    gaslessTooltipTitle: 'ERC-4337 Sponsored Account',
    gaslessTooltipDesc: 'Zero gas fees via Paymaster.',
    totalGasSaved: 'Total Gas Saved:',

    heroBadgeTrust: 'ERC-3643 Verified Trust',
    heroTitle: 'DMP 5.000 AP Plasma Reactor - Series A Trust',
    heroSubtitle: 'Plasma molecular disintegration. Zero environmental liabilities.',
    targetApy: 'Target Net Dividend',
    sponsor: 'Sponsor Entity',
    plantCap: 'Plant Capacity',
    valuation: 'Series Valuation',
    distribution: 'Distribution Rail',
    offtakeActive: 'Syngas Offtake Agreement Active',
    escrowCustody: 'Bank Escrow Custody (Tenui Global)',

    financialYieldTitle: 'Financial Yield (USDC)',
    chartTitle: 'Syngas Commercialization Dividend Yield Model',
    chartDesc: 'Projected USDC quarterly dividend distributions backed by industrial off-take contracts.',
    syngasIndex: 'Syngas Market Index',
    plantUptime: 'Plant Capacity Uptime',
    grossVsNet: 'Gross Sales vs Investor USDC Distributions',
    estQuarterlyDiv: 'Est. Quarterly Dividend',
    effectiveApy: 'Effective Dividend APY',
    contractRail: 'Smart Contract Rail',

    subHubTitle: 'RWA Subscription Hub',
    subHubDesc: 'Direct minting into ERC-4337 Smart Account with instant ERC-3643 compliance.',
    investmentAmount: 'USDC Investment Amount:',
    available: 'Available Balance:',
    tokensAllocated: 'Allocated RWA Series A Tokens:',
    estAnnualReturn: 'Est. Net Annual Return (14.2%):',
    gasFeeLabel: 'Gas Fee (ERC-4337):',
    gasFree: '$0.00 (Sponsored by NEXUS Paymaster)',
    subscribeBtn: 'Subscribe RWA Participation',
    subDisclaimer: '🔒 Validation via ERC-3643 Registry. Transactions sponsored by NEXUS Paymaster.',

    financialHubTitle: 'Wallet & Tenui Fiat Gateway',
    financialHubDesc: 'Direct institutional on/off ramp between bank accounts and smart contracts.',
    tabDeposit: 'Deposit (On-Ramp)',
    tabWithdraw: 'Withdraw (Off-Ramp)',
    depositInputLabel: 'Deposit Amount (USD):',
    depositBtnText: 'Wire Transfer via Tenui -> Mints USDC',
    withdrawInputLabel: 'Withdraw Amount (USDC):',
    selectBankLabel: 'Linked Bank Account:',
    withdrawBtnText: 'Withdraw Fiat via Tenui',
    payoneerDisclaimer: 'Liquidated through Payoneer rails in 2-4 hours',

    envYieldTitle: 'Environmental Yield (Carbon Credits)',
    unclaimedCreditsTitle: 'Unclaimed Carbon Credits',
    unclaimedCreditsCount: '450 NCT-CARBON Tokens',
    creditsValuation: 'Est. Market Value: $13,500 USDC ($30 / Credit)',
    timeDecayWarningTitle: 'Time-Decay Warning!',
    timeDecayWarningMsg: 'Warning: 450 Carbon Credits expire in 12 Days (Time-Decay mechanism)',
    timeDecayDesc: 'Environmental utility tokens decay over time to incentivize rapid corporate carbon offsetting before expiration.',
    timeRemainingLabel: 'Time Remaining:',
    burnForOffsetBtn: 'Burn for Offset',
    tradeOnSecondaryBtn: 'Trade on Secondary',
    carbonWalletTitle: 'Carbon Credit Wallet (ESG)',
    carbonWalletDesc: 'Active environmental utility tokens with time-decay mechanism.',

    simulatorTitle: 'RWA Projection Engine (DMP 5.000 AP)',
    simulatorDesc: 'Interactive dynamic yield simulator adjusting profitability over time.',
    sliderLabel: 'Investment Horizon (Years)',
    projectedApyLabel: 'Projected APY',
    projectedApyUsdc: 'Projected APY (USDC)',
    estCarbonGenerated: 'Estimated Carbon Credits Generated',
    estCarbonGeneratedCo2t: 'Estimated Carbon Credits Generated',
    estCumulativePayout: 'Estimated Cumulative Payout',

    telemetryTitle: 'ESG & Sensor Telemetry',
    telemetryDesc: 'Direct IoT telemetry relay from Beicad Plant #01.',
    plasmaTemp: 'Plasma Temp:',
    plasmaDesc: 'Molecular Arc',
    envSafety: 'Environmental Safety',
    dioxinEmissions: 'Dioxin Emissions:',
    zeroToxins: 'Zero Toxins',
    syngasFlow: 'Syngas Flow Rate',
    wasteDiverted: 'Waste Diverted',
    co2Offset: 'Monthly CO₂ Avoidance',
    zkSnarkFooter: 'Data validated on-chain via zk-SNARKs',
    telemetryHeader: 'Real-Time Operational Telemetry',
    telemetryFooterLine: 'Data validated on-chain via zk-SNARKs. Fiat Rails powered by Tenui',

    fiatRailsTitle: 'Fiat Rails',
    fiatRailsDesc: 'Direct institutional bank-to-smart contract minting & redemption.',
    tenuiEngine: 'Tenui Settlement Engine',
    poweredByTenui: 'Powered by Tenui Global Infrastructure',
    sepaLabel: 'SEPA / Wire Transfer EUR:',
    instantMinting: 'Instant Minting',
    mintedOutput: 'Minted Token Output:',
    generateWireBtn: 'Generate Bank Wire Instructions',

    auditTitle: 'On-Chain Verification Audit Stream',
    immutableLedger: 'Immutable Ledger',
    auditDesc: 'Real-time cryptographic proofs and automated regulatory compliance attestations.',

    closeBtn: 'Close',
    closeCert: 'Close Certificate',
    doneBtn: 'Return to Portfolio',
  }
};
