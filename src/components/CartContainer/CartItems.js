import { useEffect } from 'react'
import { useState } from 'react'
import {AiFillDelete, AiFillStar, AiFillHeart} from 'react-icons/ai'
import styles from './Cart.module.scss'


const CartItems = (props) => {
  const {id, cart, size, title, price, image, rating, handleCart} = props
  const [noOfitems, setNoOfitems] = useState(cart)
  const [sizes, setSizes] = useState(size)

  useEffect(()=>{

    if(noOfitems !== "0"){
      handleCart(id, noOfitems, sizes)
    }

}, [noOfitems])

  function handleAddToCart(e, id){
    const {name, value} = e.target;
    if(name === "delete"){
      setNoOfitems(0)
    }else if(name === "increment"){
        setNoOfitems(preVal => {
            if(preVal === "0"){
                return 1
            }else{

                return preVal+1
            }
        })
    }else if(name === "decrement"){
        setNoOfitems(preVal => {
            if(preVal <= 1){
                
                return 0;
            }else{

                return preVal-1;
            }
        })
    }
    
    
}

  return (
    <li className={styles.Cart__item}>
          <div className={styles.Cart__image}>
            <img src={image} alt="" />
          </div>

          <div className={styles.Cart__details}>
            <div className={styles.item_details}>
              <h3 className={styles.title}>{title}</h3>
              
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
              {size && <div className={`${styles.size__dropdown__bold} size__dropdown`}>
                    <label htmlFor="size">Size</label>
                    <select id="size" value={sizes} onChange={(e => setSizes(e.target.value))}>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        
                    </select>
                </div>}
              <div className={styles.quantity}>
                <div className={styles.itemConter}>
                  <button onClick={e => handleAddToCart(e, id)} name="decrement">-</button>
                  <input type="text" min="1" value={noOfitems} onChange={handleAddToCart}/>
                  <button onClick={e => handleAddToCart(e, id)} name="increment">+</button>
                </div>
                <button className={styles.itemDelete} onClick={e => handleAddToCart(e, id)} name="delete">
                    <AiFillDelete/>
                    <span>Delete</span>
                </button>
              </div>
            </div>

            <div className={styles.item_price}>
                <h3>${(price * cart).toFixed(2)}</h3>
            </div>
          </div>
        </li>
  )
}

export default CartItems