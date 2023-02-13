import { async } from "q";
import { useState, useEffect, createContext } from "react";
import { Navigate, useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const[Auth, setAuth] = useState(false);
    const[cargando, setCargando] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        const autenticarUsuario = async() =>{
            const token = localStorage.getItem('token');
            if(!token){
                setCargando(false);
                return;
            } 

            console.log(token);
            const url = "https://localhost:44346/api/Auth/ValidateToken";
            const respuesta = await fetch(url, {
                method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token
                    })
                })
             
            const resultado = await respuesta.json();
            setAuth(resultado.Response);
            if(resultado.Response) navigate('/mainPage');
            setCargando(false)

        }
        
        autenticarUsuario();
    },[])
    return(
<AuthContext.Provider value={{Auth,setAuth,cargando}}>
    {children}
</AuthContext.Provider>

    )
}

export {AuthProvider}
export default AuthContext;