import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { ICarouselItemProps } from "./CarouselItemProps";
import styles from "./styles";

const CarouselItem = (props: ICarouselItemProps) => {
    return (
        <View style={styles.card}>
            <Image
                style={[StyleSheet.absoluteFillObject, styles.imageCard]}
                source={{ uri: props.user.photo }}
            />
            <View style={styles.bottomBoxCard}>
                <Text style={styles.bottomName}>{props.user.name}</Text>
                <Text style={styles.bottomDescription}>{props.user.phone}</Text>
            </View>
        </View>
    );
};

export default CarouselItem;
