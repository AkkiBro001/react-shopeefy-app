import React from 'react';
import styles from './CardsContainer.module.scss'
import CardsSortingMenu from './CardsSortingMenu';
import Card from './Card';


const CardsContainer = ({sort, setSort, search, products, hideSort}) => {
 
  
  return (
    <div className={styles.cardsContainer}>
      {!hideSort && <CardsSortingMenu sort={sort} setSort={setSort} search={search}/>}
      <div className={styles.cardsContainer__cards}>
      
        {products.map(product => <Card key={product.id} {...product}/>)}
      </div>
    </div>

  )
}

export default CardsContainer