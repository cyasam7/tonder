import { createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../utils/axiosConfig";
import { IUserBase } from "../auth/IThunkTypes";

export const listUsers = createAsyncThunk("matching/get-list-users", async (userId: string) => {
    return (await Get<IUserBase[]>(`/match/matches/user/${userId}`)).data;
});
