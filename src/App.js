import './App.css';
import { Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Product from './pages/Product';


function App() {
  return (
    <>
      <Routes>
        <Route path="/react-shopeefy-app">
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<Product />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
