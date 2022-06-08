import { createAsyncThunk } from "@reduxjs/toolkit";
import { Get, instance } from "../../utils/axiosConfig";
import { deleteItem, setObjectItem } from "../../utils/localStorage";
import { ILoginRespose, ILoginThunk, IUserBase } from "./IThunkTypes";

export const logIn = createAsyncThunk(
    "auth/logIn",
    async ({ email, password }: ILoginThunk): Promise<ILoginRespose> => {
        const resp = await instance.post("/auth/login", {
            auth: {
                username: email,
                password,
            },
        });
        const { refreshToken, token } = resp.data as ILoginRespose;
        await setObjectItem("TOKENS", { refreshToken, token });
        return resp.data;
    }
);

export const checkSession = createAsyncThunk("auth/check-session", async (): Promise<IUserBase> => {
    const resp = await Get("/whoami");
    return resp.data as IUserBase;
});

export const logOut = createAsyncThunk("auth/logOut", async (): Promise<void> => {
    deleteItem("TOKENS");
});
