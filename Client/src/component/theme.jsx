import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: { main: "#F9FAFB" },
    },
    customColors: {
        white: "rgb(248 248 248)",
        lightgrey: "rgb(238 238 243)",
        grey: "rgb(87 93 108)",
        darkgrey: "rgb(70 77 90)",
        darkergrey: "rgb(70 77 91)",
        test: "#FF0000",
        blue: "rgb(121 175 248)",
        lightblue: "rgb(169 204 249)",
        hover: "#D8DADF"
    },
});

export default theme;
