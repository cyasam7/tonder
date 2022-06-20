import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserBase, IUserMatchedBase } from "../auth/IThunkTypes";
import { listChats, listMatches } from "./ChatThunks";
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
        AddMatch: (state, action: PayloadAction<IUserMatchedBase>) => {
            state.matches = [...state.matches, action.payload];
        },
        CleanMatches: (state) => {
            state.matches = [];
        },
    },
    extraReducers: {
        [listMatches.fulfilled.type]: (state, action: PayloadAction<IUserMatchedBase[]>) => {
            state.matches = action.payload;
            state.isLoading = false;
        },
        [listMatches.pending.type]: (state) => {
            state.isLoading = true;
        },
        [listMatches.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
            state.matches = [];
        },
        //List chats
        [listChats.fulfilled.type]: (state, action: PayloadAction<IUserMatchedBase[]>) => {
            state.chats = action.payload;
            state.isLoading = false;
        },
        [listChats.pending.type]: (state) => {
            state.isLoading = true;
        },
        [listChats.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
            state.chats = [];
        },
    },
});

export const { AddMatch, CleanMatches } = slice.actions;

export const chatReducer = slice.reducer;
