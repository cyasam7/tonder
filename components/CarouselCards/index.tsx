import React, { useRef } from "react";
import { Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import CarouselItem from "./CarouselItem";
import styles from "./styles";
import BottomOptions from "../BottomOptions";
import { ITEM_HEIGHT } from "./CarouselItem/styles";

const DATA = [
    {
        title: "Aenean leo",
        body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
        title: "In turpis",
        body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
        imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
        title: "Lorem Ipsum",
        body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
        imgUrl: "https://picsum.photos/id/12/200/300",
    },
];

const Carousel = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.backgroundText}>Discover</Text>
            <View style={styles.swiperContainer}>
                <Swiper
                    cards={DATA}
                    overlayLabels={{
                        left: {
                            title: "Nope",
                            style: {
                                label: {
                                    textAlign: "right",
                                    color: "red",
                                },
                            },
                        },
                        right: {
                            title: "LIKE",
                            style: {
                                label: {
                                    textAlign: "left",
                                    color: "green",
                                },
                            },
                        },
                    }}
                    renderCard={(item) => <CarouselItem {...item} />}
                    backgroundColor={"transparent"}
                    verticalSwipe={false}
                    cardIndex={0}
                    animateCardOpacity
                    cardStyle={{
                        height: ITEM_HEIGHT,
                        flex: 1,
                    }}
                />
            </View>
            <BottomOptions />
        </View>
    );
};

export default Carousel;
