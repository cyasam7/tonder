import { IMessageBase } from "../../types";

export interface IMessageChatProps {
    message: IMessageBase;
    isMine?: boolean;
}
