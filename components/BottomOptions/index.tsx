import React from "react";
import { FAB } from "@rneui/base";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { IBottomObtionsProps } from "./IBottomOptionsProps";

const BottomOptions: React.FC<IBottomObtionsProps> = ({ SwipeLeft, SwipeRight, fetchUsers }) => {
    return (
        <View style={styles.bottomOptions}>
            <FAB color="white" onPress={() => SwipeLeft()}>
                <FontAwesome name="close" size={24} color="#8E8E93" />
            </FAB>
            <FAB color="white" onPress={() => fetchUsers()}>
                <FontAwesome name="undo" size={24} color="#FF9500" />
            </FAB>
            <FAB color="white" onPress={() => SwipeRight()}>
                <FontAwesome name="heart" size={24} color="#FF375F" />
            </FAB>
        </View>
    );
};

export default BottomOptions;
