import styles from './Product.module.scss';
import {AiFillStar, AiFillHeart} from 'react-icons/ai';
import {MdShoppingCart} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import CardsContainer from '../CardsContainer/CardsContainer';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { addCart, increment, decrement } from '../../redux_store/CartSlice';

const ProductContainer = () => {
  const {id} = useParams()
  const carts = useSelector(state => state.cart)
  const products = useSelector(state => state.product)
  const {description, image, price, rating, title, category} = products.data.find(product => product.id === parseInt(id))
  const relatedProduct = products.data.filter(product => product.category === category && product.id !== parseInt(id))
  const product = products.data.find(product => product.id === parseInt(id))
  const dispatch = useDispatch()

  function handleAddToCart(product) {

        
    dispatch(addCart(product))
    
}

function handleIncrementDecrement(event, id){
    
    const {name} = event.target;
    if(name === "increment"){
      dispatch(increment(id))
    }if(name === "decrement"){
      dispatch(decrement(id))
    }
}

  const productCart = carts.find(product => product.id === parseInt(id))
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
              
                <div className={styles.price}><span className={styles.price_lable}>Price: </span><span className={styles.price_lable_text}>${price}</span></div>
                <div className={styles.cards__addToCard}>
                {!productCart ? <button className={styles.cards__addToCart}
                  onClick={()=>handleAddToCart(product)}
                >
                    <span className={styles.cart}>
                        <MdShoppingCart/>
                    </span>
                    <span>Add to cart</span>
                </button> :
                <div className={styles.cards__addToCart__counter}>
                    <button name="decrement"
                    onClick={(e) => handleIncrementDecrement(e, parseInt(id))}
                    >-</button>
                    <span>{productCart.cartCount}</span>
                    <button name="increment"
                    onClick={(e) => handleIncrementDecrement(e, parseInt(id))}
                    >+</button>
                </div>}
            </div>
            <div className={styles.links}>

              <Link to="/react-shopeefy-app"><BsArrowLeft/> <span>go to home</span></Link>
              <Link to="/react-shopeefy-app/cart"><span>go to cart</span> <BsArrowRight/></Link>
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