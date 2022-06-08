import React from "react";
import { Avatar, ListItem } from "@rneui/base";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useSocket } from "../../../hooks/useSocket";

const Chat = () => {
    const navigate = useNavigation();
    const { socket } = useSocket();
    const handleGoChat = () => {
        navigate.navigate("Chat", {
            chatId: "1",
        });
        socket?.emit("join", "1");
        console.log("entro a 1");
    };

    return (
        <ListItem containerStyle={styles.listItem} onPress={handleGoChat}>
            <Avatar
                rounded
                size={"medium"}
                title={"item.name[0]"}
                source={{ uri: "https://randomuser.me/api/portraits/men/41.jpg" }}
            />
            <ListItem.Content>
                <ListItem.Title style={styles.titleItem}>{"Alexander"}</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitleItem}>{"Alex"}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    );
};

export default Chat;
