import React from 'react'
import styles from './NewProduct.module.css'
import ProductForm from '../../Form/ProductForm'
import { useNavigate } from 'react-router-dom'
import { createProducts } from '../../../services/produtcsServices';

export default function NewProduct() {
  const navigate = useNavigate();

  async function handleCreateProduct(product){
    try{
      await createProducts(product);

      navigate('/products', {
        state: {
          message: 'Produto cadastrado com sucesso!'
        }
      });
    }
    catch(error){
      console.error(error);
    }
  }

  return (
    <div className={styles.newProductContainer}>
        <h3>Novo produto</h3>
        <ProductForm buttonText= "Cadastrar produto" 
                     handleSubmitProduct={handleCreateProduct}/>
    </div>
  )
}
