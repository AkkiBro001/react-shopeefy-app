import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md'
import styles from './navbar.module.scss';
import profile from '../../images/profile.jpg'
import { useSelector } from 'react-redux';


const Navbar = ({search, setSearch, hideSearch}) => {
   
   const cart = useSelector(state => state.cart)

   
   const NoOfCartItems = cart.reduce((total, product) => {
        total += product.cartCount;
        return total
   }, 0)
   
   
   return (
        <div className={styles.navBar}>
            <ul className={styles.navBar__menu}>
                <li className={styles.navBar__logo}><h2><Link to="/react-shopeefy-app" className='link'>Shopeefy</Link></h2></li>
               {hideSearch ? null : <li className={`${styles.searchBar}`}>
                    
                        <BsSearch className={styles.searchIcon} />
                        <form>
                            <input type="text" placeholder='Search Product' 
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                            />
                        </form>
                        {search ? <AiFillCloseCircle className={styles.closeIcon} 
                            onClick={()=>setSearch("")}
                        /> : null}
                    
                </li>}
                <li className={styles.navBar__user}>
                    <div className={styles.navBar__user__pic}>
                        <img className={styles.img} src={profile} alt="profilepic" />
                    </div>
                    <div className={styles.navBar__user__name}>Akshay Tambe</div>
                </li>
                <li>
                    <Link to="/react-shopeefy-app/cart" className={`${styles.navBar__cart} link`}>
                        <div className={styles.lable}>{NoOfCartItems}</div>
                        <MdShoppingCart />
                    </Link>
                </li>
            </ul>

        </div>
    )
}





export default Navbar