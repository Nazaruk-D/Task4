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
        dispatch(setAppStatusAC({status: 'failed'}))
        const error: AxiosError = err
        console.log(error)
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatusAC({status: 'idle'}))
    }
})

export const changeStatusUsersTC = createAsyncThunk(('auth/changeStatus'), async (param: { ids: number[], status: string }, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await usersAPI.changeStatusUsers(param)
        thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
        return {value: res.data}
    } catch (err: any) {
        const error: AxiosError = err
        return thunkAPI.rejectWithValue({errors: [error.message], fieldErrors: undefined})
    } finally {
        thunkAPI.dispatch(setAppStatusAC({status: 'idle'}))
    }
})

export const deleteUsersTC = createAsyncThunk(('auth/delete'), async (param: { ids: number[] }, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await usersAPI.deleteUsers(param)
        thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
        return res.data.ids
    } catch (err: any) {
        const error: AxiosError = err
        return thunkAPI.rejectWithValue({errors: [error.message], fieldErrors: undefined})
    } finally {
        thunkAPI.dispatch(setAppStatusAC({status: 'idle'}))
    }
})

const slice = createSlice({
        name: "users",
        initialState: [] as DomainUsersType[],
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
            builder.addCase(changeStatusUsersTC.fulfilled, (state, action: PayloadAction<{ value: { ids: number[], status: any } }>) => {
                const {ids, status} = action.payload.value;
                return state.map(u => ids.includes(u.id) ? {...u, status} : u);
            })
            builder.addCase(deleteUsersTC.fulfilled, (state, action) => {
                return state.filter(u => !action.payload.includes(u.id));
            })
        },

    }
)

export const usersReducer = slice.reducer;
export const {changeUserStatusAC, changeAllUserStatusAC} = slice.actions;

export type DomainUsersType = UserType & { isSelected: boolean }
