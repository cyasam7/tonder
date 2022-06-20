import * as yup from "yup";

const MESSAGE_MIN = (value: number) => `Minimo ${value} caracteres`;
const MESSAGE_MAX = (value: number) => `Maximo ${value} caracteres`;
const MESSAGE_REQUIRED = `Campo  requerido.`;
const MESSAGE_EMAIL = `Correo no valido`;

export const schemaLogin = yup.object().shape({
    email: yup.string().email().required(MESSAGE_REQUIRED).typeError(MESSAGE_REQUIRED),
    password: yup
        .string()
        .max(15, MESSAGE_MAX(15))
        .min(8, MESSAGE_MIN(8))
        .required(MESSAGE_REQUIRED)
        .typeError(MESSAGE_REQUIRED),
});

export const schemaRegister = yup.object().shape({
    name: yup
        .string()
        .min(3, MESSAGE_MIN(3))
        .max(25, MESSAGE_MAX(25))
        .required(MESSAGE_REQUIRED)
        .typeError(MESSAGE_REQUIRED),
    lastName: yup
        .string()
        .min(3, MESSAGE_MIN(3))
        .max(25, MESSAGE_MAX(25))
        .required(MESSAGE_REQUIRED)
        .typeError(MESSAGE_REQUIRED),
    email: yup.string().email().required(MESSAGE_REQUIRED).typeError(MESSAGE_REQUIRED),
    phone: yup.string().required(MESSAGE_REQUIRED).typeError(MESSAGE_REQUIRED),
    password: yup
        .string()
        .min(6, MESSAGE_MIN(6))
        .max(25, MESSAGE_MAX(25))
        .required(MESSAGE_REQUIRED)
        .typeError(MESSAGE_REQUIRED),
    confirmPassword: yup
        .string()
        .min(6, MESSAGE_MIN(6))
        .max(25, MESSAGE_MAX(25))
        .required(MESSAGE_REQUIRED)
        .oneOf([yup.ref("password")], "Contraseña no coincide"),
});
