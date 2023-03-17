import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, LoginDataType, RegistrationDataType} from "../../api/authAPI";
import {setAppStatusAC} from "../../app/app-reducer";


export const loginTC = createAsyncThunk<undefined, LoginDataType, { rejectValue: { errors: Array<string>, fieldErrors?: Array<any> } }>(('auth/login'), async (param: LoginDataType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await authAPI.login(param)
        if (res.statusCode === 200) {
            thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
            return
        } else {
            console.log(res.message)
            return thunkAPI.rejectWithValue({errors: res.message})
        }
    } catch (err: any) {
        const error: AxiosError = err
        return thunkAPI.rejectWithValue({errors: [error.message], fieldErrors: undefined})
    } finally {
        thunkAPI.dispatch(setAppStatusAC({status: 'idle'}))
    }
})

export const logoutTC = createAsyncThunk(('auth/logout'), async (param, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await authAPI.logout()
        if (res.statusCode === 200) {
            thunkAPI.dispatch(setIsisRegisteredAC({value: false}))
            thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
            return
        } else {
            console.log(res.message)
            return thunkAPI.rejectWithValue({})
        }
    } catch (err: any) {
        const error: AxiosError = err
        return thunkAPI.rejectWithValue({errors: [error.message], fieldErrors: undefined})
    }
})

export const registrationTC = createAsyncThunk<undefined, RegistrationDataType, { rejectValue: { errors: Array<string>, fieldErrors?: Array<any> } }>(('auth/registration'), async (param: RegistrationDataType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await authAPI.registration(param)
        if (res.statusCode === 201) {
            thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
            return
        } else {
            return thunkAPI.rejectWithValue({errors: ["error"], fieldErrors: []})
        }
    } catch (err: any) {
        thunkAPI.dispatch(setAppStatusAC({status: 'failed'}))
        const error: AxiosError = err.response.data
        return thunkAPI.rejectWithValue({errors: [error.message], fieldErrors: undefined})
    }
})


const slice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        isRegistered: false
    },
    reducers: {
        setIsLoggedInAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isLoggedIn = action.payload.value
        },
        setIsisRegisteredAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isRegistered = action.payload.value
        }
    },
    extraReducers: builder => {
        builder.addCase(loginTC.fulfilled, (state) => {
            state.isLoggedIn = true
        })
        builder.addCase(logoutTC.fulfilled, (state) => {
            state.isLoggedIn = false
        })
        builder.addCase(registrationTC.fulfilled, (state) => {
            state.isRegistered = true
        })
    }
})

export const authReducer = slice.reducer;
export const {setIsLoggedInAC, setIsisRegisteredAC} = slice.actions;
