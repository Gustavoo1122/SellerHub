import React from 'react'
import styles from './NewProduct.module.css'
import Input from '../../Form/Input'
import SelectInput from '../../Form/SelectInput'

export default function NewProduct() {
  return (
    <div className={styles.newProductContainer}>
        <h3>Novo produto</h3>
        <form>
            <Input type="text" text="Produto" name="name" placeholder="Nome do produto"/>
            <Input type="text" text="SKU" name="name" placeholder="Código SKU"/>
            <SelectInput name="name" text="Categoria"/>
            <Input type="number" text="Quantidade" name="quantity" className={styles.inputQuantity}/>
            <Input type="number" text="Preço custo" name="quantity" placeholder="Custo individual" className={styles.inputCoin}/>
            <Input type="number" text="Preço Venda" name="quantity" placeholder="Valor de venda" className={styles.inputCoin}/>
            <div className={styles.divButton}>
                <input type="submit" value="Cadastrar" className={styles.inputButton}/>
            </div>
        </form>
    </div>
  )
}
