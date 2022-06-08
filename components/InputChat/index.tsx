import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Icon } from "@rneui/base";
import { styles } from "./styles";
import { useSocket } from "../../hooks/useSocket";
import { useRoute } from "@react-navigation/native";

const InputChat = () => {
    const {
        params: { chatId },
    } = useRoute();
    const { socket } = useSocket();
    const [message, setMessage] = useState<string>("");

    const handleChangeMessage = (message: string) => setMessage(message);

    const handleSendMessage = () => {
        socket?.emit("message", {
            room: chatId,
            message,
        });
        setMessage("");
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={handleChangeMessage}
                    placeholder="Escribe mensaje..."
                />
                <Icon
                    onPress={handleSendMessage}
                    reverse
                    name="send"
                    type="ionicon"
                    size={16}
                    color="#FD0E42"
                    raised
                />
            </View>
        </View>
    );
};

export default InputChat;
