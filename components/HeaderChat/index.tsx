import { useNavigation } from "@react-navigation/native";
import { Header, Icon } from "@rneui/base";
import React from "react";

const HeaderChat = () => {
    const navigation = useNavigation();

    const handleBack = () => navigation.canGoBack() && navigation.goBack();
    return (
        <Header
            leftComponent={
                <Icon
                    name="arrow-back"
                    type="ionicon"
                    onPress={handleBack}
                    size={26}
                    color={"white"}
                />
            }
            centerComponent={{
                text: "Alexander Serrano",
                style: { color: "#fff", fontWeight: "bold" },
            }}
            backgroundColor="#FD0E42"
            placement="left"
        />
    );
};

export default HeaderChat;
