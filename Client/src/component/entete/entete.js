import { Box } from "@mui/material"
import theme from "../theme"
import SearchAppBar from "./searchBar"

export default function Entete() {
    return (
        <Box sx={{
            height: "56px",
            width: "100%",
            backgroundColor: theme.customColors.white
        }}>
            <SearchAppBar/>
        </Box>
    )
}