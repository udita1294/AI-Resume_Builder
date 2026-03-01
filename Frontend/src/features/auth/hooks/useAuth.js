import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import {login,register,logout,getMe} from "../services/auth.api.js"

export const useAuth = () => {
    const context = useContext(AuthContext);
    const {user,setUser,loading,setLoading} = context;

    const handleLogin = async ({email,password}) => {
        setLoading(true)
        const data = await login({email,password})
        setUser(data.user)
        setLoading(false)
    }
}