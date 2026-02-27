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

  const [data, setData] = useState([

  ]);

  const maxTicks = 6;
  const intervalXAxis = Math.ceil(data.length / maxTicks);

  const fetchCPU = async () => {
    try {
      const reponse = await fetch("http://localhost:3000/cpu");
      const server = await reponse.json();

      if (!server?.cpuUtilisation && server?.cpuUtilisation !== 0) return;

      const nouveauPoint = {
        time: new Date(server.ts).getTime(),
        cpu: server.cpuUtilisation
      };

      console.log(nouveauPoint)

      setData(prev => {

        const updated = [...prev, nouveauPoint];
        return updated
      });

    } catch (err) {
      console.error("Erreur : ", err);
    }
  };

  useEffect(() => {
    if (data.length == 0) {
      fetchCPU()
    }
    const interval = setInterval(fetchCPU, 10 * 1000);

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
            <linearGradient id="degradeBleu" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2E8FFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#2E8FFF" stopOpacity={0.1} />
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