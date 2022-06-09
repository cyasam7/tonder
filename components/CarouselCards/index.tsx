import React, { useEffect, useRef } from "react";
import { Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import CarouselItem from "./CarouselItem";
import styles, { overlayLaps } from "./styles";
import BottomOptions from "../BottomOptions";
import { ITEM_HEIGHT } from "./CarouselItem/styles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { listUsers } from "../../dataflows/matching/MatchingThunks";
import { selectorAuthUser } from "../../dataflows/auth/LoginSelectors";
import { matchingSelector } from "../../dataflows/matching/IMatchingSelectos";
import { useSocket } from "../../hooks/useSocket";
import MatchModal from "../MatchModal";
import { openMatchModal } from "../../dataflows/matching/MatchingSlice";

const Carousel = () => {
    const { socket } = useSocket();
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectorAuthUser);
    const { users, isLoading } = useAppSelector(matchingSelector);

    useEffect(() => {
        dispatch(listUsers(user?.id || ""));
    }, []);

    useEffect(() => {
        socket?.on("swipe", (value) => {
            if (value) dispatch(openMatchModal(value));
        });
    }, []);

    const handleSendRequest = (index: number, request: boolean) => {
        if (user) {
            const { id: userRequesed } = users[index];
            const { id } = user;
            socket?.emit("swipe", {
                userRequesed,
                user: id,
                sent: request,
            });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.backgroundText}>Discover</Text>
            <View style={styles.swiperContainer}>
                {isLoading ? null : (
                    <Swiper
                        cards={users}
                        overlayLabels={overlayLaps}
                        renderCard={(item) => <CarouselItem user={item} />}
                        backgroundColor={"transparent"}
                        verticalSwipe={false}
                        keyExtractor={(item) => item.id.toString()}
                        onSwipedLeft={(value) => handleSendRequest(value, false)}
                        onSwipedRight={(value) => handleSendRequest(value, true)}
                        cardIndex={0}
                        animateCardOpacity
                        cardStyle={{ height: ITEM_HEIGHT, flex: 1 }}
                    />
                )}
            </View>
            <BottomOptions />
            <MatchModal />
        </View>
    );
};

export default Carousel;
