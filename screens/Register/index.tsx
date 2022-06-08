import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const Register = () => {
    return (
        <SafeAreaView style={tw`h-full flex bg-rose-600 p-5`}>
            <View style={tw`bg-white rounded-md shadow-sm p-2`}>
                <Text>Register</Text>
            </View>
        </SafeAreaView>
    );
};

export default Register;
