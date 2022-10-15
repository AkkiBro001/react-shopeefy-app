import styles from './Product.module.scss';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import CardsContainer from '../CardsContainer/CardsContainer';
import {getRelatedProduct} from '../SearchContainer/SearchContainer'

const ProductContainer = ({ product, intialData, dispatch }) => {
  
  const getRelatedData = getRelatedProduct(product, intialData, "").filter(data => data.category === product.map(d => d.category).join())


  return (
    <div className={styles.ProductContainer}>
      {
        product.map(product => {
          const { id, image, title, category, price, description, rating } = product;

          return <div className={styles.ProductDetails} key={id}>

            <div className={styles.ProductDetails__image}>
              <img src={image} alt="productImage" />
            </div>

            <div className={styles.ProductDetails__details}>
              <img src={image} alt="" className={styles.bgImage} style={{right: (title.includes('Samsung') || title.includes('Acer')) ? '-75px' : '0'}}/>

              <h3 className={styles.ProductDetails__details__name}>{title}</h3>
              <p className={styles.ProductDetails__details__desc}>{description.length > 300 ? description.slice(0, 300) + "..." : description}</p>
              <div className={styles.rating_like}>
                <div className={styles.rating}>
                  <span className={styles.star}><AiFillStar /></span>
                  <span className={styles.text}>{rating.rate}</span>
                </div>
                <div className={styles.like}>
                  <span className={styles.heart}><AiFillHeart /></span>
                  <span className={styles.text}>{rating.count}</span>

                </div>
              </div>
              {category.includes('clothing') ? <div className={`${styles.size__dropdown__bold} size__dropdown`}>
                <label htmlFor="size">Size</label>
                <select id="size">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>

                </select>
              </div> : null}
              <div className={styles.price}><span className={styles.price_lable}>Price: </span><span className={styles.price_lable_text}>${price}</span></div>
              <div className={styles.cards__addToCard}>
                <button className={styles.cards__addToCart}>
                  <span className={styles.cart}>
                    <MdShoppingCart />
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



        }
        )}

      <div className={styles.ProductRelated}>
        <h3 className={styles.ProductRelated__header}>Products related to this item</h3>
        <div className={styles.ProductRelated__card}>
          <CardsContainer state={getRelatedData}/>

        </div>
      </div>
    </div>

  )
}
export default ProductContainer