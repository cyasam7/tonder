import React from "react";
import { FlatList, Text, View } from "react-native";
import { ICarouselChatProps } from "./CarouselChatProps";
import Chat from "./Chat";
import styles from "./styles";

const CarouselChat = ({ matches }: ICarouselChatProps) => {
    return (
        <View style={styles.matches}>
            <Text style={styles.textMatches}>Messages</Text>
            <FlatList
                data={matches}
                showsVerticalScrollIndicator={false}
                renderItem={() => <Chat />}
                keyExtractor={(_, index) => index.toString()}
            />
        </View>
    );
};

export default CarouselChat;
