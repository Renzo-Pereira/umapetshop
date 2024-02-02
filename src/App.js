import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Catalogo from "./components/Catalogo";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/carrito";
import Footer from "./components/footer";
import Checkout from "./components/Checkout";
import Productos from "./components/Productos";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/marcas/:marca" element={<ItemListContainer />} />

            <Route path="/productos/:categoria" element={<Productos />} />
            <Route path="/marca/:marca" element={<Productos />} />

            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/productos" element={<Productos />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
