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
                <option value="rate" className={styles.option}>Rating</option>
                <option value="price" className={styles.option}>Price</option>
                <option value="polpular" className={styles.option}>Popular</option>
            </select>
        </div>
    </div>
  )
}

export default CardsSortingMenu