import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className='App'>
      <Header/>

      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
