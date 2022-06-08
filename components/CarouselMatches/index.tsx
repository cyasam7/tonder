import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import AvatarItem from "../Avatar";
import { ICarouselMatchesProps } from "./CarouselMatchesProps";
import styles from "./styles";

const CarouselMatches = ({ matches }: ICarouselMatchesProps) => {
    return (
        <View style={styles.matches}>
            <Text style={styles.textMatches}>New Matches</Text>
            <ScrollView>
                <View style={{ margin: 5 }}>
                    <FlatList
                        data={matches}
                        renderItem={() => <AvatarItem />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(_, index) => index.toString()}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default CarouselMatches;
