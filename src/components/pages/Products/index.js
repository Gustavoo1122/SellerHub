import React, { useEffect, useState } from 'react'
import { getProducts, deleteProducts } from '../../../services/produtcsServices'
import LinkButton from '../../Layout/LinkButton'
import styles from './Products.module.css'
import ListItens from '../../Layout/ListItens/ListItens'
import Message from '../../Layout/Message'
import { useLocation } from 'react-router-dom'
import Loading from '../../Layout/Loading'

export default function Products() {
  const [removeLoading, setRemoveLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [productMessage, setProductMessage] = useState('');

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

  async function removeProducts(idProduct){
    try{
      await deleteProducts(idProduct);
      setProducts(products.filter((product) => product.id !== idProduct));
      setProductMessage('Produto removido com sucesos!');
      window.scrollTo({top: 0});
      setTimeout(() => {
        setProductMessage('');
      }, 3000)
    }
    catch(error){
      console.error(error);
    }
  }

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
      {productMessage && <Message message={productMessage} type="success"/>}
      {products.length > 0 &&
        <div className={styles.productsList}>
          <ul className={styles.list}>
            {products.map((product) => 
              <ListItens 
                key={product.id}
                handleRemove={removeProducts} 
                id={product.id} 
                sku ={product.sku} 
                categoria={product.categoria} 
                quantidade={product.quantidade} 
                nome_produto={product.nome_produto} 
                preco_custo={product.preco_custo} /> 
            )}
          </ul>
        </div>
      }
      {!removeLoading && <Loading />}
      {removeLoading && products.length === 0 && (
        <p className={styles.voidList}>Não existem produtos cadastrados</p>
      )}
    </div>
  )
}