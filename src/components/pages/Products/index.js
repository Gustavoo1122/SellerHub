import React, { useEffect, useState } from 'react'
import { getProducts } from '../../../services/produtcsServices'
import LinkButton from '../../Layout/LinkButton'
import styles from './Products.module.css'
import ListItens from '../../Layout/ListItens/ListItens'
import Message from '../../Layout/Message'
import { useLocation } from 'react-router-dom'
import Loading from '../../Layout/Loading'

export default function Products() {
  const [removeLoading, setRemoveLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const location = useLocation();
  let message = '';

  useEffect(() => {
    async function requestProducts(){
      try{
        const data = await getProducts();
        setProducts(data);
        setRemoveLoading(true);
      }
      catch(error){
        console.error(error);
      }
    }
    requestProducts()
  }, [])

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
      {products.length > 0 &&
        <div className={styles.productsList}>
            <ListItens products={products}/> 
        </div>
      }
      {!removeLoading && <Loading />}
    </div>
  )
}