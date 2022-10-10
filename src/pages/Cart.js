import Navbar from "../components/Navbar/Navbar";
import SearchContainer from "../components/SearchContainer/SearchContainer";
import CartContainer from "../components/CartContainer/CartContainer";



const Cart = () => {
  return (
    <>
    <div className="mainHeader">

    <Navbar/>
   <SearchContainer/>
    </div>
    <div className="cartMain">
    <CartContainer/>
    </div>
    
    </>
  )
}

export default Cart;