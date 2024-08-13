import React from 'react';
import styles from './ProductCard.module.css';
import Link from 'next/link';

const ProductCard = ({
    title, 
    link
  }: {
    title: string, 
    link: string
  }) => {
  return (
    <Link href={link} className={styles.cardItem} target="_blank">
        <div className={styles.cardItemImage}></div>
        <h3 className={styles.cardItemTitle}>{title}</h3>
    </Link>
  )
}

export default ProductCard