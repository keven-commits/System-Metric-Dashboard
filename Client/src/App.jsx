import { Box } from "@mui/material";
import Dashboard from "./component/main/dashboard";
import MainPage from "./component/mainPage";

export default function App() {

    return (
        <Box sx={{height: "100%"}}>
            <MainPage body={Dashboard} />
        </Box>
    )
}
