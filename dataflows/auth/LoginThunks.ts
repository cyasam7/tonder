import { createAsyncThunk } from "@reduxjs/toolkit";
import { Get, Post } from "../../utils/axiosConfig";
import { deleteItem, getItem, setObjectItem } from "../../utils/localStorage";
import { ILoginRespose, ILoginThunk, IUserBase } from "./IThunkTypes";

export const logIn = createAsyncThunk("auth/logIn", async ({ email, password }: ILoginThunk) => {
    const resp = await Post<ILoginRespose>("/auth/login", {
        email,
        password,
    });
    const { refreshToken, token } = resp.data;

    await setObjectItem("TOKENS", { refreshToken, token });
    return resp.data;
});

export const checkSession = createAsyncThunk("auth/check-session", async () => {
    try {
        const resp = await Get("/auth/whoami");
        return resp.data as IUserBase;
    } catch (error) {
        deleteItem("TOKENS");
        throw new Error("error");
    }
});

export const logOut = createAsyncThunk("auth/logOut", async () => {
    await deleteItem("TOKENS");
});
