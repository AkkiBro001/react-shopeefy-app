import styles from './Product.module.scss';
import {AiFillStar, AiFillHeart} from 'react-icons/ai';
import {MdShoppingCart} from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardsContainer from '../CardsContainer/CardsContainer';

const ProductContainer = () => {
  const {id} = useParams()
  
  const products = useSelector(state => state.product)
  const {description, image, price, rating, title, category} = products.data.find(product => product.id === parseInt(id))
  const relatedProduct = products.data.filter(product => product.category.includes(category) && product.id !== parseInt(id))
  return (
    <div className={styles.ProductContainer}>
      <div className={styles.ProductDetails}>

        <div className={styles.ProductDetails__image}>
          <img src={image} alt="productImg" />
        </div>

        <div className={styles.ProductDetails__details}>
      <img src={image} alt="productImg" className={styles.bgImage}/>

          <h3 className={styles.ProductDetails__details__name}>{title}</h3>
          <p className={styles.ProductDetails__details__desc}>{description}</p>
          <div className={styles.rating_like}>
                  <div className={styles.rating}>
                    <span className={styles.star}><AiFillStar/></span>
                    <span className={styles.text}>{rating.rate}</span>
                  </div>
                  <div className={styles.like}>
                    <span className={styles.heart}><AiFillHeart/></span>
                    <span className={styles.text}>{rating.count}</span>
                    
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
                <div className={styles.price}><span className={styles.price_lable}>Price: </span>{price}<span className={styles.price_lable_text}>$590</span></div>
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
        <CardsContainer products={relatedProduct}/>
          
        </div>
      </div>
    </div>
  )
}

export default ProductContainer