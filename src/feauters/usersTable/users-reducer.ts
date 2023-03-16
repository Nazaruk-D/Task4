import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, UserType} from "../../api/authAPI";
import {setAppStatusAC} from "../../app/app-reducer";
import {usersAPI} from "../../api/usersAPI";


export const fetchUsersTC = createAsyncThunk(('users/fetch'), async (param, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    const res = await usersAPI.fetchUsers()
    try {
        dispatch(setAppStatusAC({status: 'succeeded'}))
        return {users: res.data}
    } catch (err: any) {
        const error: AxiosError = err
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatusAC({status: 'idle'}))
    }
})

const slice = createSlice({
        name: "users",
        initialState: [
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
            {
                id: 1,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "blocked"
            },
        ] as UserType[],
        reducers: {},
        extraReducers: builder => {
            builder.addCase(fetchUsersTC.fulfilled, (state, action) => {
                return action.payload.users.map(u => u)
            })
        },
    }
)

export const usersReducer = slice.reducer;
export const {} = slice.actions;
