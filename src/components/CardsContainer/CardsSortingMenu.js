import React from 'react'
import styles from './CardsContainer.module.scss'

const CardsSortingMenu = () => {
  return (
    <div className={styles.cardsSortingMenu}>
        <div className={styles.cards__searchResult}>
            Found <span>100</span> items on search
        </div>
        <div className={styles.cards_sorting}>
            <span>Sort By</span>
            <select name="sort" id="sort" className={styles.sort}>
                <option value="category" className={styles.option}>Category</option>
                <option value="priceLow" className={styles.option}>Price: Low to High</option>
                <option value="priceHigh" className={styles.option}>Price: High to Low</option>
                <option value="rate" className={styles.option}>Rating</option>
                <option value="polpular" className={styles.option}>Popular</option>
            </select>
        </div>
    </div>
  )
}

export default CardsSortingMenu