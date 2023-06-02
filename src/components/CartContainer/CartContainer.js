import styles from './Cart.module.scss'
import CartItems from './CartItems'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const CartContainer = ({carts, totalPrice, totalItems}) => {

  

 

  return (
    <div className={styles.CartContainer}>
      <header className={styles.header}>
        <h2>Shopping Cart</h2>
        <p>Price</p>
      </header>
      <ul className={styles.Cart__list}>
        {
          carts.map(product => <CartItems key={product.id} {...product}/>)
        }
        
        

        <li className={styles.Cart__subtotal}>
          <Link to="/react-shopeefy-app" className={styles.backToHome}><BsArrowLeft/> <span>back to home page</span></Link>
          <span className={styles.subtotalLable}>Subtotal ({totalItems === 1 ? `${totalItems} item` : `${totalItems} items`}):</span> <h3>${totalPrice}</h3>
        </li>
      </ul>
    </div>
  )
}

export default CartContainer
