import { RootState } from "../../redux/store";

export const chatsSelector = (state: RootState) => state.Chats.chats;
export const errorChatSelector = (state: RootState) => state.Chats.error;
export const isLoadingSelector = (state: RootState) => state.Chats.isLoading;
export const matchesSelector = (state: RootState) => state.Chats.matches;
export const messagesSelector = (state: RootState) => state.Chats.message;
