import { StyleSheet } from "react-native";
import { height } from "../../constants/Layout";

const heighOfContainerLogin = (height / 4) * 3;

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    mainContainer: { flex: 1, backgroundColor: "#EB5757" },
    titleContainer: {
        flex: 1,
        padding: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end",
    },
    loginContainer: {
        flex: 3,
        display: "flex",
        backgroundColor: "white",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
    },
});
