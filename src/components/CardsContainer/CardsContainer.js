import React from 'react';
import styles from './CardsContainer.module.scss'
import CardsSortingMenu from './CardsSortingMenu';
import Card from './Card';
import { useParams } from 'react-router-dom';
import {FcRemoveImage} from 'react-icons/fc';
import { GobalContextData } from '../../DataContext';
const CardsContainer = ({state, sort, setSort, search}) => {
  const id = useParams();
  const {initialLoad} = GobalContextData()
  return (
    <div className={styles.cardsContainer}>
      {id.hasOwnProperty('id') ? null : <CardsSortingMenu sort={sort} setSort={setSort} search={search} cardLength={state.length}/>}  
      <div className={styles.cardsContainer__cards}>
      {(state.length === 0 && !initialLoad)  && !id.hasOwnProperty('id') ? <h2 className={styles.imageNotFound}><FcRemoveImage/> <span>{`Ooops!!! '${search}' not found`}</span></h2>
        : state.map(data => <Card key={data.id} {...data}/>) }
      </div>
    </div>

  )
}

export default CardsContainer