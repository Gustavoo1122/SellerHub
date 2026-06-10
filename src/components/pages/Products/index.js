import React from 'react'
import LinkButton from '../../Layout/LinkButton'
import styles from './Products.module.css'
import ListItens from '../../Layout/ListItens/ListItens'

export default function Products() {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productsHeader}>
        <h2>Produtos</h2>
        <LinkButton to='/newProduct' text="Cadastrar Produto" className={styles.btnCreateProduct}/>
      </div>
      <div className={styles.productsList}>
        <ListItens />        
      </div>
    </div>
  )
}