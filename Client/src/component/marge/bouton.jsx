import { Box } from "@mui/material"
import theme from "../theme"
import NotesIcon from "@mui/icons-material/Notes"

export default function BoutonMarge() {
    return (
        <Box sx={{
            height: "56px",
            backgroundColor: theme.customColors.darkergrey,
            borderBottom: "1px solid #2E3848"
        }}>
            <Box sx={{
                height: "56px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <NotesIcon sx={{ mr: 4, color: theme.customColors.white }} />
            </Box>
        </Box>
    )
}