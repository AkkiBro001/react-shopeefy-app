import styles from './CardsContainer.module.scss';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ACTION, GobalContextData } from '../../DataContext';
import {useState, useEffect } from 'react';




const Card = (data) => {
    
    const [showAddtoCartBtn, setShowAddtoCartBtn] = useState(true)
    const [noOfitems, setNoOfitems] = useState(0)
    const [sizes, setSizes] = useState("S")
    const {dispatch, handleCart} = GobalContextData();

    function handleAddToCart(e, id){
        const {name, value} = e.target;
        if(name === "addToCart"){

            setShowAddtoCartBtn(false)
            setNoOfitems(preVal => preVal+1)
        }else if(name === "increment"){
            setNoOfitems(preVal => preVal+1)
        }else if(name === "decrement"){
            setNoOfitems(preVal => {
                if(preVal <= 1){
                    setShowAddtoCartBtn(true)
                    return 0;
                }else{

                    return preVal-1;
                }
            })
        }
        
        
    }

    useEffect(()=>{
        

            handleCart(id, noOfitems, sizes)
        
        
        
    }, [noOfitems])
    
    
    
    const { id, title, price, description, category, image, rating, size } = data;
    
    return (
        <div className={`${styles.card}`}>
            <div className={styles.card__img}>
                <Link to={`/react-shopeefy-app/product/${id}`} className={`${styles.productImage} link`}
                onClick={()=>dispatch({type: ACTION.Display_Product, payload: {id}})}>
                    <span className={styles.like}><AiFillHeart/>{rating.count}</span>
                    <img src={image} alt="productImage" />
                </Link>
            </div>
            <div className={styles.cards__details}>
                <div className={styles.cards__product}>
                    <Link to={`/react-shopeefy-app/product/${id}`} className={`link ${styles.title}`} title={title}
                    onClick={()=>dispatch({type: ACTION.Display_Product, payload: {id}})}
                    >
                    <h3>{title}</h3></Link>
                    <div className={styles.rating}>
                        <span className={styles.star}>
                            <AiFillStar />
                        </span>
                        <span>{rating.rate}</span>
                    </div>
                </div>
                <div className={styles.cards__product__desc}>
                    {description}
                </div>
                <div className={styles.cards__product__price}>
                    <span className={styles.price}>${price}</span>
                    {((size || category.includes('clothing')) && !title.includes('Fjallraven')) ? <div className="size__dropdown">
                        <label htmlFor="size"> Size </label>
                        <select id="size" onChange={(e)=>{setSizes(e.target.value); setNoOfitems(0)}} value={sizes}>
                            <option value="S">S</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div> : null}
                    
                </div>

                <div className={styles.cards__addToCard}>
                {showAddtoCartBtn ? <button className={styles.cards__addToCart} onClick={(e)=>{handleAddToCart(e, id)}} name="addToCart">
                        <span className={styles.cart} name="addToCart">
                            <MdShoppingCart />
                        </span>
                        <span onClick={handleAddToCart} name="addToCart">Add to cart</span>
                    </button>
                     : <div className={styles.cards__addToCart__counter}>
                    <button onClick={(e)=>handleAddToCart(e, id)} name='decrement'>-</button>
                    <input type="text" min="0" max="100" value={noOfitems} onChange={handleAddToCart} name="number"/>
                    <button onClick={(e)=>handleAddToCart(e, id)} name='increment'>+</button>
                </div>}
                </div>
            </div>
        </div>
    )
}

export default Card