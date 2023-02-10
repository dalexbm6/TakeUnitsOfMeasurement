import './App.css';
import { useEffect } from 'react';
import Login from './Components/Login';
function App() {

  useEffect(()=>{
   const consultarAPI = async ()=>{
    const url = "https://localhost:44346/api/GetJobs";
    const respuesta = await fetch(url)
    const resultado = await respuesta.json();
    console.log(resultado);
   
   }

   consultarAPI();
  },[]);//El arreglo vacio es para que se ejecute una vez 
  return (
    <div>
      <Login></Login>
    </div>
  );
}

export default App;
