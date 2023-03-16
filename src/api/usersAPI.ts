import {instance} from "./instance";
import {ResponseType, UserType} from "./authAPI";
import {DomainUsersType} from "../feauters/usersTable/users-reducer";


export const usersAPI = {
    fetchUsers() {
        return instance.get<ResponseType<UserType[]>>(`users/fetch`).then((response) => response.data)
    },
    blockingUsers(data: DomainUsersType[]) {
        return instance.put<ResponseType<UserType[]>>(`users/blocking`, data).then((response) => response.data)
    },
}