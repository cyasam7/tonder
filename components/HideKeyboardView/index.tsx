import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export const HideKeyboardView: React.FC = ({ children }) => {
    return (
        <TouchableWithoutFeedback touchSoundDisabled onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
};
