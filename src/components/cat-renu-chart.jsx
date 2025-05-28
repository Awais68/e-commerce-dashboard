'use client';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Electronics', value: 35, color: 'hsl(var(--chart-1))' },
    { name: 'Clothing', value: 25, color: 'hsl(var(--chart-2))' },
    { name: 'Home & Garden', value: 20, color: 'hsl(var(--chart-3))' },
    { name: 'Books', value: 10, color: 'hsl(var(--chart-4))' },
    { name: 'Sports', value: 10, color: 'hsl(var(--chart-5))' },
];

export function CategoryRevenueChart() {
    return (
        <div className="space-y-4">
            <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                return (
                                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                                        <div className="grid grid-cols-1 gap-2">
                                            <div className="flex flex-col">
                                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                    {payload[0].payload.name}
                                                </span>
                                                <span className="font-bold">{payload[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>

            <div className="space-y-2">
                {data.map((item) => (
                    <div
                        key={item.name}
                        className="flex items-center justify-between text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <div
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <span>{item.name}</span>
                        </div>
                        <span className="font-medium">{item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
