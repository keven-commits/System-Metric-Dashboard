import { Box, Typography } from "@mui/material"
import theme from "../theme"

export default function Title({ children }) {
    return (
        <Box sx={{
            height: "100px",
            borderBottom: "1px solid #D8DADF",
            display: "flex",
            alignItems: "flex-end",
        }}>
            <Typography
                color={theme.customColors.darkgrey}
                sx={{
                    fontSize: "26px",
                    fontWeight: 540,
                    position: "relative",
                    bottom: "10px"
                }}>
                {children}
            </Typography>
        </Box>
    )
}