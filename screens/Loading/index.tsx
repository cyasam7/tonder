import React from "react";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Loading = () => {
    return (
        <SafeAreaProvider style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Loading</Text>
        </SafeAreaProvider>
    );
};

export default Loading;
