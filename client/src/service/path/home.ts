import { Get } from '../api/server.js'

export interface FcResponse<T> {
    errno: string;
    errmsg: string;
    data: T;
}

export type ApiResponse<T> = Promise<[any, FcResponse<T> | undefined]>;

 
function getSideBar<T = any >(): ApiResponse<T> {
    return Get<T>('/users/1') 
}

export const homeApi = {
    getSideBar
}