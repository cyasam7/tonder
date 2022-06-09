import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Modal, Text, TouchableWithoutFeedback, View } from "react-native";
import { Avatar } from "react-native-paper";
import { matchingSelector } from "../../dataflows/matching/IMatchingSelectos";
import { closeMatchModal } from "../../dataflows/matching/MatchingSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IMatchModalProps } from "./IMatchModalProps";

const MatchModal: React.FC<IMatchModalProps> = () => {
    const { showMatchModal, infoMatchModal } = useAppSelector(matchingSelector);
    const dispatch = useAppDispatch();
    const handleCloseModal = () => {
        dispatch(closeMatchModal());
    };
    console.log(infoMatchModal);
    return (
        <Modal visible={showMatchModal} transparent animationType="slide">
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,.9)",
                }}
            >
                <View>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 40 }}>
                        Tienes un match
                    </Text>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 22 }}>
                        {`Tu y ${infoMatchModal[1]?.name} tienen un like en común`}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginVertical: 50,
                        }}
                    >
                        <Avatar.Image
                            size={150}
                            source={{
                                uri: infoMatchModal[0]?.photo,
                            }}
                        />
                        <Avatar.Image
                            size={150}
                            source={{
                                uri: infoMatchModal[1]?.photo,
                            }}
                        />
                    </View>
                    <TouchableWithoutFeedback onPress={handleCloseModal}>
                        <LinearGradient colors={["#FD0E42", "#C30F31"]}>
                            <Text
                                style={{
                                    color: "white",
                                    paddingHorizontal: 2,
                                    paddingVertical: 10,
                                    textAlign: "center",
                                }}
                            >
                                Continuar
                            </Text>
                        </LinearGradient>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </Modal>
    );
};

export default MatchModal;
