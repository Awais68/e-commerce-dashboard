'use client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { category: 'Water Bottles', revenue: 8000 },
  { category: 'Filters', revenue: 6000 },
  { category: 'Delivery', revenue: 3000 },
  { category: 'Maintenance', revenue: 2000 },
];

export function CategoryRevenueChart() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#00BFFF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
