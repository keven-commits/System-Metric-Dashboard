import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
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

// #endregion
const ChartGPU = () => {
  return (
    <AreaChart
      style={{ width: "100%", height: "100%" }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      onContextMenu={(_, e) => e.preventDefault()}
    >
      <defs>
        <linearGradient id="degradeVert" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#7CCF35" stopOpacity={0.4} />
          <stop offset="95%" stopColor="#7CCF35" stopOpacity={0.05} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#71BA32"
        strokeWidth={3}
        fill="url(#degradeVert)"
      />
      <RechartsDevtools />
    </AreaChart>
  );
};

export default ChartGPU;