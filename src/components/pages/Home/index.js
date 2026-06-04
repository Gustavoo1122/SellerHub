import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeItens}>Produtos</div>
      <div className={styles.homeItens}>Vendas</div>
      <div className={styles.homeItens}>Financeiro</div>
      <div className={styles.homeItens}>Alertas</div>
    </div>
  )
}
