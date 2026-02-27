import { Box } from "@mui/material";
import Dashboard from "./component/main/dashboard";
import MainPage from "./component/mainPage";
import { useState } from "react";

export default function App() {
    const [page, setPage] = useState(<Dashboard/>)
    return (
        <Box sx={{height: "100%"}}>
            <MainPage body={page} />
        </Box>
    )
}
