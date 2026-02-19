import { Box } from "@mui/material"
import theme from "../theme"
import Logo from "./logo"
import BoutonMarge from "./bouton.js"
import NestedList from "./list.js"
import Version from "./version.js"


export default function Marge({ isOpen, largeur }) {
    return (
        <Box sx={{
            height: "100%",
            width: largeur,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.customColors.darkgrey
        }}>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ width: "60px" }}>
                    <Logo />
                </Box>
                {isOpen && <Box sx={{ width: "100px" }}>
                    <BoutonMarge />
                </Box>}
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
                {isOpen && <Version />}
            </Box>
        </Box>
    )
}