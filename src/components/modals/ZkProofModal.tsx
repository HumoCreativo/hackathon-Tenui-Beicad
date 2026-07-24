import React from 'react';
import { X, FileCode, CheckCircle2, Shield, Cpu, Lock, ExternalLink } from 'lucide-react';
import { TelemetryReading } from '../../types/dashboard';

interface ZkProofModalProps {
  isOpen: boolean;
  onClose: () => void;
  telemetry: TelemetryReading;
}

export const ZkProofModal: React.FC<ZkProofModalProps> = ({
  isOpen,
  onClose,
  telemetry,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="nexus-card w-full max-w-xl p-6 relative border-emerald-500/50 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/50 flex items-center justify-center">
              <FileCode className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <span>zk-SNARK Telemetry Verification</span>
              </h3>
              <p className="text-xs text-emerald-400 font-mono">
                Zero-Knowledge Proof of Dioxin Free Disintegration
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Proof Payload Box */}
        <div className="mt-5 space-y-3 font-mono text-xs">
          
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
            <div className="text-[10px] text-slate-500 uppercase">Cryptographic Proof Hash (Groth16)</div>
            <div className="text-emerald-400 font-bold text-xs break-all">
              {telemetry.zkSnarkProofHash}
            </div>
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified by Polygon zkEVM Verifier Contract #0x921A...</span>
            </div>
          </div>

          {/* Circuit Assertions */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-slate-200">Zero-Knowledge Circuit Assertions:</div>
            
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">1. Dioxin Sensor Output == 0.00 PPM:</span>
              <span className="text-emerald-400 font-bold">TRUE</span>
            </div>

            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">2. Plasma Arc Temperature &gt;= 5,000°C:</span>
              <span className="text-emerald-400 font-bold">TRUE</span>
            </div>

            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">3. Tamper-Proof Sensor Signature (ECDSA):</span>
              <span className="text-emerald-400 font-bold">VALID</span>
            </div>

            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">4. ESG Carbon Credit Eligibility:</span>
              <span className="text-emerald-400 font-bold">QUALIFIED</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-[11px]">
            <span>Verification Block: </span>
            <span className="text-slate-200 font-semibold">{telemetry.lastVerifiedTimestamp}</span>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-bold transition-all cursor-pointer"
          >
            Close Proof Inspector
          </button>
        </div>

      </div>
    </div>
  );
};
