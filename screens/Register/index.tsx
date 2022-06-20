import { Input, Text } from "@rneui/base";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, HelperText, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import InputForm from "../../components/InputForm";
import { width } from "../../constants/Layout";
import { IRegisterFormik } from "../../dataflows/auth/IThunkTypes";
import { schemaRegister } from "../../dataflows/auth/schemas";
import { IRegisterProps } from "./IRegisterProps";

const Register: React.FC<IRegisterProps> = ({ scroll }) => {
    const formik = useFormik<IRegisterFormik>({
        initialValues: {
            email: "",
            password: "",
            lastName: "",
            name: "",
            phone: "",
            confirmPassword: "",
        },
        validationSchema: schemaRegister,
        async onSubmit(values, formikHelpers) {
            alert(values);
            formikHelpers.resetForm();
        },
    });

    const hasError = (value: keyof IRegisterFormik): boolean => {
        return !!(formik.errors[value] && formik.touched[value]);
    };

    const handleBack = () => {
        scroll(0);
        formik.resetForm();
    };

    return (
        <SafeAreaView style={[tw`h-full flex`, { width, backgroundColor: "#fff" }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={tw`m-5`}>
                    <Text h3>Crear cuenta</Text>
                    <View style={{ marginBottom: 20 }}>
                        <InputForm formik={formik} name="name" label="Nombre" mode="flat" />
                        <InputForm formik={formik} name="lastName" label="Apellido" mode="flat" />
                        <InputForm formik={formik} name="email" label="Correo" mode="flat" />
                        <InputForm formik={formik} name="phone" label="Telefono" mode="flat" />
                        <InputForm formik={formik} name="password" label="Contraseña" mode="flat" />
                        <InputForm
                            formik={formik}
                            name="confirmPassword"
                            label="Confirmar contraseña"
                            mode="flat"
                        />
                    </View>
                    <Button onPress={formik.handleSubmit} mode="contained">
                        Crear cuenta
                    </Button>
                    <View style={{ margin: 5 }} />
                    <Button onPress={handleBack} mode="text">
                        Volver
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Register;
