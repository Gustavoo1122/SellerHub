import React, { useState, useEffect } from 'react'
import styles from './Product.module.css'

import { useNavigate, useParams } from 'react-router-dom'
import { getProduct, updateProducts } from '../../../services/produtcsServices';
import  Loading from '../../Layout/Loading/index.js'
import ProductForm from '../../Form/ProductForm/index.js';

export default function Product() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        async function requestProduct(id){
            try{
                const data = await getProduct(id);
                setProduct(data);
            }
            catch(error){
                console.error(error);
            }
        }
        requestProduct(id);
        
    }, [id])

    function toggleProjectForm(){
        setIsEditing(!isEditing);
    }

    async function handleUpdateProduct(updatedProduct){
        try{
            await updateProducts(id, updatedProduct);

            navigate('/products', {
                state: {
                    message: 'Produto alterado com sucesso!'
                }
            });
        }
        catch(error){
            console.error(error);
        }
    }

  return (
    <div className={styles.container}>
        {product.nome_produto ? (
            <div className={styles.productContainer}>
                <div className={styles.headerContainer}>
                    <h3>Produto: {product.nome_produto}</h3>
                    <button onClick={toggleProjectForm} className={styles.buttonEdit}>
                        {!isEditing ? 'Editar produto' : 'Cancelar'}
                    </button>
                </div>
                <ProductForm productData={product} disabled={!isEditing} buttonText="Gravar alteração" handleSubmitProduct={handleUpdateProduct}/>
            </div>
        ) : <Loading />}
    </div>

  )
}