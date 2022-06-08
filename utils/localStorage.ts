import asyncStorage from "@react-native-async-storage/async-storage";

export interface IAsyncStorageTokens {
    token: string;
    refreshToken: string;
}

export type AsyncStorageKeys = "TOKENS";
export type AsyncStorageValues = IAsyncStorageTokens;

export async function getItem<T>(key: AsyncStorageKeys): Promise<T | null> {
    const item = await asyncStorage.getItem(key);
    return !!item ? (JSON.parse(item) as T) : null;
}

export async function deleteItem(key: AsyncStorageKeys): Promise<void> {
    return await asyncStorage.removeItem(key);
}

export async function setItem(key: AsyncStorageKeys, data: string): Promise<void> {
    await asyncStorage.setItem(key, data);
}
export async function setObjectItem(
    key: AsyncStorageKeys,
    data: AsyncStorageValues
): Promise<void> {
    const dataStringed = JSON.stringify(data);
    await asyncStorage.setItem(key, dataStringed);
}
