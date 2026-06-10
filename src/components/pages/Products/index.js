import React from 'react'
import LinkButton from '../../Layout/LinkButton'
import styles from './Products.module.css'
import ListItens from '../../Layout/ListItens/ListItens'
import Message from '../../Layout/Message'
import { useLocation } from 'react-router-dom'

export default function Products() {
  const location = useLocation();
  let message = '';

  if(location.state){
    message = location.state.message
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.productsHeader}>
        <h2>Produtos</h2>
        <LinkButton to='/newProduct' text="Cadastrar Produto" className={styles.btnCreateProduct}/>
      </div>
      {message && <Message message={message} type="success"/>}
      <div className={styles.productsList}>
        <ListItens />        
      </div>
    </div>
  )
}