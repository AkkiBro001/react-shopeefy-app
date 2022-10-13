import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md'
import styles from './Navbar.module.scss';
import profile from '../../images/profile.jpg'


const Navbar = (props) => {
   
   const [scroll, setScroll] = useState(window.scrollY)
   
   function handleScroll(){
        setScroll(window.scrollY)
   }

   useEffect(()=>{
   if(props.hideSearch) return
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
   }, [scroll])
 
   
   return (
        <div className={styles.navBar}>
            <ul className={styles.navBar__menu}>
                <li className={styles.navBar__logo}><h2><Link to="/react-shopeefy-app" className='link'>Shopeefy</Link></h2></li>
               {props.hideSearch ? null : <li className={`${styles.searchBar} ${!props.search && scroll > 100 ? styles.hideOnScroll : ""}`}>
                    
                        <BsSearch className={styles.searchIcon} />
                        <form>
                            <input type="text" placeholder='Search Product' 
                            value={props.search}
                            onChange={(e)=>props.setSearch(e.target.value)}
                            />
                        </form>
                        {props.search ? <AiFillCloseCircle className={styles.closeIcon} 
                            onClick={()=>props.setSearch("")}
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
                        <div className={styles.lable}>1</div>
                        <MdShoppingCart />
                    </Link>
                </li>
            </ul>

        </div>
    )
}





export default Navbar