import React from 'react';
import {RiInformationFill, RiCheckboxCircleFill} from 'react-icons/ri'
import CartAsideRelatedItems from './CartAsideRelatedItems';
import styles from './Cart.module.scss';

const CartAside = () => {
  return (
    <div className={styles.CartAside}>

    <div className={styles.Cart__Buy}>
      {/* <p className={styles.freeDelivery}>
      <span className={styles.checkIcon}><RiCheckboxCircleFill/></span>
      <span className={styles.text}>Your order eligilble for FREE Delivery</span>
      </p> */}

      <p className={styles.delivery}>
      <span className={styles.checkIcon}><RiInformationFill/></span>
      <span className={styles.text}>Delivery charges may be apply</span>
      </p>

      <div className={styles.Cart__Buy__subtotal}>
          <p className={styles.subtotal}><span>Subtotal (2 items):</span><span className={styles.price}>$512</span></p>
          <div className={styles.gift}>
            <input type="checkbox" id="gift"/>
            <label htmlFor='gift'>This order contains a gift</label>
          </div>
          <button className={styles.proceedToBuy}>Proceed to Buy</button>
      </div>
    </div>



    <div className={styles.Cart__Related}>
      <h3>Products related to items in your cart</h3>
      <ul className={styles.Cart__Related__items}>
          <CartAsideRelatedItems/>
          <CartAsideRelatedItems/>
          <CartAsideRelatedItems/>
      </ul>
    </div>
    </div>    
  )
}

export default CartAside