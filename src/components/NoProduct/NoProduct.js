import {FcSearch} from 'react-icons/fc'
import { MdShoppingCart } from 'react-icons/md'
import styles from './NoProducts.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetFilter } from '../../redux_store/ProductSilce';

function NoProduct({type, msg, setSearch}) {

  const dispatch = useDispatch()

  function resetProduct(){
    setSearch("")
    dispatch(resetFilter())
  }

  return (
    <div className= {styles.container} style={{display: 'flex', flexDirection: 'column', width: "100%", alignItems: 'center', gap:'1em'}}>
        {type === "product" ? <FcSearch className={styles.icon} style={{fontSize: '4rem'}}/>
        : <MdShoppingCart className={styles.icon} style={{fontSize: '4rem', color: "#ff6263"}}/>  
      }
        <h3 className={styles.msg}>{msg}</h3>
        <Link 
        onClick = {()=>type === "product" && resetProduct()}
        to={`${type === "cart" ? "/react-shopeefy-app" : ""}`}
        className={styles.button} style={{textDecoration: "none", padding: "0.75em 1.25em", background:"transparent", border: "1px solid #ff6263", borderRadius:"5px", color: "#ff6263",  fontWeight: 'bold', cursor: "pointer", textTransform: 'uppercase'}}>
            {type === "product" ? "View available products" : "View products"}
        </Link>
    </div>
  )
}

export default NoProduct