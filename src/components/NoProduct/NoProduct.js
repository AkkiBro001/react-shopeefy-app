import {FcSearch} from 'react-icons/fc'
import { MdShoppingCart } from 'react-icons/md'
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
    <div style={{display: 'flex', flexDirection: 'column', width: "100%", alignItems: 'center', gap:'1em'}}>
        {type === "product" ? <FcSearch  style={{fontSize: '4rem'}}/>
        : <MdShoppingCart style={{fontSize: '4rem', color: "#ff6263"}}/>  
      }
        <h3>{msg}</h3>
        <Link 
        onClick = {()=>type === "product" && resetProduct()}
        to={`${type === "cart" ? "/react-shopeefy-app" : ""}`}
         style={{textDecoration: "none", padding: "0.75em 1.25em", background:"transparent", border: "1px solid #ff6263", borderRadius:"5px", color: "#ff6263",  fontWeight: 'bold', cursor: "pointer", textTransform: 'uppercase'}}>
            {type === "product" ? "View available products" : "View products"}
        </Link>
    </div>
  )
}

export default NoProduct