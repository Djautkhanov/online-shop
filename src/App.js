import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from "./pages/Home/Home";
import Success from "./pages/Success/Success";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<Success/>}/>
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
