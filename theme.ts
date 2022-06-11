import { createTheme } from "@rneui/themed";
import { DefaultTheme } from "react-native-paper";

export const theme = createTheme({
    Button: {
        raised: true,
        color: "#FD0E42",
    },
});

export const themePaper = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: "#FD0E42",
        accent: "#f1c40f",
    },
};
