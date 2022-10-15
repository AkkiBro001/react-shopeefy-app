import styles from './CardsContainer.module.scss';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ACTION, GobalContextData } from '../../DataContext';


const Card = (data) => {
    const {dispatch} = GobalContextData();
    const { id, title, price, description, category, image, rating } = data;
    return (
        <div className={`${styles.card}`}>
            <div className={styles.card__img}>
                <Link to={`/react-shopeefy-app/product/${id}`} className={`${styles.productImage} link`}>
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
                    {(category.includes('cloth') && !title.includes('Fjallraven')) ? <div className="size__dropdown">
                        <label htmlFor="size">Size</label>
                        <select id="size">
                            <option value="S">S</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div> : null}
                    {/*  */}
                </div>

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
    )
}

export default Card