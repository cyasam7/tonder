import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { ICarouselItemProps } from "./CarouselItemProps";
import styles from "./styles";

const CarouselItem = (props: ICarouselItemProps) => {
    return (
        <View style={styles.card}>
            <Image
                style={[StyleSheet.absoluteFillObject, styles.imageCard]}
                source={{ uri: props.imgUrl }}
            />
            <View style={styles.bottomBoxCard}>
                <Text style={styles.bottomName}>{props.title}</Text>
                <Text style={styles.bottomDescription}>10 miles away</Text>
            </View>
        </View>
    );
};

export default CarouselItem;
