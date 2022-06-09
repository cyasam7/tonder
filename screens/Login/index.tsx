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
import { ILoginFormik } from "../../dataflows/auth/IThunkTypes";
import { schemaLogin } from "../../dataflows/auth/schemas";
import { logIn } from "../../dataflows/auth/LoginThunks";
import { useAppDispatch } from "../../redux/hooks";

const Login = () => {
    const [stylesLoginAnimation, loginTextSharedValue, contentLoginStyles] = useLoginAnimation();

    const dispatch = useAppDispatch();

    const formik = useFormik<ILoginFormik>({
        validationSchema: schemaLogin,
        initialValues: {
            email: "cyasam7@gmail.com",
            password: "Cyasam86&",
        },
        onSubmit: (values) => {
            dispatch(logIn(values));
        },
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
                                value={formik.values.email}
                                onChangeText={formik.handleChange("email")}
                                leftIcon={<AntDesign name="user" size={24} color="gray" />}
                            />
                            <Input
                                placeholder="Password"
                                value={formik.values.password}
                                secureTextEntry
                                onChangeText={formik.handleChange("password")}
                                leftIcon={<AntDesign name="lock" size={24} color="gray" />}
                            />
                            {/* TODO: INTRODUCIR CHECKBOX */}
                            <Button
                                onPress={() => formik.handleSubmit()}
                                title={"Iniciar Sesion"}
                            />
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
