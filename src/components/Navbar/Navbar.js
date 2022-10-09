import React from 'react'
import {MdShoppingCart} from 'react-icons/md'
import styles from './navbar.module.scss';


const Navbar = () => {
  return (
    <div className={styles.navBar}>
        <ul className={styles.navBar__menu}>
            <li className={styles.navBar__logo}><h2><a href="#" className='link'>Shopeefy</a></h2></li>
            <li className={styles.navBar__user}>
                <div className={styles.navBar__user__pic}>
                    <img className={styles.img} src="./images/profile.jpg" alt="profilepic" />
                </div>
                <div className={styles.navBar__user__name}>Akshay Tambe</div>
            </li>
            <li>
                <a href='#' className={`${styles.navBar__cart} link`}>
                <div className={styles.lable}>1</div> 
                <MdShoppingCart/>
                </a>
            </li>
        </ul>

    </div>
  )
}


// <div className="navBar">
// <ul className="navBar__menu">
//     <li className="navBar__logo"><h2><a href="#" className="navBar__link link">Shopeefy</a></h2></li>
//     <li className="navBar__user">
//         <div className="navBar__user__pic">
//             <img src="./images/profile.jpg" alt="profilepic" />
//         </div>
//         <div className="navBar__user__name">Akshay Tambe</div>
//     </li>
//     <li>cart</li>
// </ul>

// </div>


export default Navbar