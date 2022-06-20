import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CarouselChat from "../../components/CarouselChat";
import CarouselMatches from "../../components/CarouselMatches";
import { selectorAuthUser } from "../../dataflows/auth/LoginSelectors";
import { listMatches } from "../../dataflows/chat/ChatThunks";
import { matchesSelector } from "../../dataflows/chat/IChatSelectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./styles";

export default function MatchesScreen() {
    const matches = useAppSelector(matchesSelector);
    const user = useAppSelector(selectorAuthUser);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listMatches(user?.id || ""));
    }, [user]);

    return (
        <SafeAreaView style={styles.screen}>
            <CarouselMatches matches={matches} />
            <CarouselChat matches={matches} />
        </SafeAreaView>
    );
}
