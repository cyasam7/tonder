import React from "react";
import { Text } from "react-native";
import { View } from "../Themed";

interface IPageProps {
    index: number;
    title: string;
}

const Page: React.FC<IPageProps> = ({ title, index }) => {
    console.log(index);

    return <View style={{ flex: 1, backgroundColor: `rgba(0,0,256,0.${index + 2})` }} />;
};

export default Page;
