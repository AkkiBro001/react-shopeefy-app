import {AiFillDelete, AiFillStar, AiFillHeart} from 'react-icons/ai'
import styles from './Cart.module.scss'

const CartItems = () => {
  return (
    <li className={styles.Cart__item}>
          <div className={styles.Cart__image}>
            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
          </div>

          <div className={styles.Cart__details}>
            <div className={styles.item_details}>
              <h3 className={styles.title}>Mortein 2 In 1 Mosquito And Cockroach Killer Spray - 400Ml</h3>
              <div className={styles.desc}>
                Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.
              </div>
              <div className={styles.rating_like}>
                  <div className={styles.rating}>
                    <span className={styles.star}><AiFillStar/></span>
                    <span className={styles.text}>4.8</span>
                  </div>
                  <div className={styles.like}>
                    <span className={styles.heart}><AiFillHeart/></span>
                    <span className={styles.text}>150</span>
                  </div>
              </div>
              <div className={styles.quantity}>
                <div className={styles.itemConter}>
                  <button>-</button>
                  <input type="number" min="1" />
                  <button>+</button>
                </div>
                <button className={styles.itemDelete}>
                    <AiFillDelete/>
                    <span>Delete</span>
                </button>
              </div>
            </div>

            <div className={styles.item_price}>
                <h3>$130</h3>
            </div>
          </div>
        </li>
  )
}

export default CartItems