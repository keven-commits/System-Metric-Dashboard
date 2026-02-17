import { Box, Paper } from "@mui/material"
import theme from "./theme";
import Marge from "./marge/marge";
import Entete from "./entete/entete";

export default function Dashboard() {
    return (
        <Paper elevation={7}>
            <Box sx={{
                display: "flex",
                overflow: "hidden",
                height: "95vh",
                borderRadius: "5px",
                backgroundColor: theme.customColors.lightgrey
            }}>
                <>
                    <Marge />
                    <Entete />
                </>
            </Box>
        </Paper>
    )
}