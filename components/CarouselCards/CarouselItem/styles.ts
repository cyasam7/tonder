import { Dimensions, StyleSheet } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const SLIDER_HEIGH = Dimensions.get("window").height;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.898666667);
export const ITEM_HEIGHT = Math.round(SLIDER_HEIGH * 0.63);

export default StyleSheet.create({
    card: {
        position: "relative",
        height: ITEM_HEIGHT,
        marginTop: "-12%",
    },
    imageCard: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    bottomBoxCard: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        height: "17%",
        backgroundColor: "white",
        paddingHorizontal: "4%",
        position: "absolute",
        right: 0,
        left: 0,
        bottom: -1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    bottomName: {
        color: "rgb(0,0,0)",
        fontSize: 22,
    },
    bottomDescription: {
        color: "gray",
        fontSize: 12,
    },
});
