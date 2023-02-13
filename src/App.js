import './App.css';
import { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import { AuthProvider } from './context/AuthProvider';
import AuthLayout from './layouts/AuthLayout';


function App() {
/*
  useEffect(()=>{
   const consultarAPI = async ()=>{
    const url = "https://localhost:44346/api/GetJobs";
    const respuesta = await fetch(url)
    const resultado = await respuesta.json();
    console.log(resultado);
   
   }

   consultarAPI();
  },[]);//El arreglo vacio es para que se ejecute una vez */
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<AuthLayout/>}>
          <Route index element={<Login/>}/>

        </Route>
        <Route path='/'>

        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>

   
    </>
   
  );
}

export default App;
