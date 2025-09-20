// src/components/FinancialForm.tsx
import React, { useState } from "react";
import type { FinancialFormData } from "../types/financial";
import { Calculator } from "lucide-react";

interface Props {
  onChange: (key: keyof FinancialFormData, value: number) => void;
  onSubmit: () => void;
}

const fields: { key: keyof FinancialFormData; label: string }[] = [
  { key: "revenue", label: "Revenue (Sales)" },
  { key: "cogs", label: "Cost of Goods Sold (COGS)" },
  { key: "operatingIncome", label: "Operating Income" },
  { key: "netIncome", label: "Net Income" },
  { key: "beginningTotalAssets", label: "Beginning Total Assets" },
  { key: "endingTotalAssets", label: "Ending Total Assets" },
  { key: "TotalAssets", label: "Total Assets" },
  { key: "equity", label: "Shareholder Equity" },
  { key: "currentAssets", label: "Current Assets" },
  { key: "currentLiabilities", label: "Current Liabilities" },
  { key: "totalLiabilities", label: "Total Liabilities" },
  { key: "beginningInventory", label: "Beginning Inventory" },
  { key: "endingInventory", label: "Ending Inventory" },
];

export default function FinancialForm({ onChange, onSubmit }: Props) {
  const [localValues, setLocalValues] = useState<Record<string, string>>({});

  const handleChange = (key: keyof FinancialFormData, value: string) => {
    // Convertir a número limpio
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;

    // Guardar formato de moneda en el input
    setLocalValues((prev) => ({
      ...prev,
      [key]: numericValue.toLocaleString("en-US", { style: "currency", currency: "USD" }),
    }));

    // Pasar solo número al padre
    onChange(key, numericValue);
  };

  return (
    <div className="bg-gradient-to-br from-white/90 to-gray-50 shadow-xl rounded-3xl p-8 w-full">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
        <Calculator className="w-6 h-6 text-blue-600" />
        Enter Financial Data
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fields.map(({ key, label }) => (
          <div key={key} className="flex flex-col">
            <label htmlFor={key} className="text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            <input
              id={key}
              type="text"
              placeholder="$0"
              value={localValues[key] || ""}
              onChange={(e) => handleChange(key, e.target.value)}
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        ))}
      </div>

      <button
        onClick={onSubmit}
        className="mt-8 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-blue-500 hover:to-blue-600 transition"
      >
        <Calculator className="w-5 h-5" />
        Calculate Ratios
      </button>
    </div>
  );
}
