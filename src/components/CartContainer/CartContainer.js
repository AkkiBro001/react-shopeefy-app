import styles from './Cart.module.scss'
import CartItems from './CartItems'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { GobalContextData } from '../../DataContext'

const CartContainer = () => {

  const {cart, handleCart} = GobalContextData()

  const subtotal = cart.reduce((c, v) => {c+=v.cart; return c}, 0)
  const Total = cart.reduce((c, v) => {c+=v.cart * v.price; return c}, 0)

  return (
    <div className={styles.CartContainer}>
      <header className={styles.header}>
        <h2>Shopping Cart</h2>
        <p>Price</p>
      </header>
      <ul className={styles.Cart__list}>
      {cart.map(items => <CartItems {...items} key = {`${items.id}-${items.size}`} handleCart={handleCart}/>)}
        
        

        <li className={styles.Cart__subtotal}>
          <Link to="/react-shopeefy-app" className={styles.backToHome}><BsArrowLeft/> <span>back to home page</span></Link>
          <span className={styles.subtotalLable}>Subtotal ({subtotal} items):</span> <h3>${Total.toFixed(2)}</h3>
        </li>
      </ul>
    </div>
  )
}

export default CartContainer
