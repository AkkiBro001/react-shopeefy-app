import React from 'react'
import styles from './container.module.scss';
import { BsSearch } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'

const SearchContainer = () => {
  return (

    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <BsSearch className={styles.searchIcon} />
        <input type="text" placeholder='Search Product' />
        <AiFillCloseCircle className={styles.closeIcon} />
      </div>

      <h2 className={styles.serchResult}>
        Addidas
      </h2>

      <div className={styles.serchRelated}>
        <p className={styles.serchRelated__lable}>Related: </p>
        <ul className={styles.searchRelated__List}>
          <li><a href='#' className='link'>Bata</a></li>
          <li><a href='#' className='link'>Woodland</a></li>
          <li><a href='#' className='link'>Fila</a></li>
          <li><a href='#' className='link'>Fila</a></li>
          <li><a href='#' className='link'>Fila</a></li>
          <li><a href='#' className='link'>Fila</a></li>
          <li><a href='#' className='link'>Fila</a></li>
          <li><a href='#' className='link'>Fila</a></li>

        </ul>
      </div>
    </div>



  )
}

export default SearchContainer