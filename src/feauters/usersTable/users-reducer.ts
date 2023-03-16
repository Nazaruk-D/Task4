import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, RegistrationDataType, UserType} from "../../api/authAPI";
import {setAppStatusAC} from "../../app/app-reducer";
import {usersAPI} from "../../api/usersAPI";


export const fetchUsersTC = createAsyncThunk(('users/fetch'), async (param, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    const res = await usersAPI.fetchUsers()
    try {
        dispatch(setAppStatusAC({status: 'succeeded'}))
        return {users: res.data}
    } catch (err: any) {
        dispatch(setAppStatusAC({status: 'failed'}))
        const error: AxiosError = err
        console.log(error)
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatusAC({status: 'idle'}))
    }
})

export const blockingUsersTC = createAsyncThunk(('auth/registration'), async (param: DomainUsersType[], thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await usersAPI.blockingUsers(param)
        thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
        return {users: res.data}
    } catch (err: any) {
        thunkAPI.dispatch(setAppStatusAC({status: 'failed'}))
        const error: AxiosError = err.response.data
        return thunkAPI.rejectWithValue({errors: [error.message], fieldErrors: undefined})
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
                status: "blocked",
                isSelected: false
            },
            {
                id: 2,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "active",
                isSelected: false
            },
            {
                id: 3,
                name: "Alex",
                email: "test@mail.ru",
                registerData: "22.02.2022",
                loginData: "22.02.2022",
                status: "active",
                isSelected: true
            },

        ] as DomainUsersType[],
        reducers: {
            changeUserStatusAC(state, action: PayloadAction<{ id: number, status: boolean }>) {
                const index = state.findIndex(u => u.id === action.payload.id)
                state[index].isSelected = action.payload.status
            },
            changeAllUserStatusAC(state, action) {
                return state.map(u => ({...u, isSelected: action.payload}))
            },
        },
        extraReducers: builder => {
            builder.addCase(fetchUsersTC.fulfilled, (state, action) => {
                return action.payload.users.map(u => ({...u, isSelected: false}))
            })
            builder.addCase(blockingUsersTC.fulfilled, (state, action) => {
                state.map((x) => {
                    const updatedObject = action.payload.users.find((y) => y.id === x.id);
                    return updatedObject ? updatedObject : x;
                });
            })
        },

    }
)

export const usersReducer = slice.reducer;
export const {changeUserStatusAC, changeAllUserStatusAC} = slice.actions;

export type DomainUsersType = UserType & { isSelected: boolean }
