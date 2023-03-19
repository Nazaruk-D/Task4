import {createBrowserRouter} from "react-router-dom";
import Login from "../../feauters/auth/login/Login";
import Registration from "../../feauters/auth/registration/Registration";
import UsersTable from "../../feauters/usersTable/UsersTable";

export const routes = {
    mainPage: '/Task4/',
    login: '/Task4/login',
    registration: '/Task4/registration',
}

export const router = createBrowserRouter([
    {
        path: routes.mainPage,
        element: <UsersTable/>,
        errorElement: <div>Error page</div>
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