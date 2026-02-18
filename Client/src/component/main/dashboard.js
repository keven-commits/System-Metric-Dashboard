import Title from "./title";
import { Box } from "@mui/material";
import theme from "../theme"

export default function Dashboard() {
    return (
        <>
            <Title>
                System Metrics Dashboard
            </Title>
            <Box sx={{
                paddingTop: "15px",
                height: "100px",
                //backgroundColor: theme.customColors.test
                }}>

            </Box>
        </>
    )
}