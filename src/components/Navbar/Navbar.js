import React from 'react'
import { Link } from 'react-router-dom';
import {MdShoppingCart} from 'react-icons/md'
import styles from './navbar.module.scss';
import profile from '../../images/profile.jpg'

const Navbar = () => {
  return (
    <div className={styles.navBar}>
        <ul className={styles.navBar__menu}>
            <li className={styles.navBar__logo}><h2><Link to="/react-shopeefy-app" className='link'>Shopeefy</Link></h2></li>
            <li className={styles.navBar__user}>
                <div className={styles.navBar__user__pic}>
                    <img className={styles.img} src={profile} alt="profilepic" />
                </div>
                <div className={styles.navBar__user__name}>Akshay Tambe</div>
            </li>
            <li>
                <Link to="/react-shopeefy-app/cart" className={`${styles.navBar__cart} link`}>
                <div className={styles.lable}>1</div> 
                <MdShoppingCart/>
                </Link>
            </li>
        </ul>

    </div>
  )
}





export default Navbar