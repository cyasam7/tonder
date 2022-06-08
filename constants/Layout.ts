import { Dimensions } from "react-native";

export const { height, width } = Dimensions.get("window");

export const isSmallDevice = width < 375;
