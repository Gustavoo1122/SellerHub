import React from 'react'
import styles from './Loading.module.css'

import loading from '../../../img/loading.svg'


export default function Loading() {
  return (
    <div className={styles.divloadContainer}>
        <img src={loading} alt="Loading" className={styles.loader}/>
    </div>
  )
}
