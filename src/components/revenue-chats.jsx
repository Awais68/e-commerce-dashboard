'use client';

import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const generateData = (timeRange, category) => {
    const baseData = {
        daily: Array.from({ length: 30 }, (_, i) => ({
            name: `Day ${i + 1}`,
            revenue: Math.floor(Math.random() * 2000) + 500,
            orders: Math.floor(Math.random() * 50) + 10,
        })),
        weekly: Array.from({ length: 12 }, (_, i) => ({
            name: `Week ${i + 1}`,
            revenue: Math.floor(Math.random() * 10000) + 2000,
            orders: Math.floor(Math.random() * 200) + 50,
        })),
        monthly: [
            { name: 'Jan', revenue: 4000, orders: 120 },
            { name: 'Feb', revenue: 3000, orders: 98 },
            { name: 'Mar', revenue: 5000, orders: 150 },
            { name: 'Apr', revenue: 4500, orders: 135 },
            { name: 'May', revenue: 6000, orders: 180 },
            { name: 'Jun', revenue: 5500, orders: 165 },
            { name: 'Jul', revenue: 7000, orders: 210 },
            { name: 'Aug', revenue: 6500, orders: 195 },
            { name: 'Sep', revenue: 5800, orders: 174 },
            { name: 'Oct', revenue: 6200, orders: 186 },
            { name: 'Nov', revenue: 7500, orders: 225 },
            { name: 'Dec', revenue: 8000, orders: 240 },
        ],
        yearly: [
            { name: '2020', revenue: 45000, orders: 1200 },
            { name: '2021', revenue: 52000, orders: 1450 },
            { name: '2022', revenue: 61000, orders: 1680 },
            { name: '2023', revenue: 68000, orders: 1890 },
            { name: '2024', revenue: 75000, orders: 2100 },
        ],
    };

    return baseData[timeRange] || baseData.monthly;
};

export function RevenueChart({ timeRange, category }) {
    const data = generateData(timeRange, category);

    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                    content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                            return (
                                <div className="rounded-lg border bg-background p-2 shadow-sm">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex flex-col">
                                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                Revenue
                                            </span>
                                            <span className="font-bold text-muted-foreground">
                                                ${payload[0].value}
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                Orders
                                            </span>
                                            <span className="font-bold">
                                                {payload[1]?.value || 0}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    }}
                />
                <Line
                    type="monotone"
                    dataKey="revenue"
                    strokeWidth={2}
                    activeDot={{
                        r: 6,
                        style: { fill: 'var(--theme-primary)', opacity: 0.25 },
                    }}
                    style={{
                        stroke: 'var(--theme-primary)',
                    }}
                />
                <Line
                    type="monotone"
                    dataKey="orders"
                    strokeWidth={2}
                    activeDot={{
                        r: 6,
                        style: { fill: 'hsl(var(--chart-2))', opacity: 0.25 },
                    }}
                    style={{
                        stroke: 'hsl(var(--chart-2))',
                    }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
