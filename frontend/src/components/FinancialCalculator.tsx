// src/components/FinancialCalculator.tsx

import React, { useState } from "react";
import FinancialForm from "./FinancialForm";
import FinancialChart from "./FinancialChart";
import { calculateRatios } from "../services/ratiosApi";
import type { FinancialFormData, FinancialRatios } from "../types/financial";
import { BarChart as BarChartIcon } from "lucide-react"; // ✅ Icono para dashboard

export default function FinancialCalculator() {
  const [formData, setFormData] = useState<Partial<FinancialFormData>>({});
  const [ratios, setRatios] = useState<FinancialRatios | null>(null);

  const handleChange = (key: keyof FinancialFormData, value: number) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    try {
      const data = await calculateRatios(formData);
      setRatios(data);
    } catch (err) {
      alert("⚠️ Error calculating ratios. Check console for details.");
    }
  };

  const profitData = ratios
    ? [
        { name: "Gross Margin", value: ratios.grossMargin },
        { name: "Operating Margin", value: ratios.operatingMargin },
        { name: "Net Margin", value: ratios.netProfitMargin },
        { name: "ROA", value: ratios.roa },
        { name: "ROE", value: ratios.roe },
      ]
    : [];

  const liquidityData = ratios
    ? [
        { name: "Current Ratio", value: ratios.currentRatio },
        { name: "Debt-to-Equity", value: ratios.debtToEquity },
        { name: "Asset Turnover", value: ratios.assetTurnover },
        { name: "Inventory Turnover", value: ratios.inventoryTurnover },
      ]
    : [];

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800 flex items-center justify-center gap-3">
        <BarChartIcon className="w-10 h-10 text-blue-600" />
        Financial Ratios Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-[1600px] mx-auto px-4">
        <FinancialForm onChange={handleChange} onSubmit={handleSubmit} />

        {ratios && (
          <div className="flex flex-col gap-8">
            <FinancialChart
              title="Profitability Ratios"
              data={profitData.map((d) => ({ ...d, color: "#3b82f6" }))}
            />
            <FinancialChart
              title="Liquidity & Leverage Ratios"
              data={liquidityData.map((d, i) => ({
                ...d,
                color: ["#10b981", "#f59e0b", "#8b5cf6", "#ef4444"][i % 4],
              }))}
            />
          </div>
        )}
      </div>
    </div>
  );
}
