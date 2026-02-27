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

const Unite = ["B/s", "KB/s", "MB/s", "GB/s", "TB/s"];

function formatBytesParSec(value) {
  if (value == null) return "";

  if (value < 1) return "0 B/s";

  let uniteIndex = 0;
  let valeur = value;

  while (valeur >= 1024 && uniteIndex < Unite.length - 1) {
    valeur /= 1024;
    uniteIndex++;
  }

  return `${Math.round(valeur)} ${Unite[uniteIndex]}`;
}

const ChartNetwork = () => {
  const [data, setData] = useState([
    { time: Date.now(), download: 0, upload: 0 },
    { time: Date.now() + 1, download: 0, upload: 0 },
  ]);

  const maxTicks = 6;
  const intervalXAxis = Math.ceil(data.length / maxTicks);

  const fetchNetwork = async () => {
    try {
      const reponse = await fetch("http://localhost:3000/network");
      const server = await reponse.json();

      if (server?.download == null || server?.upload == null) return;

      const uploadMB = server.upload;
      const downloadMB = server.download;

      const nouveauPoint = {
        time: new Date(server.ts).getTime(),
        upload: uploadMB,
        download: downloadMB,
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

    if (data.length == 0) {
      fetchNetwork()
    }

    const interval = setInterval(fetchNetwork, 10 * 1000);

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
            domain={[0, "auto"]}
            width={30}
            tickLine={false}
            tickFormatter={(valeur) =>
              valeur === 0 ? "0" : formatBytesParSec(valeur)}
          />
          <Tooltip
            labelFormatter={(label) =>
              new Date(label).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            }
            formatter={(value, name) => {
              const label = name === "download" ? "Download" : "Upload";
              return [formatBytesParSec(value), label]
            }}
          />
          <Area
            type="monotone"
            dataKey="upload"
            stroke="#155DFC"
            fill="url(#degradeMauve)"
          />
          <Area
            type="monotone"
            dataKey="download"
            stroke="#2E8FFF"
            fill="url(#degradeBleuPale)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartNetwork;