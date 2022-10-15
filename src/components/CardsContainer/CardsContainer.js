import React from 'react';
import styles from './CardsContainer.module.scss'
import CardsSortingMenu from './CardsSortingMenu';
import Card from './Card';
import { useParams } from 'react-router-dom';

const CardsContainer = ({state, sort, setSort, search}) => {
  const id = useParams();
  
  return (
    <div className={styles.cardsContainer}>
      {id.hasOwnProperty('id') ? null : <CardsSortingMenu sort={sort} setSort={setSort} search={search} cardLength={state.length}/>}  
      <div className={styles.cardsContainer__cards}>
        {state.map(data => <Card key={data.id} {...data}/>) }
      </div>
    </div>

  )
}

export default CardsContainer