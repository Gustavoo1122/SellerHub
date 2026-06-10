import React from 'react'
import { PiBarcodeLight } from "react-icons/pi";
import styles from './Barcode.module.css'

export default function Barcode({product, className}) {
  return (
    <div className={styles.barcodeDiv}>
        <PiBarcodeLight className={styles.barcodeIcon}/>
        <div className={styles.barcodeText}>
            <p className={styles.barcodeTitle}>SKU</p>
            <p className={styles.barcodeValue}>{product.sku}</p>
        </div>
    </div>
  )
}