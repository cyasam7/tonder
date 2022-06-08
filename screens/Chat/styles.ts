import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainerMessage: { flex: 1, backgroundColor: "white" },
});
export const behaviorCondition = Platform.OS === "ios" ? "padding" : "height";
