import { Box, Paper } from "@mui/material"
import theme from "./theme";
import Marge from "./marge/marge";
import Entete from "./entete/entete";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "./main/dashboard"

export default function MainPage() {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(true);
    const [largeur, setLargeur] = useState("160px");

    const toggleBurgerMenu = () => {
        if (isBurgerMenuOpen) {
            setLargeur("60px")
        } else {
            setLargeur("160px")
        }
        setIsBurgerMenuOpen(!isBurgerMenuOpen)
    }

    const navigate = useNavigate();
    const location = useLocation();
    const isDashboard = location.pathname === "/";

    return (
        <Paper elevation={7}>
            <Box sx={{
                display: "flex",
                overflow: "hidden",
                height: "100vh",
                borderRadius: "5px",
                backgroundColor: theme.customColors.lightgrey,
                color: theme.customColors.grey
            }}>
                <Marge
                    isOpen={isBurgerMenuOpen}
                    largeur={largeur}
                    onClickAlerts={() => navigate("/alerts")}
                    onClickDashboard={() => navigate("/")}
                    onClickLogs={() => navigate("/logs")}
                    onClickMetrics={() => navigate("/metrics")}
                    onClickSettings={() => navigate("/settings")}
                />
                <Box sx={{
                    width: "100%",
                }}>
                    <Entete onclick={toggleBurgerMenu} />
                    <Box sx={{
                        marginRight: "30px",
                        marginLeft: "30px",
                        height: "90%"
                    }}>
                        <Box sx={{ display: isDashboard ? "block" : "none", height: "100%" }}>
                            <Dashboard />
                        </Box>
                        <Box sx={{ display: isDashboard ? "none" : "block", height: "100%" }}>
                            <Outlet />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
}