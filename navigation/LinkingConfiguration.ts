import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.makeUrl("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    Home: "Home",
                    Matches: "Matches",
                },
            },
            Chat: "Chat",
            Login: "Login",
            Modal: "modal",
            NotFound: "*",
        },
    },
};

export default linking;
