import {instance} from "./instance";
import {ResponseType, UserType} from "./authAPI";


export const usersAPI = {
    fetchUsers() {
        return instance.get<ResponseType<UserType[]>>(`users/fetch`).then((response) => response.data)
    },
}