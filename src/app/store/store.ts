import {AnyAction, combineReducers} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {appReducer} from "../app-reducer";
import {authReducer} from "../../feauters/auth/auth-reducer";
import {usersReducer} from "../../feauters/usersTable/users-reducer";


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    users: usersReducer,
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})


export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;

