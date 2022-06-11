import React, { useEffect } from "react";
import {
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import { height } from "../../constants/Layout";

const useLoginAnimation = () => {
    const sizeOfContainer = height / 4;
    const outOfScreen = sizeOfContainer * 3 * -1;

    const loginTextSharedValue = useSharedValue(0);
    const containerLoginSharedValue = useSharedValue(outOfScreen);
    const contentLoginSharedValue = useSharedValue(0);
    
    const loginTextStyles = useAnimatedStyle(() => ({
        opacity: loginTextSharedValue.value,
    }));

    

    const reanimatedStyles = useAnimatedStyle(
        () => ({
            bottom: containerLoginSharedValue.value,
        }),
        []
    );

    const contentLoginStyles = useAnimatedStyle(() => ({
        opacity: contentLoginSharedValue.value,
    }));

    useEffect(() => {
        loginTextSharedValue.value = withDelay(400, withTiming(1, { duration: 500 }));
        containerLoginSharedValue.value = withTiming(0, { duration: 400 });
        contentLoginSharedValue.value = withDelay(400, withTiming(1, { duration: 200 }));
    }, []);

    return [reanimatedStyles, loginTextStyles, contentLoginStyles];
};

export default useLoginAnimation;
