import React, { FC, useEffect, useMemo, useState } from "react";
import { Socket } from "socket.io-client";
import io from "socket.io-client";
import { AppState } from "react-native";

export interface IContextSocket {
    socket: Socket | null;
    isConnected: boolean;
}

const Context = React.createContext<IContextSocket | null>(null);

export const SocketProvider: FC = ({ children }) => {
    const [Socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const socket = io("http://192.168.0.30:81", { autoConnect: true });
        setSocket(socket);
        return () => {
            Socket?.disconnect();
        };
    }, []);

    useMemo(() => {
        return {
            Socket,
        };
    }, [Socket]);

    return (
        <Context.Provider value={{ isConnected: !!Socket?.connected, socket: Socket }}>
            {children}
        </Context.Provider>
    );
};
export const useSocket = () => {
    const context = React.useContext(Context);
    if (!context) {
        throw new Error("No esta dentro del contexto");
    }
    return context;
};
