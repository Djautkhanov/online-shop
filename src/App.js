import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';

function App() {
  return (
     <div className='App'>
      <Routes>
        <Route  path="/cart" element={<Cart />}/>
      </Routes>
       <Footer/> 
     </div>
       
  );
}

export default App;  
