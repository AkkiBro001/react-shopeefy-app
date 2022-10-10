import {AiFillStar, AiFillHeart} from 'react-icons/ai'
import styles from './Cart.module.scss';

const CartAsideRelatedItems = () => {
  return (
    <li>
            <a href="#" className={styles.Related_item}>
              <div className={styles.image}>
                <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="image" />
              </div>
              <div className={styles.details}>
                  <p className={styles.producName}>Mens Casual Premium Slim Fit T-Shirts </p>
                  <p className={styles.rating}><AiFillStar/> <span>4.8</span></p>
                  <p className={styles.like}><AiFillHeart/> <span>150</span></p>
                  <p className={styles.price}>$512</p>
                  <button className={styles.addToCartBtn}>Add to cart</button>
              </div>
            </a>
          </li>
  )
}

export default CartAsideRelatedItems