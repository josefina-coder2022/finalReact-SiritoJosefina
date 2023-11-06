
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Carrito from "./pages/Carrito"
import CustomProvider from "./providers/CustomProvider";


const App = () => {
  return (
    <BrowserRouter>
      <CustomProvider>
          <header className="header">
            <NavBar />
          </header>
          <main className="main">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/home/:categoria" element={<ItemListContainer />} />
              <Route path="/womenClothing/:categoria" element={<ItemListContainer />} />
              <Route path="/menClothing/:categoria" element={<ItemListContainer />} />
              <Route path="/jewelery/:categoria" element={<ItemListContainer />} />
              <Route path="/cart" element={<Carrito />} />
              <Route path="item/:id" element={<ItemDetailContainer />} />
              <Route path="*" element={<p>404 vuelva a intentar por favor</p>} />
            </Routes>
          </main>
          <footer className="footer">
            <Footer />
          </footer>
      </CustomProvider>
    </BrowserRouter> 
  );
}

export default App;
