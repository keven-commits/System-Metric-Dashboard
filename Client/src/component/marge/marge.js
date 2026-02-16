import { Box } from "@mui/material"
import theme from "../theme"
import Logo from "./logo"
import Test from "./test.js"

export default function Marge() {
    return (
        <Box sx={{ height: "100%", width: "160px", flexShrink: 0, backgroundColor: theme.customColors.darkgrey }}>
            <Box sx={{ display: "flex" }}>
                <Box sx={{flex: 2}}>
                    <Logo />
                </Box>
                <Box sx={{flex: 3}}>
                    <Test />
                </Box>

            </Box>
        </Box>
    )
}