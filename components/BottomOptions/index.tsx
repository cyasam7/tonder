import React from "react";
import { TouchableHighlight, View } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { FAB } from "@rneui/base";
import { logOut } from "../../dataflows/auth/LoginThunks";
import { useAppDispatch } from "../../redux/hooks";

const BottomOptions = () => {
    const dispatch = useAppDispatch();

    const handleCloseSession = () => {
        dispatch(logOut());
    };
    return (
        <View style={styles.bottomOptions}>
            <FAB color="white" onPress={handleCloseSession}>
                <FontAwesome name="close" size={24} color="#8E8E93" />
            </FAB>
            <FAB color="white" onPress={() => alert("Hola")}>
                <FontAwesome name="undo" size={24} color="#FF9500" />
            </FAB>
            <FAB color="white" onPress={() => alert("Hola")}>
                <FontAwesome name="heart" size={24} color="#FF375F" />
            </FAB>
        </View>
    );
};

export default BottomOptions;
