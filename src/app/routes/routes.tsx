import {createBrowserRouter} from "react-router-dom";
import Login from "../../feauters/auth/login/Login";
import Registration from "../../feauters/auth/registration/Registration";
import Table from "../content/Table/Table";

export const routes = {
    mainPage: '/',
    login: '/login',
    registration: '/registration',
}

export const router = createBrowserRouter([
    {
        path: routes.mainPage,
        element: <Table/>,
        errorElement: <div>Error</div>
    },
    {
        path: routes.login,
        element: <Login/>
    },
    {
        path: routes.registration,
        element: <Registration/>
    },
])