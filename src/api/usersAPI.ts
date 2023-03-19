import {instance} from "./instance";
import {ResponseType, UserType} from "./authAPI";


export const usersAPI = {
    fetchUsers() {
        return instance.get<ResponseType<UserType[]>>(`users/fetch`).then((response) => response.data)
    },
    changeStatusUsers(data: {ids: number[], status: string}) {
        return instance.put<ResponseType<ChangeStatusResponse>>(`users/status`, data).then((response) => response.data)
    },
   deleteUsers(data: {ids: number[]}) {
       console.log(data)
        return instance.delete<ResponseType<{ids: number[]}>>(`users/delete`, {data}).then((response) => response.data)
    },
}

export type ChangeStatusResponse = {
        ids: number[]
        status: string
}
