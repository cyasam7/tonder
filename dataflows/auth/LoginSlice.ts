import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ILoginState from "./ILoginState";
import { ILoginRespose, IUserBase } from "./IThunkTypes";
import { checkSession, logIn, logOut } from "./LoginThunks";

const initialState: ILoginState = {
    isAuth: false,
    isLoading: true,
    user: null,
    token: "",
    refreshToken: "",
} as const;

const sliceLogin = createSlice({
    name: "Auth",
    initialState,
    reducers: {},
    extraReducers: {
        [logIn.fulfilled.type]: (state, action: PayloadAction<ILoginRespose>) => {
            state.isAuth = true;
            state.isLoading = false;
            state.refreshToken = action.payload.refreshToken;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        [logIn.pending.type]: (state, action) => {},
        [logIn.rejected.type]: (state, action) => {},
        //Log Out
        [logOut.fulfilled.type]: (state, action) => {
            state.isAuth = false;
            state.isLoading = false;
            state.user = null;
            state.token = "";
            state.refreshToken = "";
        },
        [logOut.rejected.type]: (state, action) => {},
        [logOut.pending.type]: (state, action) => {},
        // Checksession
        [checkSession.fulfilled.type]: (state, action: PayloadAction<IUserBase>) => {
            state.user = action.payload;
        },
        [checkSession.rejected.type]: (state, action) => {},
        [checkSession.pending.type]: (state, action) => {
            state.isAuth = false;
            state.isLoading = false;
            state.user = null;
            state.token = "";
            state.refreshToken = "";
        },
    },
});

export const AuthReducer = sliceLogin.reducer;
