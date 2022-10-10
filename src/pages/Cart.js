import Navbar from "../components/Navbar/Navbar";
import SearchContainer from "../components/SearchContainer/SearchContainer";
import CartContainer from "../components/CartContainer/CartContainer";
import CartAside from "../components/CartContainer/CartAside";
import { useParams } from "react-router-dom";

const Cart = () => {
  const {page} = useParams()
  

  return (
    <>
    <div className="mainHeader">

    <Navbar/>
   {page === 'cart' ? null : <SearchContainer/>}
    </div>
    <div className="cartMain">
    <CartContainer/>
    <CartAside/>
    </div>
    
    </>
  )
}

export default Cart;