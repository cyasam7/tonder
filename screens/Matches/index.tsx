import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CarouselChat from "../../components/CarouselChat";
import CarouselMatches from "../../components/CarouselMatches";
import { selectorAuthUser } from "../../dataflows/auth/LoginSelectors";
import { listChats, listMatches } from "../../dataflows/chat/ChatThunks";
import { chatsSelector, matchesSelector } from "../../dataflows/chat/IChatSelectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./styles";

export default function MatchesScreen() {
    const matches = useAppSelector(matchesSelector);
    const chats = useAppSelector(chatsSelector);
    const user = useAppSelector(selectorAuthUser);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listMatches(user?.id || ""));
        dispatch(listChats(user?.id || ""));
    }, [user]);

    return (
        <SafeAreaView style={styles.screen}>
            <CarouselMatches matches={matches} />
            <CarouselChat matches={chats} />
        </SafeAreaView>
    );
}
