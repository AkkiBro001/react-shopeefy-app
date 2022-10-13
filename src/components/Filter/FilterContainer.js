import React, {useState} from 'react';
import styles from './Filter.module.scss';
import FilterSection from './FilterSection';
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md'

const RATING = 5;

const FilterContainer = ({category}) => {
  const [hideFilter, setHideFilter] = useState(false)
  return (
    <div className={styles.filterContainer}>
        <ul className={styles.filterMenu}>
            {/* //*Filter Header */}
            <li className={styles.filterList}>
            <div className={styles.filterHeader} style={{height:'26px'}}>
                    <span>Filter</span>
                    <button>Reset</button>
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
                    <input type="range" id="#price" name="price"/>
                    <div className={styles.priceLable}>Max. $1000</div>
                </div>}
            </li>

            {/* //*Filter List */}
            <FilterSection header="Category" body={category}/> 
            <FilterSection header="Rating" body={RATING}/> 
            
        </ul>
    </div>
  )
}

export default FilterContainer