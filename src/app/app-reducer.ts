import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI} from "../api/authAPI";
import {setIsLoggedInAC} from "../feauters/auth/auth-reducer";

export const initializeAppTC = createAsyncThunk(('app/initializeApp'), async (param, {dispatch}) => {
    try {
        const res = await authAPI.me()
        if (res.status === 200) {
            dispatch(setAppStatusAC({status: 'loading'}))
            dispatch(setIsLoggedInAC({value: true}));
        } else {
            console.log(res.data.message[0])
        }
    } catch (err: any) {
        if (err.request.status === 401){
            return
        } else {
            console.log(err.message)
        }
    } finally {
        dispatch(setAppStatusAC({status: 'idle'}))
    }
})


const slice = createSlice({
    name: "app",
    initialState: {
        status: 'loading' as RequestStatusType,
        initialized: false
    },
    reducers: {
        setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },
    },
    extraReducers: builder => {
        builder.addCase(initializeAppTC.fulfilled, (state) => {
            state.initialized = true
        })
    }
})

export const appReducer = slice.reducer;
export const {setAppStatusAC} = slice.actions;
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'




