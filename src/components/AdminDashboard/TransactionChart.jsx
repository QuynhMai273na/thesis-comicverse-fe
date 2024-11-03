import { Legend } from "@headlessui/react";
import React from "react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
];

function TransactionChart() {
    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">Transaction</strong>
        <div className="w-full mt-3 flex-1 text-xs">
            <ResponsiveContainer width="100%" height="100%"> 
                <BarChart width={500} 
                        height={300} 
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0,
                        }}>
                            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Legend />
                            <Bar dataKey="uv" fill="#8884d8" />
                            <Bar dataKey="pv" fill="#82ca9d" />
                            <Bar dataKey="amt" fill="#ffc658" />
                </BarChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
}

export default TransactionChart;