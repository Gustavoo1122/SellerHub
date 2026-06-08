import React, { useEffect, useState } from 'react'
import LinkButton from '../../Layout/LinkButton'
import { getProducts } from '../../../services/produtcsServices'
import styles from './Products.module.css'

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function requestProducts(){
      try{
        const data = await getProducts();
        setProducts(data);
      }
      catch(error){
        console.error(error);
      }
    }
    requestProducts()

  }, [])

  return (
    <div className={styles.productContainer}>
      <div>Produtos</div>
      <ul>
        {products.map((product) => <li key={product.id}>{product.nome_produto}</li>)}
      </ul>
      <LinkButton to='/newProduct' text="Cadastrar Produto"/>
    </div>
  )
}