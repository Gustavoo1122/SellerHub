import React, { useEffect, useState } from 'react'
import Input from '../Input'
import SelectInput from '../SelectInput'
import styles from './NewProdForm.module.css'

import { getCategories } from '../../../services/categoriesService'
import { createProducts } from '../../../services/produtcsServices'
import { useNavigate } from 'react-router-dom'

export default function NewProductForm() {
  const navigate = useNavigate();
  const [categories, setCategories]  = useState([]);

  const initialProduct = {
    nome_produto: '',
    sku: '',
    categoria: '',
    quantidade: 0,
    preco_custo: 0,
    preco_venda: 0
  }
  const [product, setProduct] = useState(initialProduct);

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

    try{
    
    await createProducts(product);
    navigate('/products', {state: {message: 'Produto cadastrado com sucesso!'}});

    }
    catch(error){
        console.error(error);
    }
  }
 
  return (
    <>
        <form onSubmit={handleSubmit}>
            <Input type="text" 
                text="Produto" 
                name="nome_produto" 
                placeholder="Nome do produto" 
                value={product.nome_produto}
                handleOnChange={handleChange}/>
            <Input type="text" 
                text="SKU" name="sku" 
                placeholder="Código SKU" 
                value={product.sku} 
                handleOnChange={handleChange}/>
            <SelectInput name="categoria" 
                text="Categoria" 
                options={categories} 
                value={product.categoria} 
                handleOnChange={handleChange}/>
            <Input type="number" 
                text="Quantidade" 
                name="quantidade" 
                className={styles.inputQuantity} 
                value={product.quantidade}
                handleOnChange={handleChange}/>
            <Input type="number" 
                text="Preço custo" 
                name="preco_custo" 
                placeholder="Custo individual" 
                className={styles.inputCoin}
                value={product.preco_custo}
                handleOnChange={handleChange}/>
            <Input type="number" 
                text="Preço Venda" 
                name="preco_venda" 
                placeholder="Valor de venda" 
                className={styles.inputCoin} 
                value={product.preco_venda}
                handleOnChange={handleChange}/>
            <div className={styles.divButton}>
                <input type="submit" value="Cadastrar" className={styles.inputButton}/>
            </div>
        </form>
    </>
  )
}
