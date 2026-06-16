import React, { useEffect, useState } from 'react'
import Input from '../Input'
import SelectInput from '../SelectInput'
import styles from './ProductForm.module.css'

import { getCategories } from '../../../services/categoriesService'

export default function NewProductForm({ productData, disabled, buttonText, handleSubmitProduct }) {
  const [categories, setCategories]  = useState([]);

  const initialProduct = {
    nome_produto: '',
    sku: '',
    categoria: '',
    quantidade: 0,
    preco_custo: 0,
    preco_venda: 0
  }
  const [product, setProduct] = useState(productData || initialProduct);

  useEffect(() => {
    async function requestCategories(){
        try{
            const data = await getCategories();
            setCategories(data);
        }
        catch(error){
            console.error(error);
        }
    }
    requestCategories();

  }, []);

  useEffect(() => {
    if(disabled && productData) 
        setProduct(productData);
  }, [disabled, productData])

  function handleChange(e){
    const field = e.target.name;
    const value = e.target.value

    setProduct({
        ...product,
        [field]: value
    })
  }

  async function handleSubmit(e){
    e.preventDefault();

    handleSubmitProduct(product);
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <Input type="text" 
                text="Produto" 
                name="nome_produto" 
                placeholder="Nome do produto" 
                value={product.nome_produto}
                handleOnChange={handleChange}
                disabled={disabled}
                />
            <Input type="text" 
                text="SKU" name="sku" 
                placeholder="Código SKU" 
                value={product.sku} 
                handleOnChange={handleChange}
                disabled={disabled}/>
            <SelectInput name="categoria" 
                text="Categoria" 
                options={categories} 
                value={product.categoria} 
                handleOnChange={handleChange}
                disabled={disabled}/>
            <Input type="number" 
                text="Quantidade" 
                name="quantidade" 
                className={styles.inputQuantity} 
                value={product.quantidade}
                handleOnChange={handleChange}
                disabled={disabled}/>
            <Input type="number" 
                text="Preço custo" 
                name="preco_custo" 
                placeholder="Custo individual" 
                className={styles.inputCoin}
                value={product.preco_custo}
                handleOnChange={handleChange}
                disabled={disabled}/>
            <Input type="number" 
                text="Preço Venda" 
                name="preco_venda" 
                placeholder="Valor de venda" 
                className={styles.inputCoin} 
                value={product.preco_venda}
                handleOnChange={handleChange}
                disabled={disabled}/>
            <div className={styles.divButton}>
                <input type="submit" value={buttonText} className={styles.inputButton} disabled={disabled}/>
            </div>
        </form>
    </>
  )
}
