import React from "react";
import { Avatar, ListItem } from "@rneui/base";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { IChatProps } from "./IChatProps";

const Chat: React.FC<IChatProps> = ({ userMatched }) => {
    const navigate = useNavigation();

    const handleGoChat = () => {
        navigate.navigate("Chat", {
            chatId: userMatched.id,
        });
    };

    return (
        <ListItem containerStyle={styles.listItem} onPress={handleGoChat}>
            <Avatar rounded size={"medium"} source={{ uri: userMatched.user.photo }} />
            <ListItem.Content>
                <ListItem.Title style={styles.titleItem}>{userMatched.user.name}</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitleItem}>
                    {userMatched.user.phone}
                </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    );
};

export default Chat;
