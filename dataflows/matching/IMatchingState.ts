import { IUserBase } from "../auth/IThunkTypes";

export interface IMatchingState {
    users: IUserBase[];
    isLoading: boolean;
    showMatchModal: boolean;
    infoMatchModal: IUserBase[];
}
