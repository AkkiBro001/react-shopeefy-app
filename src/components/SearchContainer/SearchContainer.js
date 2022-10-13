import React, {useEffect, useRef} from 'react'
import styles from './SearchContainer.module.scss';


const SearchContainer = ({search}) => {
  const searchContainer = useRef()

  function updateSearchHeight(){
    let root = document.documentElement;
    root.style.setProperty('--searchContainerHeight', searchContainer.current.offsetHeight + "px");
    
  }
 

  useEffect(()=>{
    if(!searchContainer.current) return
    updateSearchHeight()
    window.addEventListener('resize', updateSearchHeight);
    return () => window.removeEventListener('resize', updateSearchHeight);
  },[search])

  if(!search) return null;

  return (

    <div className={styles.searchContainer} ref={searchContainer}>
     

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
          

        </ul>
      </div>
    </div>



  )
}

export default SearchContainer