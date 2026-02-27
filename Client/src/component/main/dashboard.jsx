import Title from "./title";
import { Box } from "@mui/material";
import ChartCPU from "./charts/cpu";
import ChartGPU from "./charts/gpu";
import ChartNetwork from "./charts/network";
import ChartDisk from "./charts/disk";
import Card from "./card";
import { useState } from "react";

export default function Dashboard() {
    const [gridTemplateColumns, setGridTemplateColumns] = useState("1fr 1fr")
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
                </Title>
            </Box>

            <Box sx={{
                flexGrow: 1,
                overflow: "auto",
                display: { xs: "flex", md: "grid" },
                flexDirection: "column",
                gridTemplateColumns: gridTemplateColumns,
                gridTemplateRows: "1fr 1fr",
                justifyContent: "space-between",
                gap: "30px",
                paddingTop: "30px",
            }}>
                <Card title={"CPU Usage(%)"} graph={ChartCPU} />
                <Card title={"GPU Usage(%)"} graph={ChartGPU} />
                <Card title={"Network I/O/s"} graph={ChartNetwork} />
                <Card title={"Disk Usage(%)"} graph={ChartDisk} />
            </Box>
        </Box >
    )
}