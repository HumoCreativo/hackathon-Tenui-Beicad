import React from 'react';
import { ShieldCheck, FileCode, Zap, Landmark, CheckCircle2 } from 'lucide-react';
import { AuditLogEntry } from '../types/dashboard';

interface AuditLogSectionProps {
  logs: AuditLogEntry[];
}

export const AuditLogSection: React.FC<AuditLogSectionProps> = ({ logs }) => {
  return (
    <div className="nexus-card p-6 border-slate-800">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <span>On-Chain Verification Audit Stream</span>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
              Immutable Ledger
            </span>
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Real-time cryptographic proofs and automated regulatory compliance attestations.
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2.5 font-mono text-xs max-h-60 overflow-y-auto pr-1">
        {logs.map((log) => (
          <div
            key={log.id}
            className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between transition-all"
          >
            <div className="flex items-center space-x-3">
              {log.type === 'telemetry' && <FileCode className="w-4 h-4 text-emerald-400 shrink-0" />}
              {log.type === 'compliance' && <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />}
              {log.type === 'erc4337' && <Zap className="w-4 h-4 text-purple-400 shrink-0" />}
              {log.type === 'settlement' && <Landmark className="w-4 h-4 text-indigo-400 shrink-0" />}

              <div>
                <div className="text-slate-200 font-semibold">{log.event}</div>
                <div className="text-[10px] text-slate-500 flex items-center gap-2 mt-0.5">
                  <span>Tx: {log.txHash}</span>
                  <span>•</span>
                  <span>{log.timestamp}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-900">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>{log.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
