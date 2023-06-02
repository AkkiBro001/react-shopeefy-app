import styles from './CardsContainer.module.scss';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { addCart } from '../../redux_store/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux_store/CartSlice';


const Card = (product) => {
    
    const { id, title, description, image, rating, price, category } = product
    const productURLID = `/react-shopeefy-app/product/${id}`
    const dispatch = useDispatch()
    
    const carts = useSelector(state => state.cart)
    const cartProduct = carts.find(product => product.id === id)
    
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

   
    return (
        <div className={`${styles.card}`}>
            <div className={styles.card__img}>

                <Link to={productURLID} className={`${styles.productImage} link`}>
                    <span className={styles.like}><AiFillHeart />{rating.count}</span>
                    <div className={styles.rating}>
                        <span className={styles.star}>
                            <AiFillStar />
                        </span>
                        <span>{rating.rate}</span>
                    </div>
                    <img src={image} alt="productImage" />
                </Link>
            </div>
            <div className={styles.cards__details}>
                <div className={styles.cards__product}>
                    <Link to={`/react-shopeefy-app/product/${id}`} className={`link ${styles.title}`} title={title}><h3>{title}</h3></Link>

                </div>
                <div className={styles.cards__product__desc} title={description}>
                    {description}
                </div>
                <div className={styles.cards__product__price}>
                    <span className={styles.price}>${price}</span>
                    

                </div>

                <div className={styles.cards__addToCard}>
                    {!cartProduct ? <button className={styles.cards__addToCart} onClick={() => handleAddToCart(product)}>
                        <span className={styles.cart}>
                            <MdShoppingCart />
                        </span>
                        <span>Add to cart</span>
                    </button>:
                    <div className={styles.cards__addToCart__counter}>
                        <button name="decrement" onClick={(e)=>handleIncrementDecrement(e,id)}>-</button>
                        <span>{cartProduct.cartCount}</span>
                        <button name="increment" onClick={(e)=>handleIncrementDecrement(e,id)}>+</button>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Card