import React from 'react'
import styles from './NewProduct.module.css'
import NewProductForm from '../../Form/NewProductForm'

export default function NewProduct() {

  return (
    <div className={styles.newProductContainer}>
        <h3>Novo produto</h3>
        <NewProductForm />
    </div>
  )
}
