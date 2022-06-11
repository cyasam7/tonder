import { Avatar, Badge } from "@rneui/base";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const AvatarItem = () => {
    return (
        <View style={styles.container}>
            <Avatar
                rounded
                source={{
                    uri: "https://randomuser.me/api/portraits/men/41.jpg",
                }}
                size="medium"
            />
            <Badge
                badgeStyle={{ backgroundColor: "#FD0E42" }}
                containerStyle={styles.badgeAvatar}
            />
            <Text style={styles.textAvatar}>Anita</Text>
        </View>
    );
};

export default AvatarItem;
