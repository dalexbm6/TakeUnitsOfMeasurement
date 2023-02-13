import React from 'react';
import { Navigate, Outlet } from 'react-router';
import useAuth from '../hooks/useAuth';


function RutaProtegida() {
    const {Auth,cargando} = useAuth();
    
if(cargando) return 'Cargando.....'
  return (
    <>
  {Auth ?  <Outlet/>: <Navigate to="/"/>}
        
    </>
    
  );
}

export default RutaProtegida;