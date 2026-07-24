import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { TrendingUp, Sliders, DollarSign, Activity } from 'lucide-react';
import { INITIAL_YIELD_DATA } from '../data/mockData';

export const YieldChart: React.FC = () => {
  const [syngasPriceMultiplier, setSyngasPriceMultiplier] = useState<number>(1.0);
  const [plantUptime, setPlantUptime] = useState<number>(95);
  const [selectedHorizon, setSelectedHorizon] = useState<'1Y' | '3Y' | '5Y'>('3Y');

  // Compute dynamic chart data based on scenario sliders
  const chartData = INITIAL_YIELD_DATA.map((item) => {
    const uptimeFactor = plantUptime / 95;
    const rev = Math.round(item.syngasRevenueUSDC * syngasPriceMultiplier * uptimeFactor);
    const div = Math.round(item.investorDividendUSDC * syngasPriceMultiplier * uptimeFactor);
    const apy = Number((item.projectedYieldAPY * syngasPriceMultiplier * (plantUptime / 95)).toFixed(1));

    return {
      month: item.month,
      syngasRevenueUSDC: rev,
      investorDividendUSDC: div,
      projectedYieldAPY: apy,
    };
  });

  const currentQuarterDiv = chartData[chartData.length - 1].investorDividendUSDC;
  const currentAPY = chartData[chartData.length - 1].projectedYieldAPY;

  return (
    <div className="nexus-card p-6">
      {/* Top Header & Scenario Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-bold text-slate-100 tracking-tight">
              Syngas Commercialization & Dividend Yield Model
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Projected USDC quarterly dividend distributions backed by long-term industrial off-take contracts.
          </p>
        </div>

        {/* Horizon Tabs */}
        <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-lg border border-slate-800 self-start md:self-auto font-mono text-xs">
          {(['1Y', '3Y', '5Y'] as const).map((h) => (
            <button
              key={h}
              onClick={() => setSelectedHorizon(h)}
              className={`px-3 py-1 rounded-md transition-all font-semibold ${
                selectedHorizon === h
                  ? 'bg-blue-600 text-blue-50 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {h}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Scenario Tuning Toolbar */}
      <div className="my-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Syngas Spot Price Tuning */}
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1.5">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Sliders className="w-3.5 h-3.5 text-blue-400" /> Syngas Market Index:
            </span>
            <span className="font-bold text-blue-400">
              ${(0.42 * syngasPriceMultiplier).toFixed(2)} / Nm³ ({syngasPriceMultiplier === 1 ? 'Base' : `${(syngasPriceMultiplier * 100 - 100).toFixed(0)}%`})
            </span>
          </div>
          <input
            type="range"
            min="0.8"
            max="1.4"
            step="0.05"
            value={syngasPriceMultiplier}
            onChange={(e) => setSyngasPriceMultiplier(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        {/* Plant Operational Uptime Tuning */}
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1.5">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Activity className="w-3.5 h-3.5 text-emerald-400" /> Plant Capacity Uptime:
            </span>
            <span className="font-bold text-emerald-400">{plantUptime}%</span>
          </div>
          <div className="flex items-center space-x-2">
            {[88, 92, 95, 98].map((uptime) => (
              <button
                key={uptime}
                onClick={() => setPlantUptime(uptime)}
                className={`flex-1 py-1 rounded text-xs font-mono transition-all ${
                  plantUptime === uptime
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {uptime}%
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Main Recharts Area Chart */}
      <div className="h-72 w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSyngas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="colorDividend" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34d399" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#34d399" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="#64748b"
              fontSize={11}
              fontFamily="JetBrains Mono"
              tickLine={false}
              axisLine={{ stroke: '#1e293b' }}
            />
            <YAxis
              stroke="#64748b"
              fontSize={11}
              fontFamily="JetBrains Mono"
              tickLine={false}
              axisLine={{ stroke: '#1e293b' }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                borderColor: '#334155',
                borderRadius: '8px',
                fontSize: '12px',
                fontFamily: 'JetBrains Mono',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
              }}
              formatter={(value: any, name: any) => [
                `$${Number(value).toLocaleString()} USDC`,
                name === 'syngasRevenueUSDC' ? 'Syngas Sales Gross' : 'Net Investor USDC Dividend',
              ]}
              labelStyle={{ color: '#94a3b8', fontWeight: 'bold', marginBottom: '4px' }}
            />

            <Legend
              verticalAlign="top"
              height={36}
              wrapperStyle={{ fontSize: '11px', fontFamily: 'JetBrains Mono' }}
              formatter={(value) => (
                <span className="text-slate-300 font-medium">
                  {value === 'syngasRevenueUSDC' ? 'Gross Syngas Sales' : 'Series A Investor Dividend'}
                </span>
              )}
            />

            <Area
              type="monotone"
              dataKey="syngasRevenueUSDC"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorSyngas)"
            />
            <Area
              type="monotone"
              dataKey="investorDividendUSDC"
              stroke="#34d399"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#colorDividend)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Telemetry Metrics Bar */}
      <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center font-mono">
        <div>
          <div className="text-[10px] text-slate-500 uppercase">Projected Quarterly Div</div>
          <div className="text-base font-bold text-emerald-400 mt-0.5">
            ${currentQuarterDiv.toLocaleString()} USDC
          </div>
        </div>
        <div>
          <div className="text-[10px] text-slate-500 uppercase">Effective Net Yield</div>
          <div className="text-base font-bold text-slate-100 mt-0.5">
            {currentAPY}% APY
          </div>
        </div>
        <div>
          <div className="text-[10px] text-slate-500 uppercase">Distribution Contract</div>
          <div className="text-base font-bold text-blue-400 mt-0.5">
            Automated ERC-20
          </div>
        </div>
      </div>

    </div>
  );
};
