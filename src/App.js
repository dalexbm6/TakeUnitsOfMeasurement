import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import { AuthProvider } from './context/AuthProvider';
import AuthLayout from './layouts/AuthLayout';
import RutaProtegida from './layouts/RutaProtegida';
import mainP from './Components/mainPage';
import PaginaPrincipal from './paginas/PaginaPrincipal';


function App() {
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<AuthLayout/>}>
          <Route index element={<Login/>}/>

        </Route>
        <Route path='/mainPage' element={<RutaProtegida/>}>
        <Route index element={<PaginaPrincipal/>}/>
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
    </>
   
  );
}

export default App;
