import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { Get } from "../../utils/axiosConfig";
import { IUserBase } from "../auth/IThunkTypes";

export const sendRequestToMatch = createAsyncThunk(
    "matching/send-request-to-match",
    async () => {}
);
export const listUsers = createAsyncThunk(
    "matching/get-list-users",
    async (userId: string, thunkApi) => {
        const state = thunkApi.getState() as RootState;

        const { data } = await Get<IUserBase[]>(`/match/matches/user/${userId}`);

        return data;
    }
);
