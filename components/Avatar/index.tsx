import { Avatar, Badge } from "@rneui/base";
import React from "react";
import { Text, View } from "react-native";
import { IAvatarProps } from "./IAvatarProps";
import styles from "./styles";

const AvatarItem: React.FC<IAvatarProps> = ({ user }) => {
    return (
        <View style={styles.container}>
            <Avatar rounded source={{ uri: user.photo }} size="medium" />
            <Badge
                badgeStyle={{ backgroundColor: "#FD0E42" }}
                containerStyle={styles.badgeAvatar}
            />
            <Text style={styles.textAvatar}>{user.name}</Text>
        </View>
    );
};

export default AvatarItem;
