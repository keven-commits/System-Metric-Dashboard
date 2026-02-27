import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const ChartGPU = () => {
  const [data, setData] = useState([
    { time: Date.now(), gpu: 0 },
    { time: Date.now() + 1, gpu: 0 },
  ]);

  const maxTicks = 6;
  const intervalXAxis = Math.ceil(data.length / maxTicks);

  const fetchGPU = async () => {
    try {
      const reponse = await fetch("http://localhost:3000/gpu");
      const server = await reponse.json();

      if (server?.gpuUtilisation === undefined || server?.gpuUtilisation === null) return;

      const nouveauPoint = {
        time: new Date(server.ts).getTime(),
        gpu: server.gpuUtilisation
      };

      setData(prev => {
        const updated = [...prev, nouveauPoint];
        return updated
      });

    } catch (err) {
      console.error("Erreur : ", err);
    }
  };

  useEffect(() => {

    if (data.length <= 2) {
      fetchGPU()
    }
    const interval = setInterval(fetchGPU, 10 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", height: 280, overflow: "visible", minWidth: 0 }}>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 24 }}
          padding={{ right: 18 }}
          overflow={"visible"}
        >
          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke="#e0e0e0"
          />
          <defs>
            <linearGradient id="degradeVert" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7CCF35" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#7CCF35" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            type="category"
            interval={intervalXAxis}
            tickFormatter={(value) =>
              new Date(value).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            }
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            width={30}
            tickLine={false}
            ticks={[0, 25, 50, 75, 100]}
          />
          <Tooltip
            labelFormatter={(label) =>
              new Date(label).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            }
            formatter={(value) => [`${Math.round(value)}%`, "GPU"]}
          />
          <Area
            type="monotone"
            dataKey="gpu"
            stroke="#71BA32"
            strokeWidth={3}
            fill="url(#degradeVert)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartGPU;