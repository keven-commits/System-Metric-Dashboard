import { Box } from "@mui/material"
import theme from "../theme"
import Logo from "./logo"
import BoutonMarge from "./bouton.js"
import NestedList from "./list.js"
import Version from "./version.js"


export default function Marge({ isOpen }) {
    return (
        <Box sx={{
            height: "100%",
            width: "160px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.customColors.darkgrey
        }}>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ flex: 2 }}>
                    <Logo />
                </Box>
                <Box sx={{ flex: 3 }}>
                    <BoutonMarge />
                </Box>
            </Box>
            <Box sx={{
                flexGrow: 1,
                overflow: "auto"
            }}>
                <NestedList isOpen={isOpen}/>
            </Box>
            <Box sx={{
                flexShrink: 0
            }}>
                <Version />
            </Box>
        </Box>
    )
}