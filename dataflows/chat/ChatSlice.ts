import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserBase } from "../auth/IThunkTypes";
import { listMatches } from "./ChatThunks";
import { IChatState } from "./IChatState";

const initialState: IChatState = {
    isLoading: true,
    error: null,
    chats: [],
    matches: [],
};

const slice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        AddMatch: (state, action: PayloadAction<IUserBase>) => {
            state.matches = [...state.matches, action.payload];
        },
        CleanMatches: (state) => {
            state.matches = [];
        },
    },
    extraReducers: {
        [listMatches.fulfilled.type]: (state, action: PayloadAction<IUserBase[]>) => {
            state.matches = action.payload;
            state.isLoading = false;
        },
        [listMatches.pending.type]: (state) => {
            state.isLoading = true;
        },
        [listMatches.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
            state.chats = [];
            state.matches = [];
        },
    },
});

export const { AddMatch, CleanMatches } = slice.actions;

export const chatReducer = slice.reducer;
