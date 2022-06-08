import { RootState } from "../../redux/store";

export const selectorAuthIsAuth = (state: RootState) => state.Auth.isAuth;

export const selectorAuthIsLoading = (state: RootState) => state.Auth.isLoading;

export const selectorAuthUser = (state: RootState) => state.Auth.user;
