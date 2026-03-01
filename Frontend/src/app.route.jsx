import {createBrowserRouter} from 'react-router'
import Login from './features/auth/Pages/Login'
import Register from './features/auth/Pages/Register'
import Protected from './features/auth/Components/Protected'

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/",
        element: <Protected><p><h1>Home Page</h1></p></Protected>
    }
])