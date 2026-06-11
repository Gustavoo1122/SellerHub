import styles from './ListItens.module.css'
import Button from '../Button'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { getCategoryColor } from '../../../utils/categoryColors.js'
import Stock from './Stock/Stock.js';
import Barcode from './Barcode/Barcode.js';
import Price from './Price/Price.js';
import { Link } from 'react-router-dom';

export default function ListItens({products}) {
  return (
    <ul className={styles.list}>
          {products.map((product) => 
            <li key={product.id} className={styles.itemList} style={{borderLeft: `6px solid ${getCategoryColor(product.categoria)}`}}>
              <div className={styles.itemInfo}>
                <div className={styles.headerInfo}>
                    <div>
                      <p className={styles.itemName}>{product.nome_produto}</p>
                      <p className={styles.categories} style={{backgroundColor: getCategoryColor(product.categoria)}}>{product.categoria}</p>
                    </div>
                    
                    <div className={styles.itemButtons}>
                        <Link to="/" className={styles.editButton}><FaEdit className={styles.iconEditButton} /></Link>
                        <Button text={<MdDelete className={styles.iconDeleteButton} />} className={styles.deleteButton} /> 
                    </div>
                </div>
                <div className={styles.bodyInfo}>
                    <Barcode product={product} />
                    <Stock product={product} />
                    <Price product={product}/>
                </div>  
              </div>   
            </li>)}
    </ul>
  )
}