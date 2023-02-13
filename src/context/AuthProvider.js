import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const[Auth, setAuth] = useState({});
    const[token, setToken] = useState('');

    useEffect(()=>{
        const token = localStorage.getItem('token');
        
    },[])
    return(
<AuthContext.Provider value={{setAuth}}>
    {children}
</AuthContext.Provider>

    )
}

export {AuthProvider}
export default AuthContext;