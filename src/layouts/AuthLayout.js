import React from 'react';
import { Outlet } from 'react-router';


function AuthLayout() {

  return (
    <>
        <div>AuthLayout</div>
            <Outlet/>
    </>
    
  );
}

export default AuthLayout;