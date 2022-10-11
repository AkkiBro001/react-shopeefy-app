import styles from './CardsContainer.module.scss';
import {AiFillStar, AiFillHeart} from 'react-icons/ai';
import {MdShoppingCart} from 'react-icons/md';

const Card = () => {
  return (
    <a href='#' className={`${styles.card} link`}>
        <div className={styles.card__img}>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        </div>
        <div className={styles.cards__details}>
            <div className={styles.cards__product}>
                <h3>Addidas Shoes</h3>
                <div className={styles.rating}>
                    <span className={styles.star}>
                        <AiFillStar/>
                    </span>
                    <span>4.8</span>
                </div>
            </div>
            <div className={styles.cards__product__desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquid numquam odit quibusdam magni delectus.
            </div>
            <div className={styles.cards__product__price}>
                <span className={styles.price}>$590</span>
                <div className={styles.size}>
                    <label htmlFor="size">Size</label>
                    <select id="size">
                        <option value="S">S</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                {/* <span className={styles.like}><AiFillHeart/>150</span> */}
            </div>

            <div className={styles.cards__addToCard}>
                <button className={styles.cards__addToCart}>
                    <span className={styles.cart}>
                        <MdShoppingCart/>
                    </span>
                    <span>Add to cart</span>
                </button>
                {/* <div className={styles.cards__addToCart__counter}>
                    <button>-</button>
                    <input type="text" min="1"/>
                    <button>+</button>
                </div> */}
            </div>
        </div>
    </a>
  )
}

export default Card