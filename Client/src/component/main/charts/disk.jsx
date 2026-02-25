import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
    {
        name: 'Page A',
        uv: 4000,
    },
    {
        name: 'Page B',
        uv: 3000,
    },
    {
        name: 'Page C',
        uv: 2000,
    },
    {
        name: 'Page D',
        uv: 2780,
    },
    {
        name: 'Page E',
        uv: 1890,
    },
    {
        name: 'Page F',
        uv: 2390,
    },
    {
        name: 'Page G',
        uv: 3490,
    },
];

// #endregion
const SimpleBarChart = () => {
    return (
        <BarChart
            style={{ width: "100%", height: "100%" }}
            responsive
            data={data}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
        >
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip cursor={false} />
            <Bar dataKey="uv" fill="#FF8904" />
            <RechartsDevtools />
        </BarChart>
    );
};

export default SimpleBarChart;