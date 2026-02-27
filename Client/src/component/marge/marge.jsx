import { Box } from "@mui/material"
import theme from "../theme.jsx"
import Logo from "./logo.jsx"
import BoutonMarge from "./bouton.jsx"
import NestedList from "./list.jsx"
import Version from "./version.jsx"
import { useState } from "react"


export default function Marge({ isOpen, largeur, onClickAlerts, onClickDashboard, onClickLogs, onClickMetrics, onClickSettings }) {
    const [active, setActive] = useState("dashboard");
    return (
        <Box sx={{
            height: "100%",
            width: largeur,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.customColors.darkgrey
        }}>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ width: "60px" }}>
                    <Logo />
                </Box>
                {isOpen && <Box sx={{ width: "100px" }}>
                    <BoutonMarge />
                </Box>}
            </Box>
            <Box sx={{
                flexGrow: 1,
                overflow: "auto"
            }}>
                <NestedList isOpen={isOpen}
                    active={active}
                    onClickAlerts={() => {
                        setActive("alerts")
                        onClickAlerts()
                    }}
                    onClickDashboard={() => {
                        setActive("dashboard")
                        onClickDashboard()
                    }}
                    onClickLogs={() => {
                        setActive("logs")
                        onClickLogs()
                    }}
                    onClickMetrics={() => {
                        setActive("metrics")
                        onClickMetrics()
                    }}
                    onClickSettings={() => {
                        setActive("settings")
                        onClickSettings()
                    }}
                />
            </Box>
            <Box sx={{
                flexShrink: 0
            }}>
                {isOpen && <Version />}
            </Box>
        </Box>
    )
}