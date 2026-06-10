import React from 'react'
import { AiOutlineDollarCircle } from "react-icons/ai";
import styles from './Price.module.css'

export default function Price({product, className}) {
  const valorUni = product.preco_custo;
  const quantidade = product.quantidade;
  const valorTotal = valorUni * quantidade;
  return (
    <div className={styles.priceDiv}>
        <AiOutlineDollarCircle className={styles.priceIcon}/>
        <div className={styles.priceText}>
            <p className={styles.priceTitle}>Valor unitário</p>
            <p className={styles.priceValue}>{parseFloat(valorUni).toFixed(2)}</p>
            <p className={styles.priceTitle}>Valor Total</p>
            <p className={styles.priceValue}>R${valorTotal.toFixed(2)}</p>
        </div>
    </div>
  )
}