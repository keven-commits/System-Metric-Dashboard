import Title from "./title";
import { Box } from "@mui/material";
import theme from "../theme"
import { useState } from "react";

export default function Dashboard() {
    const [deskTimeout, setDeskTimeout] = useState("abcd")

    function SimulateData() {
        setDeskTimeout("defg")
    }

    setTimeout(SimulateData, 10 * 1000)

    return (
        <>
            <Title>
                System Metrics Dashboard
                {deskTimeout}
            </Title>
            <Box sx={{
                paddingTop: "15px",
                height: "100px",
            }}>

            </Box>
        </>
    )
}