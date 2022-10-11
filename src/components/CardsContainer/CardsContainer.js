import React from 'react';
import styles from './CardsContainer.module.scss'
import CardsSortingMenu from './CardsSortingMenu';
import Card from './Card';

const CardsContainer = () => {
  return (
    <div className={styles.cardsContainer}>
      <CardsSortingMenu />
      <div className={styles.cardsContainer__cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>

  )
}

export default CardsContainer