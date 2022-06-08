import React, { useEffect, useState } from "react";
import { ScrollView, Text, KeyboardAvoidingView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderChat from "../../components/HeaderChat";
import InputChat from "../../components/InputChat";
import MessagesChat from "../../components/MessagesChat";
import { View } from "../../components/Themed";
import { useSocket } from "../../hooks/useSocket";
import { behaviorCondition, styles } from "./styles";

function ChatScreen() {
    const insets = useSafeAreaInsets();
    const [message, setMessage] = useState<string[]>([]);
    const { socket } = useSocket();
    useEffect(() => {
        socket?.on("new_message", (data: string) => {
            console.log(data);
            const messages = [...message, data];
            setMessage(messages);
        });
    }, []);

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <KeyboardAvoidingView style={styles.container} behavior={behaviorCondition}>
                <ScrollView
                    scrollEnabled={false}
                    collapsable={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={styles.scrollContainerMessage}
                >
                    <HeaderChat />
                    <ScrollView style={{ flex: 1, paddingHorizontal: 10, paddingTop: 5 }}>
                        <MessagesChat isMine message={"Hola"} />
                        <MessagesChat message={"Que onda"} />
                        <MessagesChat isMine message={"Como andas?"} />
                        <MessagesChat message={"Bien y tu?"} />
                    </ScrollView>
                    <InputChat />
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

export default ChatScreen;
