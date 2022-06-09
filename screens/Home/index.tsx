import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import CarouselCards from "../../components/CarouselCards";
import { useDispatch } from "react-redux";
import { StatusBar } from "react-native";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={["#FD0E42", "#C30F31"]} style={styles.background} />
            <CarouselCards />
            <StatusBar hidden />
        </SafeAreaView>
    );
};
export default Home;
