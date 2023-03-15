<<<<<<< HEAD
import { Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Checkout from './pages/СheckoutPage';

function App() {
  return (
     <div className='App'>
       <Header/>
       <Checkout/>
=======
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from "./pages/Home/Home";
import Success from "./pages/Success/Success";
import ShopPage from "./pages/ShopPage/ShopPage";
import OnePage from "./pages/OnePage/OnePage";
import { Register } from './pages/Register/Register'
import { Login } from './pages/Login/Login'

function App() {
  return (
    <div className='App'>
      <Header/>
>>>>>>> master
      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<Success/>}/>
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/el' element={<OnePage />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes>
<<<<<<< HEAD
       <Footer/> 

     </div>
       
=======
      <Footer/>
    </div>
>>>>>>> master
  );
}

export default App;
