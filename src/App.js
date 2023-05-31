import './App.css';
import { Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Product from './pages/Product';
import Store from './redux_store/Store';
import { Provider } from 'react-redux';

function App() {
  
  return (
    <>
      <Provider store={Store}>
      <Routes>
        <Route path="/react-shopeefy-app">
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart hideSearch={true}/>} />
          <Route path="product/:id" element={<Product hideSearch={true}/>} />
        </Route>
        <Route path="*" element={<PageNotFound hideSearch={true}/>} />
      </Routes>
      </Provider>
    </>
  );
}

export default App;
