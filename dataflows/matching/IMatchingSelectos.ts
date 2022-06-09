import { RootState } from "../../redux/store";
import { IUserBase } from "../auth/IThunkTypes";
import { IMatchingState } from "./IMatchingState";

export const isLoadingMatchingSelector = (state: RootState): boolean => state.Matching.isLoading;
export const usersMatchingSelector = (state: RootState): IUserBase[] => state.Matching.users;
export const matchingSelector = (state: RootState): IMatchingState => state.Matching;
