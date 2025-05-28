"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const chartData = [
    // { month: "January", desktop: 186, mobile: 80 },
    // { month: "February", desktop: 305, mobile: 200 },
    // { month: "March", desktop: 237, mobile: 120 },
    // { month: "April", desktop: 73, mobile: 190 },
    // { month: "May", desktop: 209, mobile: 130 },
    // { month: "June", desktop: 214, mobile: 140 },
    {
        month: "Jan",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Feb",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Mar",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Apr",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "May",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Jun",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Jul",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Aug",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Sep",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Oct",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Nov",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        month: "Dec",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
]
export function Overview() {
    return (
        <ResponsiveContainer width="100%" height={350}>

            <BarChart data={chartData}>
                <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                    stroke="#000080"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`} />
                <Bar dataKey="total" fill="#9370DB" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}
