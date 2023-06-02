import {AiFillDelete, AiFillStar, AiFillHeart} from 'react-icons/ai'
import styles from './Cart.module.scss'
import { Link } from 'react-router-dom'
import { decrement, increment, removeCart } from '../../redux_store/CartSlice'
import { useDispatch } from 'react-redux'




const CartItems = ({id, title, description, image, rating, price, category, cartCount, size }) => {

  const dispatch = useDispatch()
  
function handleIncrementDecrement(event, id){
  
    const {name} = event.target;
    if(name === "increment"){
      dispatch(increment(id))
    }if(name === "decrement"){
      dispatch(decrement(id))
    }
}

  const productURLID = `/react-shopeefy-app/product/${id}`
  return (
    <li className={styles.Cart__item}>
          <div className={styles.Cart__image}>
            <img src={image} alt="productImg" />
          </div>

          <div className={styles.Cart__details}>
            <div className={styles.item_details}>
              <Link to={productURLID}>
                <h3 className={styles.title}>{title}</h3>
              </Link>
              
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
              
              <div className={styles.quantity}>
                <div className={styles.itemConter}>
                  <button name="decrement" onClick={(e)=>handleIncrementDecrement(e, id)}>-</button>
                  
                  <span>{cartCount}</span>
                  <button name="increment" onClick={(e)=>handleIncrementDecrement(e, id)}>+</button>
                </div>
                <button className={styles.itemDelete}
                onClick={()=>dispatch(removeCart(id))}
                >
                    <AiFillDelete/>
                    <span>Delete</span>
                </button>
              </div>
            </div>

            <div className={styles.item_price}>
                <h3>${price}</h3>
            </div>
          </div>
        </li>
  )
}

export default CartItems