import React from "react";
import { FlatList, Text, View } from "react-native";
import AvatarItem from "../Avatar";
import { ICarouselMatchesProps } from "./CarouselMatchesProps";
import styles from "./styles";

const CarouselMatches = ({ matches }: ICarouselMatchesProps) => {
    return (
        <View style={styles.matches}>
            <Text style={styles.textMatches}>New Matches</Text>
            {matches.length > 0 ? (
                <View style={{ margin: 5 }}>
                    <FlatList
                        data={matches}
                        renderItem={({ item }) => <AvatarItem match={item} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(_, index) => index.toString()}
                    />
                </View>
            ) : (
                <Text
                    style={{
                        textAlign: "center",
                        backgroundColor: "white",
                        paddingVertical: 20,
                        borderRadius: 20,
                    }}
                >
                    No hay matches
                </Text>
            )}
        </View>
    );
};

export default CarouselMatches;
