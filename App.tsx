import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { ThemeProvider } from "@rneui/themed";
import { theme, themePaper } from "./theme";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { SocketProvider } from "./hooks/useSocket";
import { LogBox } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
LogBox.ignoreLogs(["EventEmitter.removeListener"]);

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <SocketProvider>
                    <PersistGate loading={null} persistor={persistor}>
                        <PaperProvider theme={themePaper}>
                            <ThemeProvider theme={theme}>
                                <SafeAreaProvider>
                                    <Navigation colorScheme={colorScheme} />
                                    <StatusBar />
                                </SafeAreaProvider>
                            </ThemeProvider>
                        </PaperProvider>
                    </PersistGate>
                </SocketProvider>
            </Provider>
        );
    }
}
