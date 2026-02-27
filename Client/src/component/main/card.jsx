import { Paper, Box, Typography } from "@mui/material"
import theme from "../theme"

export default function Card({ title, graph: Graph }) {
    return (
        <Paper elevation={1}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: theme.customColors.white,
                    borderRadius: "5px",
                    py: "25px",
                    px: "35px",
                    height: "280px",
                }}>
                <Typography
                    variant="h6"
                    color={theme.customColors.darkgrey}
                >
                    {title}
                </Typography>
                <Box sx={{ flex: 1 }}>
                    <Graph />
                </Box>
            </Box>
        </Paper>
    )
}
