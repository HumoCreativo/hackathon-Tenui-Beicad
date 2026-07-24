import React, { useState, useEffect } from 'react';
import { Flame, Shield, Cpu, ExternalLink, Activity, RefreshCw, FileCode, CheckCircle2, Zap } from 'lucide-react';
import { TelemetryReading } from '../types/dashboard';

interface TelemetryCardProps {
  telemetry: TelemetryReading;
  onOpenZkProofModal: () => void;
}

export const TelemetryCard: React.FC<TelemetryCardProps> = ({
  telemetry,
  onOpenZkProofModal,
}) => {
  const [currentTemp, setCurrentTemp] = useState<number>(telemetry.plasmaTempC);
  const [syngasFlow, setSyngasFlow] = useState<number>(telemetry.syngasOutputNm3h);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  // Simulate real-time plasma plant micro-variations
  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      const tempDelta = Math.floor(Math.random() * 30) - 15;
      const flowDelta = Math.floor(Math.random() * 40) - 20;
      
      setCurrentTemp(prev => Math.max(5150, Math.min(5400, prev + tempDelta)));
      setSyngasFlow(prev => Math.max(4700, Math.min(5100, prev + flowDelta)));
      
      setTimeout(() => setIsUpdating(false), 600);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="nexus-card p-6 relative overflow-hidden">
      {/* Background Emerald Ambient Glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Panel Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-bold text-slate-100 tracking-tight">
              ESG & Sensor Telemetry
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Direct IoT telemetry relay from Beicad Plant #01.
          </p>
        </div>

        <div className="flex items-center space-x-1.5 font-mono text-[10px] bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800 text-emerald-400">
          <span className={`w-2 h-2 rounded-full bg-emerald-400 ${isUpdating ? 'animate-ping' : ''}`} />
          <span>LIVE</span>
        </div>
      </div>

      {/* Key ESG Metrics Highlight Cards */}
      <div className="mt-5 space-y-3.5">
        
        {/* Metric 1: Plasma Temp > 5,000°C with Flame Icon as requested */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between transition-all hover:border-amber-500/40">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-500/30 flex items-center justify-center">
              <Flame className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-mono">Plasma Temp</div>
              <div className="text-sm font-bold text-slate-100 font-mono">
                Molecular Disintegration
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-black font-mono text-amber-400">
              &gt;{currentTemp.toLocaleString()}°C
            </div>
            <div className="text-[10px] text-slate-500 font-mono">Core Arc Thermal</div>
          </div>
        </div>

        {/* Metric 2: Dioxin Emissions 0% with Shield Icon, text-emerald-400 & bg-emerald-900/30 as requested */}
        <div className="p-4 rounded-xl bg-emerald-900/30 border border-emerald-500/40 flex items-center justify-between transition-all hover:border-emerald-400">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-500/50 flex items-center justify-center shadow-lg shadow-emerald-900/50">
              <Shield className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs text-emerald-300 font-mono font-medium">Environmental Safety</div>
              <div className="text-sm font-bold text-slate-100 font-mono">
                Dioxin Emissions
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black font-mono text-emerald-400 tracking-tight">
              0%
            </div>
            <div className="text-[10px] font-mono text-emerald-300/80 font-semibold uppercase">
              Zero Toxins
            </div>
          </div>
        </div>

        {/* Secondary Operational Sensor Metrics */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[11px] text-slate-400 font-mono mb-1">Syngas Flow Rate</div>
            <div className="text-base font-bold font-mono text-blue-400">
              {syngasFlow.toLocaleString()} <span className="text-xs text-slate-400 font-normal">Nm³/h</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[11px] text-slate-400 font-mono mb-1">Waste Diverted</div>
            <div className="text-base font-bold font-mono text-purple-400">
              {telemetry.wasteProcessedTonsDay} <span className="text-xs text-slate-400 font-normal">Tons/day</span>
            </div>
          </div>

        </div>

        {/* CO2 Offsets Counter */}
        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">Monthly CO₂ Avoidance:</span>
          <span className="font-bold text-emerald-400">+{telemetry.co2OffsetTonsMonth.toLocaleString()} Tons</span>
        </div>

      </div>

      {/* Panel Footer as required in prompt: "Data validated on-chain via zk-SNARKs" */}
      <div className="mt-5 pt-4 border-t border-slate-800/80">
        <button
          onClick={onOpenZkProofModal}
          className="w-full group flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-all cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <FileCode className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <div className="text-left font-mono">
              <div className="text-xs font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                Data validated on-chain via zk-SNARKs
              </div>
              <div className="text-[10px] text-slate-500 truncate max-w-[200px]">
                Hash: {telemetry.zkSnarkProofHash.substring(0, 18)}...
              </div>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0" />
        </button>
      </div>

    </div>
  );
};
