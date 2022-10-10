import './App.css';
import { Routes, Route} from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';




function App() {
  return (
    <>
    <Routes>
      <Route path="/react-shopeefy-app" element={<Home />}/>
      <Route path="/react-shopeefy-app/cart" element={<Cart />}/>
      
    </Routes>
    </>
  );
}

export default App;
