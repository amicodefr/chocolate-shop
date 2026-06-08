import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/header/Header";
import "./App.css";
import CartDrawer from "./features/cart/CartDrawer";

function App() {
  return (
    <>
       
      <Header />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
       
      <CartDrawer/>

      
    </>
  );
}

export default App;
