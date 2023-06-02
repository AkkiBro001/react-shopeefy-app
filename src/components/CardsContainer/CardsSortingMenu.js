import React from 'react'
import styles from './CardsContainer.module.scss'

const CardsSortingMenu = ({sort, setSort, search}) => {
  return (
    <div className={styles.cardsSortingMenu}>
        <div className={styles.cards__searchResult}>
           
            {search ? <article>Found <span>{20}</span> {"20"} on search</article> : null}
            
        </div>
        <div className={styles.cards_sorting}>
            <span>Sort By</span>
            <select name="sort" className={styles.sort} value={sort} onChange={(e)=>setSort(e.target.value)}>
                <option value="category" className={styles.option}>Category</option>
                <option value="priceLow" className={styles.option}>Price: Low to High</option>
                <option value="priceHigh" className={styles.option}>Price: High to Low</option>
                <option value="rate" className={styles.option}>Rating</option>
                <option value="popular" className={styles.option}>Popular</option>
            </select>
        </div>
    </div>
  )
}

export default CardsSortingMenu