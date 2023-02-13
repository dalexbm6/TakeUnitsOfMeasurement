import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () =>{
    //Como identifica que es un context va estraer datos
    return useContext(AuthContext);
}


export default useAuth;