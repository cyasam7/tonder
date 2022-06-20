import React, { useRef } from "react";
import { useFormik } from "formik";
import { SocialIcon, Text } from "@rneui/base";
import { FlatList, TouchableWithoutFeedback, View } from "react-native";

import { styles } from "./styles";
import { HideKeyboardView } from "../../components/HideKeyboardView";
import Animated /* , {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} */ from "react-native-reanimated";
import useLoginAnimation from "../../hooks/animations/LoginAnimation";
import { ILoginFormik } from "../../dataflows/auth/IThunkTypes";
import { schemaLogin } from "../../dataflows/auth/schemas";
import { logIn } from "../../dataflows/auth/LoginThunks";
import { useAppDispatch } from "../../redux/hooks";
import { Button, TextInput } from "react-native-paper";
/* import Page from "../../components/Register";
import {
    GestureHandlerRootView,
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { width } from "../../constants/Layout"; */
import Register from "../Register";
import { ILoginProps } from "./ILoginProps";

/* export const Login = () => {
    type IContextInterface = {
    translateX: number;
    translateY: number;
};
const CIRCLE_RADIUS = SIZE * 2;
const titles = ["Login", "Sign Up"];

const SIZE = 100;

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const panGestureEvent = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        IContextInterface
    >({
        onStart: (_, context) => {
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
}; */

export const Login = () => {
    const ref = useRef(null);

    const handleScroll = (value: 1 | 0): void => {
        if (ref) ref.current.scrollToIndex({ animated: true, index: value });
    };

    const data = [<LoginComponent scroll={handleScroll} />, <Register scroll={handleScroll} />];

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                ref={ref}
                data={data}
                pagingEnabled
                horizontal
                alwaysBounceHorizontal={false}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item: Component }) => Component}
                keyExtractor={(_, index) => index.toString()}
                initialScrollIndex={0}
            />
        </View>
    );
};

const LoginComponent: React.FC<ILoginProps> = ({ scroll }) => {
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
                                style={{ backgroundColor: "transparent" }}
                                value={formik.values.email}
                                onChangeText={formik.handleChange("email")}
                                right={<TextInput.Icon name="email" color="gray" />}
                            />
                            <View style={{ margin: 5 }} />
                            <TextInput
                                label="Password"
                                style={{ backgroundColor: "transparent", marginBottom: 20 }}
                                value={formik.values.password}
                                onChangeText={formik.handleChange("password")}
                                secureTextEntry
                                right={<TextInput.Icon name="eye" color="gray" />}
                            />
                            <Button mode="contained" onPress={formik.handleSubmit}>
                                Iniciar Sesion
                            </Button>
                            <View style={{ margin: 5 }} />
                            <Button onPress={() => scroll(1)}>Registrate</Button>
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
