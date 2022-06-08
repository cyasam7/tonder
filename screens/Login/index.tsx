import React from "react";
import { useFormik } from "formik";
import { Input, SocialIcon, Text } from "@rneui/base";
import { Button } from "@rneui/themed";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";
import { HideKeyboardView } from "../../components/HideKeyboardView";
import Animated from "react-native-reanimated";
import useLoginAnimation from "../../hooks/animations/LoginAnimation";
import { useDispatch } from "react-redux";

const Login = () => {
    const [stylesLoginAnimation, loginTextSharedValue, contentLoginStyles] = useLoginAnimation();

    const dispatch = useDispatch();

    const formik = useFormik({
        va,
    });

    return (
        <View style={styles.screen}>
            <HideKeyboardView>
                <View style={styles.mainContainer}>
                    <Animated.View style={[styles.titleContainer, loginTextSharedValue]}>
                        <Text h1 h1Style={{ color: "#fff", padding: 10 }}>
                            Login
                        </Text>
                    </Animated.View>
                    <Animated.View style={[styles.loginContainer, stylesLoginAnimation]}>
                        <Animated.ScrollView
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            style={contentLoginStyles}
                        >
                            <Input
                                placeholder="Email"
                                leftIcon={<AntDesign name="user" size={24} color="gray" />}
                            />
                            <Input
                                placeholder="Password"
                                secureTextEntry
                                leftIcon={<AntDesign name="lock" size={24} color="gray" />}
                            />
                            {/* TODO: INTRODUCIR CHECKBOX */}
                            <Button onPress={() => null} title={"Iniciar Sesion"} />
                            <View style={{ margin: 5 }} />
                            <Text
                                style={{
                                    textAlign: "center",
                                    marginVertical: 15,
                                    fontWeight: "bold",
                                }}
                            >
                                ó Inicia Sesion con
                            </Text>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <SocialIcon
                                    type="google"
                                    title="Registrate con google"
                                    style={{ alignSelf: "center" }}
                                />
                                <SocialIcon
                                    type="facebook"
                                    title="Registrate con google"
                                    style={{ alignSelf: "center" }}
                                />
                                <SocialIcon
                                    type="github"
                                    title="Registrate con google"
                                    style={{ alignSelf: "center" }}
                                />
                                <SocialIcon
                                    type="twitch"
                                    title="Registrate con google"
                                    style={{ alignSelf: "center" }}
                                />
                            </View>
                        </Animated.ScrollView>
                    </Animated.View>
                </View>
            </HideKeyboardView>
        </View>
    );
};

export default Login;
