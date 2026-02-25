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

const ChartCPU = () => {
  const [data, setData] = useState([]);

  const maxTicks = 6;
  const interval = Math.ceil(data.length / maxTicks);

  useEffect(() => {
    const fetchCPU = async () => {
      try {
        const res = await fetch("http://localhost:3000/cpu");
        const json = await res.json();

        if (!json?.cpuUtilisation && json?.cpuUtilisation !== 0) return;

        const newPoint = {
          time: new Date(json.ts).getTime(),
          cpu: json.cpuUtilisation
        };

        setData(prev => {
          const updated = [...prev, newPoint];
          return updated.length > 30
            ? updated.slice(updated.length - 30)
            : updated;
        });

      } catch (err) {
        console.error("Fetch CPU error:", err);
      }
    };

    fetchCPU(); // premier appel immédiat

    const interval = setInterval(fetchCPU, 10000); // 10 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", overflow: "visible" }}>
      <ResponsiveContainer width="100%" height="100%">
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
            <linearGradient id="degradeBleu" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2E8FFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#2E8FFF" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            type="category"
            interval={interval}
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
          />
          <Tooltip
            labelFormatter={(label) =>
              new Date(label).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            }
            formatter={(value) => [`${Math.round(value)}%`, "CPU"]}
          />
          <Area
            type="monotone"
            dataKey="cpu"
            stroke="#2E8FFF"
            strokeWidth={2.5}
            fill="url(#degradeBleu)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCPU;