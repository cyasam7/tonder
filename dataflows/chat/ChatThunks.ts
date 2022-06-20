import { createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../utils/axiosConfig";
import { IUserBase } from "../auth/IThunkTypes";

export const listMatches = createAsyncThunk("matching/get-list-matches", async (userId: string) => {
    const { data } = await Get<IUserBase[]>(`/match/user/${userId}`);
    return data;
});
