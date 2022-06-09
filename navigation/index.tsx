import { Fontisto } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { ColorSchemeName } from "react-native";

import { RootStackParamList, RootTabParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import Home from "../screens/Home";
import Matches from "../screens/Matches";
import Login from "../screens/Login";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Chat from "../screens/Chat";
import Register from "../screens/Register";
import { selectorAuthIsAuth } from "../dataflows/auth/LoginSelectors";
import { useDispatch } from "react-redux";
import { checkSession } from "../dataflows/auth/LoginThunks";
import { deleteItem, getItem } from "../utils/localStorage";
import Loading from "../screens/Loading";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(checkSession());
    }, []);

    return (
        /* TODO: INVESTIGATE HOW TO MAKE A THEME */
        <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    const { isAuth } = useAppSelector((state) => state.Auth);
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAuth ? (
                <>
                    <Stack.Screen
                        name="Root"
                        component={BottomTabNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                </>
            )}
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
            <Stack.Group screenOptions={{ presentation: "modal" }}>
                {/* TODO: MAKE INVESTIGATION MODAL AND STACK GROUP */}
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#FD0E42",
                headerShown: false,
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => <Fontisto name="tinder" size={24} color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Matches"
                component={Matches}
                options={{
                    tabBarIcon: ({ color }) => <Fontisto name="hipchat" size={24} color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}
