import { useEffect, useState } from "react";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar
} from "recharts";

const maxPoint = 30;

const ChartDisk = () => {

    const [data, setData] = useState([]);

    const maxTicks = 6;
    const intervalXAxis = Math.ceil(maxPoint / maxTicks);

    const fetchDisk = async () => {
        try {
            const reponse = await fetch("http://localhost:3000/disk");
            const server = await reponse.json();

            if (server?.diskUtilisation == null) return;

            const nouveauPoint = {
                time: new Date(server.ts).getTime(),
                disk: server.diskUtilisation
            };

            setData(prev => {
                const updated = [...prev, nouveauPoint];
                return updated.length > maxPoint
                    ? updated.slice(updated.length - maxPoint)
                    : updated;
            });

        } catch (err) {
            console.error("Erreur : ", err);
        }
    };

    useEffect(() => {
        if (data.length == 0) {
            fetchDisk()
        }
        const interval = setInterval(fetchDisk, 10 * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
    <div style={{ width: "100%", height: 280, overflow: "visible", minWidth: 0, paddingTop: "15px" }}>
      <ResponsiveContainer width="100%" height={260}>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 24,
                    }}
                    overflow={"visible"}
                    padding={{ right: 18 }}
                >
                    <CartesianGrid
                        horizontal={true}
                        vertical={false}
                        stroke="#e0e0e0"
                    />
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
                        tickLine={false} />
                    <YAxis
                        domain={[0, 100]}
                        width={30}
                        tickLine={false}
                        ticks={[0, 25, 50, 75, 100]}
                    />
                    <Tooltip
                        cursor={{ fill: "transparent" }}
                        labelFormatter={(label) =>
                            new Date(label).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                        }
                        formatter={(value) => [`${Math.round(value)}%`, "Disk"]} />
                    <Bar dataKey="disk"
                        fill="#FF8904"
                        maxBarSize={40}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div >
    );
};

export default ChartDisk;