import Title from "./title";
import { Box, Typography, Paper } from "@mui/material";
import theme from "../theme"
import { useState, useEffect } from "react";
import ChartCPU from "./charts/cpu";
import ChartGPU from "./charts/gpu";
import ChartNetwork from "./charts/network";
import ChartDisk from "./charts/disk";

const cards = [
    { id: "cpu", titre: "CPU Usage (%)", chart: ChartCPU },
    { id: "gpu", titre: "GPU Usage (%)", chart: ChartGPU },
    { id: "network", titre: "Network I/O (MB/s)", chart: ChartNetwork },
    { id: "disk", titre: "Disk Usage (%)", chart: ChartDisk }
];

export default function Dashboard() {
    const [deskTimeout, setDeskTimeout] = useState("abcd")

    function SimulateData() {
        setDeskTimeout("defg")
    }

    useEffect(() => {
        const t = setTimeout(SimulateData, 10 * 1000)
        return () => clearTimeout(t)
    }, [])

    return (
        <Box sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column"
        }}>
            <Box sx={{
                height: "100px"
            }}>
                <Title>
                    System Metrics Dashboard
                    {deskTimeout}
                </Title>
            </Box>

            <Box sx={{
                paddingTop: "15px",
                flexGrow: 1,
                overflow: "auto",
                display: { xs: "flex", md: "grid" },
                flexDirection: "column",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                justifyContent: "space-between",
                gap: "30px",
                paddingTop: "30px"
            }}>
                {cards.map((card) => {
                    const Chart = card.chart;
                    return (
                        <Paper elevation={1}>
                            <Box
                                key={card.id}
                                sx={{
                                    backgroundColor: theme.customColors.white,
                                    borderRadius: "5px",
                                    py: "25px",
                                    px: "35px"
                                }}>
                                <Typography
                                    variant="h6"
                                    color={theme.customColors.darkgrey}
                                >{card.titre}</Typography>
                                <Box >
                                    <Chart />
                                </Box>
                            </Box>
                        </Paper>
                    );
                })}
            </Box>

        </Box >
    )
}