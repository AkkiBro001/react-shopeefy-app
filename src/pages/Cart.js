import Navbar from "../components/Navbar/Navbar";
import CartContainer from "../components/CartContainer/CartContainer";
import CartAside from "../components/CartContainer/CartAside";
import { useSelector } from "react-redux";
import NoProduct from "../components/NoProduct/NoProduct";


const Cart = ({hideSearch}) => {
  const carts = useSelector(state => state.cart)

  const totalPrice = carts.reduce((total, product) => {
    total+= (product.cartCount * product.price)
    return total;
  }, 0)

  const totalItems = carts.reduce((total, product) => {
    total+= product.cartCount
    return total;
  }, 0)

  return (
    <>
    <div className="mainHeader">

    <Navbar hideSearch={hideSearch}/>
   
    </div>
    <div className="cartMain">
      {carts.length ?
      <>
    <CartContainer carts={carts} totalPrice={totalPrice.toFixed(2)} totalItems={totalItems}/>
    <CartAside totalPrice={totalPrice.toFixed(2)} totalItems={totalItems} carts={carts}/>
    </>:
    <NoProduct type="cart" msg="No products in Cart"/>
    }
    </div>
    
    </>
  )

}

export default Cart;