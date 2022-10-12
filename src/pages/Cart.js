import Navbar from "../components/Navbar/Navbar";
import SearchContainer from "../components/SearchContainer/SearchContainer";
import CartContainer from "../components/CartContainer/CartContainer";
import CartAside from "../components/CartContainer/CartAside";


const Cart = () => {

  return (
    <>
    <div className="mainHeader">

    <Navbar/>
   
    </div>
    <div className="cartMain">
    <CartContainer/>
    <CartAside/>
    </div>
    
    </>
  )

}

export default Cart;