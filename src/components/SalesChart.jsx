import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", SA: 1000, Algeria: 600 },
  { month: "Feb", SA: 1100, Algeria: 620 },
  { month: "Mar", SA: 950, Algeria: 580 },
  { month: "Apr", SA: 1050, Algeria: 690 },
  { month: "May", SA: 980, Algeria: 650 },
  { month: "Jun", SA: 1300, Algeria: 700 },
  { month: "Jul", SA: 1200, Algeria: 720 },
  { month: "Aug", SA: 1250, Algeria: 800 },
  { month: "Sep", SA: 1100, Algeria: 750 },
  { month: "Oct", SA: 1400, Algeria: 850 },
  { month: "Nov", SA: 1150, Algeria: 810 },
  { month: "Dec", SA: 1250, Algeria: 870 },
];

function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="SA"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorSA)"
        />
        <Area
          type="monotone"
          dataKey="Algeria"
          stroke="#ff7300"
          fillOpacity={1}
          fill="url(#colorAlgeria)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default SalesChart;
