import styles from './Cart.module.scss'
import CartItems from './CartItems'

const CartContainer = () => {
  return (
    <div className={styles.CartContainer}>
      <header className={styles.header}>
        <h2>Shopping Cart</h2>
        <p>Price</p>
      </header>
      <ul className={styles.Cart__list}>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>

        <li className={styles.Cart__subtotal}>
          <span>Subtotal (3 items):</span> <h3>$512</h3>
        </li>
      </ul>
    </div>
  )
}

export default CartContainer
