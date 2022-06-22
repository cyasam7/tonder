import React from "react";
import { Text, View } from "react-native";
import { IMessageChatProps } from "./IMessageChatProps";
import tw from "twrnc";
import styles from "./styles";

const MessagesChat: React.FC<IMessageChatProps> = ({ message, isMine }) => {
    return (
        <View style={[styles.container, { alignSelf: isMine ? "flex-end" : "flex-start" }]}>
            <Text
                style={[
                    {},
                    tw`${
                        isMine
                            ? "bg-gray-200 rounded-bl-2xl rounded-br-sm"
                            : "bg-rose-300 rounded-bl-sm rounded-br-2xl"
                    } p-2 rounded-tr-2xl shadow-md rounded-tl-2xl text-justify text-neutral-800`,
                ]}
            >
                {message.message}
            </Text>
            <Text style={[tw`text-xs text-neutral-600 ${isMine ? "self-end" : "self-start"}`]}>
                {message.time}
            </Text>
        </View>
    );
};

export default MessagesChat;
