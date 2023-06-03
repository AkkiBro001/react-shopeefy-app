import React from 'react'
import styles from './CardsContainer.module.scss'
import { useSelector } from 'react-redux'

const CardsSortingMenu = ({sort, setSort, search}) => {

  const product = useSelector(state => state.product)

  return (
    <div className={styles.cardsSortingMenu}>
        <div className={styles.cards__searchResult}>
           
            {search ? <article>Found <span>{product.data.length} {product.data.length <= 1 ? "item" : "items"}</span> "{search}" on search</article> : null}
            
        </div>
        <div className={styles.cards_sorting}>
            <span>Sort By</span>
            <select name="sort" className={styles.sort} value={sort} onChange={(e)=>setSort(e.target.value)}>
                <option value="rate" className={styles.option}>Rating</option>
                <option value="priceLow" className={styles.option}>Price: Low to High</option>
                <option value="priceHigh" className={styles.option}>Price: High to Low</option>
                <option value="popular" className={styles.option}>Popular</option>
            </select>
        </div>
    </div>
  )
}

export default CardsSortingMenu