import React from 'react';
import {RiInformationFill} from 'react-icons/ri'
import CartAsideRelatedItems from './CartAsideRelatedItems';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';

const CartAside = ({totalPrice, totalItems, carts}) => {
  const products = useSelector(state => state.product)
  const category = [...new Set(carts.map(product => product.category))]
  const id = [...new Set(carts.map(product => product.id))]
  const relatedCarts = products.data.filter(products => category.includes(products.category) && !id.includes(products.id))
 
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
          <p className={styles.subtotal}><span>Subtotal ({totalItems === 1 ? `${totalItems} item` : `${totalItems} items`}):</span><span className={styles.price}>${totalPrice}</span></p>
          <div className={styles.gift}>
            <input type="checkbox" id="gift"/>
            <label htmlFor='gift'>This order contains a gift</label>
          </div>
          <button className={styles.proceedToBuy}>Proceed to Buy</button>
      </div>
    </div>



    {
    relatedCarts.length ? <div className={styles.Cart__Related}>
      <h3>Products related to items in your cart</h3>
      <ul className={styles.Cart__Related__items}>

        {
          relatedCarts.map(product => <CartAsideRelatedItems key={product.id} {...product}/>) 
        }
          
          
      </ul>
      
    </div> : null
    }

    </div>    
  )
}

export default CartAside