import React, {useState} from 'react';
import styles from './Filter.module.scss';
import FilterSection from './FilterSection';
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { filterAndSort, resetFilter } from '../../redux_store/ProductSilce';
import { useEffect } from 'react';

const rating = [4,3,2,1]

const FilterContainer = ({products, setSearch}) => {
  const [hideFilter, setHideFilter] = useState(false)
  let categories
  if(sessionStorage.getItem("Shopeefy")){
    const products = JSON.parse(sessionStorage.getItem("Shopeefy"));
    categories = [...new Set(products.map(product => product.category))]
  }else{
    categories = [...new Set(products.map(product => product.category))]
  }

  const {price: defaultPrice} = useSelector(state => state.product)
  
  const [price, setPrice] = useState(defaultPrice)

  const dispatch = useDispatch()

  function resetProduct(){
    dispatch(resetFilter())
    setSearch("")
  }

  function handlePrice(e){
    setPrice(e.target.value)
    dispatch(filterAndSort({type: "price", value: parseInt(e.target.value)}))
  }

  useEffect(()=>{
    setPrice(defaultPrice)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultPrice])

  return (
    <div className={styles.filterContainer}>
        <ul className={styles.filterMenu}>
            {/* //*Filter Header */}
            <li className={styles.filterList}>
            <div className={styles.filterHeader} style={{height:'26px'}}>
                    <span>Filter</span>
                    <button name="reset" onClick={()=>resetProduct()}>Reset</button>
            </div>
            </li>
            <li className={styles.filterList}>
               {/* Header Section */}
               <div className={styles.filterHeader} style={{marginBottom:'1em'}}>
                    <span>Price</span>
                    <button
                    onClick={()=>setHideFilter(preVal => !preVal)}
                    >{hideFilter ? 'Show' : 'Hide'} 
                    <span>
                    {hideFilter ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                    </span>
                    </button>
                 </div>

                {/* Price Section */}
                {!hideFilter && <div className={styles.filterBody}>
                    <input type="range" id="price" name="price" min="10" step="5" max="1000" value={price}
                    onChange={(e)=>handlePrice(e)}
                    />
                    <div className={styles.priceLable}>
                    <span>{`< $${price}`}</span>
                    <span>Max : $1000</span>
                    </div>
                </div>}
            </li>

            {/* //*Filter List */}
            <FilterSection  header="Category" body={categories} inputType="checkbox"/> 
            <FilterSection  header="Rating" body={rating} inputType="radio"/> 
            
            
        </ul>
    </div>
  )
}

export default FilterContainer