import React from 'react'
import LinkButton from '../../Layout/LinkButton'

export default function Products() {
  return (
    <>
      <div>Produtos</div>
      <LinkButton to='/newProduct' text="Cadastrar Produto"/>
    </>
  )
}