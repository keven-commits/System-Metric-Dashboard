import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
];

// #endregion
const ChartNetwork = () => {
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
    >
      <defs>
        <linearGradient id="degradeBleuPale" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#2E8FFF" stopOpacity={1} />
          <stop offset="95%" stopColor="#2E8FFF" stopOpacity={.5} />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="degradeMauve" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#155DFC" stopOpacity={1} />
          <stop offset="95%" stopColor="#155DFC" stopOpacity={.7} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stackId="1" stroke="#155DFC" fill="url(#degradeMauve)" />
      <Area type="monotone" dataKey="pv" stackId="1" stroke="#2E8FFF" fill="url(#degradeBleuPale)" />
      <RechartsDevtools />
    </AreaChart>
  );
};

export default ChartNetwork;