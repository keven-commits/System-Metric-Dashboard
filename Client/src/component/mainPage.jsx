import { Box, Paper } from "@mui/material"
import theme from "./theme";
import Marge from "./marge/marge";
import Entete from "./entete/entete";
import { useState } from "react";


export default function MainPage({ body }) {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(true);
    const [largeur, setLargeur] = useState("160px");
    const toggleBurgerMenu = () => {
        if (isBurgerMenuOpen) {
            setLargeur("60px")
        } else {
            setLargeur("160px")
        }
        setIsBurgerMenuOpen(!isBurgerMenuOpen)
    }

    return (
        <Paper elevation={7}>
            <Box sx={{
                display: "flex",
                overflow: "hidden",
                height: "100vh",
                borderRadius: "5px",
                backgroundColor: theme.customColors.lightgrey,
                color: theme.customColors.grey
            }}>
                <>
                    <Marge isOpen={isBurgerMenuOpen} largeur={largeur} />
                    <Box sx={{
                        width: "100%",
                    }}>
                        <Entete onclick={toggleBurgerMenu} />
                        <Box sx={{
                            marginRight: "30px",
                            marginLeft: "30px",
                            height: "90%"
                        }}>
                            {body()}
                        </Box>
                    </Box>
                </>
            </Box>
        </Paper>
    )
}