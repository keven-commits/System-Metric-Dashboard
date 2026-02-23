import { Box, Typography } from "@mui/material"
import theme from "../theme";

export default function Version() {
    return (
        <Box sx={{
            height: "50px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.customColors.lightgrey,
            fontSize: "0.95rem",
            borderTop: "1px solid #2E3848"
        }}>
            <Typography sx={{
                fontSize: "12px",
                fontWeight: 530,
            }}>
                v2.1
            </Typography>
        </Box >
    );
}