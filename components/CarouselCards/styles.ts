import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: "transparent",
        flex: 1,
        flexDirection: "column",
        zIndex: 2,
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
    },
    backgroundText: {
        flex: 0,
        marginTop: "12%",
        color: "white",
        fontStyle: "normal",
        backgroundColor: "transparent",
        fontSize: 36,
        lineHeight: 49,
        paddingLeft: 20,
        paddingRight: 20,
    },
    swiperContainer: {
        flex: 1,
        backgroundColor: "transparent",
    },
    bottomOptions: {
        backgroundColor: "transparent",
        paddingHorizontal: 20,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        height: "10%",
    },
});

export const overlayLaps = {
    left: {
        title: "Nope",
        style: {
            label: {
                textAlign: "right",
                color: "red",
            },
        },
    },
    right: {
        title: "LIKE",
        style: {
            label: {
                textAlign: "left",
                color: "green",
            },
        },
    },
};
