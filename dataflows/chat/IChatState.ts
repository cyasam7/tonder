import { IUserBase } from "../auth/IThunkTypes";

export interface IChatState {
    isLoading: boolean;
    error: string | null;
    chats: any[];
    matches: IUserBase[];
}
