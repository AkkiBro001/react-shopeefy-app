import styles from './Product.module.scss';
import {AiFillStar, AiFillHeart} from 'react-icons/ai';
import {MdShoppingCart} from 'react-icons/md';

import CardsContainer from '../CardsContainer/CardsContainer';

const ProductContainer = () => {
  return (
    <div className={styles.ProductContainer}>
      <div className={styles.ProductDetails}>

        <div className={styles.ProductDetails__image}>
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        </div>

        <div className={styles.ProductDetails__details}>
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" className={styles.bgImage}/>

          <h3 className={styles.ProductDetails__details__name}>Mans Clothing</h3>
          <p className={styles.ProductDetails__details__desc}>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
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
              <div className={`${styles.size__dropdown__bold} size__dropdown`}>
                    <label htmlFor="size">Size</label>
                    <select id="size">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        
                    </select>
                </div>
                <div className={styles.price}><span className={styles.price_lable}>Price: </span><span className={styles.price_lable_text}>$590</span></div>
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

      </div>

      <div className={styles.ProductRelated}>
        <h3 className={styles.ProductRelated__header}>Products related to this item</h3>
        <div className={styles.ProductRelated__card}>
          <CardsContainer/>
          
        </div>
      </div>
    </div>
  )
}

export default ProductContainer