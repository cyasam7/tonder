import { StyleSheet } from "react-native";
import { height, width } from "../../constants/Layout";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: width,
    },
    mainContainer: { flex: 1, backgroundColor: "#FD0E42" },
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
    viewTouchableRegister: {
        paddingVertical: 8,
        borderRadius: 2,
        borderColor: "#FD0E42",
        borderWidth: 0.5,
    },
    textTouchableRegister: {
        textAlign: "center",
        color: "#FD0E42",
        fontSize: 17,
    },
    textLogIn: {
        textAlign: "center",
        marginVertical: 15,
        fontWeight: "500",
        color: "#4d4d4d",
    },
});
