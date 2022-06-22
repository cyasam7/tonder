import React, { useEffect, useState } from "react";
import { ScrollView, KeyboardAvoidingView, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "../../components/Themed";
import { useSocket } from "../../hooks/useSocket";
import { behaviorCondition, styles } from "./styles";
import HeaderChat from "../../components/HeaderChat";
import InputChat from "../../components/InputChat";
import MessagesChat from "../../components/MessagesChat";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectorAuthUser } from "../../dataflows/auth/LoginSelectors";
import { IMessageBase } from "../../types";
import { useRoute } from "@react-navigation/native";
import { listMessage } from "../../dataflows/chat/ChatThunks";
import { messagesSelector } from "../../dataflows/chat/IChatSelectors";
import { AddMessage } from "../../dataflows/chat/ChatSlice";

const ChatScreen = () => {
    const insets = useSafeAreaInsets();
    const {
        params: { chatId },
    } = useRoute();
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectorAuthUser);
    const message = useAppSelector(messagesSelector);
    const { socket } = useSocket();

    useEffect(() => {
        socket?.on("new_message", (data: IMessageBase) => {
            dispatch(AddMessage(data));
        });
    }, []);

    useEffect(() => {
        dispatch(listMessage(chatId));
    }, []);

    useEffect(() => {
        socket?.emit("join", chatId);
        return () => {
            console.log("Se salio");
            socket?.emit("left", chatId);
        };
    }, []);

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <KeyboardAvoidingView style={styles.container} behavior={behaviorCondition}>
                <View style={styles.scrollContainerMessage}>
                    <HeaderChat />
                    <View style={{ flex: 1 }}>
                        <FlatList
                            inverted
                            data={[...message].reverse()}
                            style={{ paddingHorizontal: 15 }}
                            renderItem={({ item }) => (
                                <MessagesChat message={item} isMine={user?.id === item.user} />
                            )}
                            keyExtractor={(_, index) => index.toString()}
                        />
                    </View>
                    <InputChat />
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default ChatScreen;
