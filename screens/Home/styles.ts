import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        backgroundColor: "#F2F2F2",
    },
    background: {
        height: "42%",
        width: "100%",
        position: "absolute",
        right: 0,
        left: 0,
        top: 0,
        zIndex: 1,
        backgroundColor: "#FD0E42",
        borderBottomLeftRadius: 39,
        borderBottomRightRadius: 39,
        shadowColor: "rgba(0, 0, 0, 0.25);",
        shadowOffset: {
            height: 4,
            width: 4,
        },
    },
});
