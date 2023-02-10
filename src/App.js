import './App.css';
import { useEffect } from 'react';
function App() {

  useEffect(()=>{
   const consultarAPI = async ()=>{
      const url = "http://takeunitsofmeasurementservice.somee.com/Jobs/GetJobs";
      const respuesta =await fetch(url);

      console.log(respuesta);
   }
   consultarAPI();
  },[]);//El arreglo vacio es para que se ejecute una vez 
  return (
    <div>
      <h1>Actualizo</h1>
    </div>
  );
}

export default App;
