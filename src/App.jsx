import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Supplier } from './Views/Admin/Proveedores/indexsup';
import {Createsup} from './Views/Admin/Proveedores/createsup';
import { Editsup} from './Views/Admin/Proveedores/editsup';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { Register } from './Views/Admin/Register';
import { Home } from './Views/Admin/Home';
import Login from './Views/Admin/Login';
import { About } from './Views/Admin/About';
import Vuelos from './Views/Admin/Vuelos/Vuelos';
import RedVuelos from './Views/Admin/Vuelos/RedVuelos';
import { Clientes } from './Views/Admin/Clientes/Clientes';
import RutasClient from './Views/Admin/Clientes/RutasClient';
import Offers from './Views/Admin/Ofertas/Offers';
import './Styles/App.css'
function App() {
  const appStyle = {
    backgroundColor: 'black', // Establece el fondo negro
    minHeight: '100vh', // Asegura que el fondo ocupe al menos toda la altura de la pantalla
    color: 'white', // Cambia el color del texto a blanco
  };
  return (
    <div className='cuerpo'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/supplier" element={<Supplier />} />
            <Route path="/create" element={<Createsup />} />
            <Route path="/edit/:id" element={<Editsup />} /> {/* Corregir la ruta aquí */}
            <Route path='/flight' element={<Vuelos />}></Route>
            <Route path='/flight/*' element={<RedVuelos />} />
            <Route path='/client' element={<Clientes />}></Route>
            <Route path='/client/*' element={<RutasClient />}></Route>
            <Route path='/offers' element={<Offers />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;