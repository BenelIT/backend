// src/components/FinancialChart.tsx
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList,
  Cell,
} from "recharts";
import { BarChart as BarChartIcon, Activity, TrendingUp } from "lucide-react";
import type { ValueType } from "recharts/types/component/DefaultTooltipContent";

interface ChartData {
  name: string;
  value: number;
  color?: string;
  isPercentage?: boolean; // solo para mostrar %
}

interface Props {
  title: string;
  data: ChartData[];
}

// Mostrar valor con dos decimales, y agregar % si es isPercentage
const formatValue = (val: number, asPercent?: boolean) =>
  asPercent ? `${val.toFixed(2)}%` : val.toFixed(2);

export default function FinancialChart({ title, data }: Props) {
  const getIcon = () => {
    if (title.toLowerCase().includes("profitability"))
      return <TrendingUp className="w-5 h-5 text-blue-600" />;
    if (title.toLowerCase().includes("liquidity") || title.toLowerCase().includes("leverage"))
      return <Activity className="w-5 h-5 text-green-600" />;
    return <BarChartIcon className="w-5 h-5 text-gray-600" />;
  };

  // Asignar isPercentage automáticamente si es chart de Profitability
  const processedData = data.map((d) =>
    title.toLowerCase().includes("profitability")
      ? { ...d, isPercentage: true }
      : d
  );

  return (
    <div className="bg-gradient-to-br from-white/90 to-gray-50 shadow-xl rounded-3xl p-6 hover:shadow-2xl transition">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
        {getIcon()} {title}
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={processedData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip
            formatter={(value: ValueType) => {
              const numeric = Number(value) || 0;
              const entry = processedData.find((d) => d.value === numeric);
              return formatValue(numeric, entry?.isPercentage);
            }}
          />
          <Legend />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {processedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || "#3b82f6"} />
            ))}
            <LabelList
              dataKey="value"
              position="top"
              formatter={(label: React.ReactNode) => {
                const numeric = Number(label) || 0;
                const entry = processedData.find((d) => d.value === numeric);
                return formatValue(numeric, entry?.isPercentage);
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
