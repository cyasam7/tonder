import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 2,
        backgroundColor: "#fff",
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 4,
    },
    wrapper: {
        flex: 1,
        flexDirection: "row",
        margin: 5,
        alignItems: "center",
    },
    input: {
        flex: 1,
        padding: 10,
    },
});
