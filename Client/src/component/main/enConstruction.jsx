import Title from "./title";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function EnConstruction({titre}) {
    return (
        <>
            <Title>
                {titre}
            </Title>
            <Box sx={{ paddingTop: "15px" }}>
                <Typography variant="h4">En construction</Typography>
            </Box>
        </>
    )
}