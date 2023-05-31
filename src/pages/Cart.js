import Navbar from "../components/Navbar/Navbar";
import CartContainer from "../components/CartContainer/CartContainer";
import CartAside from "../components/CartContainer/CartAside";


const Cart = ({hideSearch}) => {
  
  return (
    <>
    <div className="mainHeader">

    <Navbar hideSearch={hideSearch}/>
   
    </div>
    <div className="cartMain">
    <CartContainer/>
    <CartAside/>
    </div>
    
    </>
  )

}

export default Cart;