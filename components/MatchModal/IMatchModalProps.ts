import { IUserBase } from "../../dataflows/auth/IThunkTypes";

export interface IMatchModalProps {
    visible: boolean;
    users: IUserBase[];
}
