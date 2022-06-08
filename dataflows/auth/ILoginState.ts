import { IUserBase } from "./IThunkTypes";

export default interface ILoginState {
    isAuth: boolean;
    isLoading: boolean;
    user: IUserBase | null;
    token: string;
    refreshToken: string;
}
