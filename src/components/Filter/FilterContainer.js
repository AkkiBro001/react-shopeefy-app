import React, {useState} from 'react';
import styles from './Filter.module.scss';
import FilterSection from './FilterSection';
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md'


const rating = [5,4,3,2,1]

const FilterContainer = ({products}) => {
  const [hideFilter, setHideFilter] = useState(false)

  const categories = [...new Set(products.map(product => product.category))]
  
  return (
    <div className={styles.filterContainer}>
        <ul className={styles.filterMenu}>
            {/* //*Filter Header */}
            <li className={styles.filterList}>
            <div className={styles.filterHeader} style={{height:'26px'}}>
                    <span>Filter</span>
                    <button name="reset">Reset</button>
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
                    <input type="range" id="price" name="price" min="10" step="5" max="1000" defaultValue={1000}/>
                    <div className={styles.priceLable}>
                    <span>{`< $${1000}`}</span>
                    <span>Max : $1000</span>
                    </div>
                </div>}
            </li>

            {/* //*Filter List */}
            <FilterSection  header="Category" body={categories}/> 
            <FilterSection  header="Rating" body={rating}/> 
            
            
        </ul>
    </div>
  )
}

export default FilterContainer