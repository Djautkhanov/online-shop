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
      <Routes>
      </Routes>
       <Footer/> 

     </div>
       
  );
}

export default App;  
