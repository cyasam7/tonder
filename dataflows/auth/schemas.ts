import * as yup from "yup";

export const schemaLogin = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().max(15).min(8).required(),
});
