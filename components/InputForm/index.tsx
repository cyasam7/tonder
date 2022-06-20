import { FormikProps } from "formik";
import React from "react";
import { HelperText, TextInput } from "react-native-paper";
import { TextInputProps } from "react-native-paper/lib/typescript/components/TextInput/TextInput";
import { IRegisterFormik } from "../../dataflows/auth/IThunkTypes";

export type IInputFormProps = {
    formik: FormikProps<IRegisterFormik>;
    name: keyof IRegisterFormik;
    label: string;
    mode: "outlined" | "flat";
} & TextInputProps;

const InputForm: React.FC<IInputFormProps> = ({ formik, name, mode, label, ...rest }) => {
    const hasError = (value: keyof IRegisterFormik): boolean => {
        return !!(formik.errors[value] && formik.touched[value]);
    };

    return (
        <>
            <TextInput
                style={{ backgroundColor: "transparent" }}
                onChangeText={formik.handleChange(name)}
                mode={mode}
                label={label}
                value={formik.values[name]}
                {...rest}
                theme={{ colors: { placeholder: "#4d4d4d" } }}
            />
            {hasError(name) && (
                <HelperText type="error" visible={hasError(name)}>
                    {formik.errors[name]}
                </HelperText>
            )}
        </>
    );
};

export default InputForm;
