import {AiFillStar, AiFillHeart} from 'react-icons/ai'
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux_store/CartSlice';

const CartAsideRelatedItems = (product) => {
  const {title, image, rating, price } = product
  const dispatch = useDispatch()
  

  return (
    <li>
            <Link to="" className={styles.Related_item}>
              <div className={styles.image}>
                <img src={image} alt="img" />
              </div>
              <div className={styles.details}>
                  <p className={styles.producName}>{title} </p>
                  <p className={styles.rating}><AiFillStar/> <span>{rating.rate}</span></p>
                  <p className={styles.like}><AiFillHeart/> <span>{rating.count}</span></p>
                  <p className={styles.price}>${price}</p>
                  <button className={styles.addToCartBtn} onClick={()=>dispatch(addCart(product))}>Add to cart</button>
              </div>
            </Link>
          </li>
  )
}

export default CartAsideRelatedItems