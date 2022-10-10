import SearchContainer from "../../components/SearchContainer/SearchContainer"
import Navbar from "../../components/Navbar/Navbar"
import CartContainer, { CardContainer } from "../../components/CartContainer/CartContainer";


const hide = true;
const Cart = () => {
  return (
    <>
    <div className="mainHeader">

    <Navbar/>
   {!hide && <SearchContainer/>}
    </div>
    <div className="cartMain">
    <CartContainer/>
    </div>
    
    </>
  )
}

export default Cart