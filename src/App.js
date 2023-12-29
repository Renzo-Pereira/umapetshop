import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Catalogo from './components/Catalogo';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <div>
            <BrowserRouter>

      <Navbar />
      
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/productos' element={<ItemListContainer />} />
        <Route path='/productos/:categoria' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
