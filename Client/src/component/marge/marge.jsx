import { Box } from "@mui/material"
import theme from "../theme.jsx"
import Logo from "./logo.jsx"
import BoutonMarge from "./bouton.jsx"
import NestedList from "./list.jsx"
import Version from "./version.jsx"


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