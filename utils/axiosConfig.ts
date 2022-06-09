import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import { AsyncStorageValues, deleteItem, getItem } from "./localStorage";

const instance = axios.create({
    baseURL: "http://192.168.0.29:4000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
export interface ITokens {
    refreshToken: string;
    token: string;
}

const refreshTokens = async (data: ITokens): Promise<string> => {
    let newToken = data.token;
    if (!isValidToken(data.refreshToken)) return "";
    if (!isValidToken(data.token)) newToken = await getNewToken(data.refreshToken);
    return newToken;
};

const isValidToken = (token: string): boolean => {
    const tokenDecoded = jwtDecode(token) as { exp: number; iat: number };
    return Date.now() / 1000 < tokenDecoded.exp;
};

const getNewToken = async (token: string): Promise<string> => {
    const resp = await instance.get(`/auth/refresh-token?refreshToken=${token}`);
    return resp.data.token;
};

const interceptorConfig = async (config: any): Promise<AxiosRequestConfig> => {
    const items = await getItem<AsyncStorageValues>("TOKENS");
    if (items && !config.url?.includes("refresh-token")) {
        const { refreshToken, token } = items;
        const tokenVerified = await refreshTokens({
            refreshToken,
            token,
        });
        config.headers.Authorization = `Bearer ${tokenVerified}`;
    }
    return config;
};
const errorConfig = async (err: any): Promise<any> => {
    if (err.response.status === 401) {
        await deleteItem("TOKENS");
    }
    return err;
};

instance.interceptors.request.use(interceptorConfig, errorConfig);

export async function Post<T>(url: string, data: any): Promise<AxiosResponse<T>> {
    return await instance.post(url, data);
}
export async function Get<T>(url: string): Promise<AxiosResponse<T>> {
    return await instance.get(url);
}
export async function Patch<T>(url: string, data: any): Promise<AxiosResponse<T>> {
    return await instance.patch(url, data);
}
export async function Put<T>(url: string, data: any): Promise<AxiosResponse<T>> {
    return await instance.put(url, data);
}
export async function Delete<T>(url: string): Promise<AxiosResponse<T>> {
    return await instance.delete(url);
}
