import { Box } from "@mui/material"
import theme from "../theme"

export default function Logo() {
    return (
        <Box sx={{
            height: "56px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.customColors.grey
        }}>
            <Box sx={{
                height: "30px",
                width: "30px",
                borderRadius: "4px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                backgroundColor: theme.customColors.blue
            }}>
                <Box sx={{
                    height: "20px",
                    width: "20px",
                    backgroundColor: theme.customColors.lightblue
                }}></Box>
            </Box>
        </Box>
    )
}