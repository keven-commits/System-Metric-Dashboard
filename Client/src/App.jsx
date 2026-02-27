import { Box } from "@mui/material";
import EnConstruction from "./component/main/enConstruction";
import MainPage from "./component/mainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function App() {
    return (
        <BrowserRouter>
            <Box sx={{ height: "100%" }}>
                <Routes>
                    <Route path="/" element={<MainPage />}>
                        <Route index element={null} />
                        <Route path="logs" element={<EnConstruction titre="Logs" />} />
                        <Route path="metrics" element={<EnConstruction titre="Metrics" />} />
                        <Route path="settings" element={<EnConstruction titre="Settings" />} />
                        <Route path="alerts" element={<EnConstruction titre="Alerts" />} />
                    </Route>
                </Routes>
            </Box>
        </BrowserRouter>
    )
}
