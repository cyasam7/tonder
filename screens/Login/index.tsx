import React from "react";
import { useFormik } from "formik";
import { SocialIcon, Text } from "@rneui/base";
import { Button } from "@rneui/themed";
import { TouchableWithoutFeedback, View } from "react-native";

import { styles } from "./styles";
import { HideKeyboardView } from "../../components/HideKeyboardView";
import Animated /* , {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
}  */ from "react-native-reanimated";
import useLoginAnimation from "../../hooks/animations/LoginAnimation";
import { ILoginFormik } from "../../dataflows/auth/IThunkTypes";
import { schemaLogin } from "../../dataflows/auth/schemas";
import { logIn } from "../../dataflows/auth/LoginThunks";
import { useAppDispatch } from "../../redux/hooks";
import { TextInput } from "react-native-paper";
import Page from "../../components/Register";
/* import {
    GestureHandlerRootView,
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const titles = ["Login", "Sign Up"];

const SIZE = 100;
const CIRCLE_RADIUS = SIZE * 2;

type IContextInterface = {
    translateX: number;
    translateY: number;
}; */
/* export const Login = () => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const panGestureEvent = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        IContextInterface
    >({
        onStart: (event, context) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translateX;
            translateY.value = event.translationY + context.translateY;
        },
        onEnd: () => {
            const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
            if (distance < CIRCLE_RADIUS + SIZE / 2) {
                translateX.value = withSpring(0);
                translateY.value = withSpring(0);
            }
        },
    });

    const styleSquare = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
    }));

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.circleRadius}>
                <PanGestureHandler onGestureEvent={panGestureEvent}>
                    <Animated.View style={[styles.square, styleSquare]} />
                </PanGestureHandler>
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: "red",
        borderRadius: 20,
    },
    circleRadius: {
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderColor: "blue",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: CIRCLE_RADIUS,
    },
}); */

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
                            <TextInput
                                label="Email"
                                mode="outlined"
                                activeOutlineColor="#EB5757"
                                value={formik.values.email}
                                onChangeText={formik.handleChange("email")}
                                right={<TextInput.Icon name="email" color="gray" />}
                            />
                            <View style={{ margin: 5 }} />
                            <TextInput
                                label="Password"
                                mode="outlined"
                                activeOutlineColor="#EB5757"
                                value={formik.values.password}
                                onChangeText={formik.handleChange("password")}
                                secureTextEntry
                                style={{ marginBottom: 20 }}
                                right={<TextInput.Icon name="eye" color="gray" />}
                            />
                            <Button
                                onPress={() => formik.handleSubmit()}
                                title={"Iniciar Sesion"}
                            />
                            <View style={{ margin: 5 }} />
                            <TouchableWithoutFeedback style={{ marginTop: 10 }}>
                                <View style={styles.viewTouchableRegister}>
                                    <Text style={styles.textTouchableRegister}>Registrate</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={{ margin: 5 }} />
                            <Text style={styles.textLogIn}>o inicia sesion con</Text>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <SocialIcon
                                    type="google"
                                    title="Registrate con google"
                                    style={{ alignSelf: "center" }}
                                />
                                <SocialIcon
                                    type="facebook"
                                    title="Registrate con facebook"
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
