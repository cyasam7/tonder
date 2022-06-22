import { IMessageBase } from "../../types";
import { IUserBase, IUserMatchedBase } from "../auth/IThunkTypes";

export interface IChatState {
    isLoading: boolean;
    error: string | null;
    chats: any[];
    matches: IUserMatchedBase[];
    message: IMessageBase[];
}
