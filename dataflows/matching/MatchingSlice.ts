import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserBase } from "../auth/IThunkTypes";
import { IMatchingState } from "./IMatchingState";
import { listUsers } from "./MatchingThunks";

const initialState: IMatchingState = {
    isLoading: true,
    users: [],
    infoMatchModal: [],
    showMatchModal: false,
};

export const slice = createSlice({
    name: "matching",
    initialState,
    reducers: {
        openMatchModal: (state, action: PayloadAction<{ users: IUserBase[] }>) => {
            state.infoMatchModal = action.payload.users;
            state.showMatchModal = true;
        },
        closeMatchModal: (state) => {
            state.showMatchModal = false;
            state.infoMatchModal = [];
        },
    },
    extraReducers: {
        [listUsers.fulfilled.type]: (state, action: PayloadAction<IUserBase[]>) => {
            state.users = action.payload;
            state.isLoading = false;
        },
        [listUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [listUsers.rejected.type]: (state) => {
            state.isLoading = true;
        },
    },
});

export const { openMatchModal, closeMatchModal } = slice.actions;

export const MatchinReducer = slice.reducer;
