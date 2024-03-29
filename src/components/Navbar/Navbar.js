import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md'
import styles from './Navbar.module.scss';
import profile from '../../images/profile.jpg'
import { GobalContextData } from '../../DataContext'

const Navbar = ({search, setSearch, hideSearch, state}) => {
   const [scroll, setScroll] = useState(window.scrollY)

   
   function handleScroll(){
       setScroll(window.scrollY)
    }
    
    useEffect(()=>{
        if(hideSearch) return
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scroll])
    
    
    
    const {cart} = GobalContextData()
    const cartItemsNo = cart.reduce((val, curVal) => {
        val += curVal.cart
        return val;
    }, 0)
   return (
        <div className={styles.navBar}>
            <ul className={styles.navBar__menu}>
                <li className={styles.navBar__logo}><h2><Link to="/react-shopeefy-app" className='link'>Shopeefy</Link></h2></li>
               {hideSearch ? null : <li className={`${styles.searchBar} ${!search && scroll > 100 ? styles.hideOnScroll : ""}`}>
                    
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
                        {cartItemsNo > 0 ? <div className={styles.lable}>{cartItemsNo}</div> : null}
                        <MdShoppingCart />
                    </Link>
                </li>
            </ul>

        </div>
    )
}





export default Navbar