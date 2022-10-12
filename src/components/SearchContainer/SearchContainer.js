import React from 'react'
import styles from './SearchContainer.module.scss';


const SearchContainer = ({search}) => {

  if(!search) return null;

  return (

    <div className={styles.searchContainer}>
     

      <h2 className={styles.serchResult}>
        {search}
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