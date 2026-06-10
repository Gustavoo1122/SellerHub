import React from 'react'
import { FiPackage } from "react-icons/fi";
import styles from './Stock.module.css'

export default function Stock({product, className}) {
  return (
    <div className={styles.sotckDiv}>
        <FiPackage className={styles.sotckIcon}/>
        <div className={styles.stockText}>
            <p className={styles.quantityText}>Quantidade</p>
            <p className={styles.quantityValue}>{product.quantidade} un</p>
        </div>
    </div>
  )
}