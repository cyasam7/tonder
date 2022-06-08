import { SafeAreaView } from "react-native-safe-area-context";
import CarouselChat from "../../components/CarouselChat";
import CarouselMatches from "../../components/CarouselMatches";
import styles from "./styles";

export default function MatchesScreen() {
    const matches = new Array(14).fill(1);

    return (
        <SafeAreaView style={styles.screen}>
            <CarouselMatches matches={matches} />
            <CarouselChat matches={matches} />
        </SafeAreaView>
    );
}
