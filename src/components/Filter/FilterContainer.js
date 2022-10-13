import React, {useState} from 'react';
import styles from './Filter.module.scss';
import FilterSection from './FilterSection';
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md'

const RATING = 5;

const FilterContainer = ({category, filter, handleFilter}) => {
  const [hideFilter, setHideFilter] = useState(false)


  return (
    <div className={styles.filterContainer}>
        <ul className={styles.filterMenu}>
            {/* //*Filter Header */}
            <li className={styles.filterList}>
            <div className={styles.filterHeader} style={{height:'26px'}}>
                    <span>Filter</span>
                    <button name="reset" onClick={handleFilter}>Reset</button>
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
                    <input type="range" id="price" name="price" onChange={handleFilter} min="10" step="5" max="1000" value={filter.price}/>
                    <div className={styles.priceLable}>
                    <span>{`< $${filter.price}`}</span>
                    <span>Max : $1000</span>
                    </div>
                </div>}
            </li>

            {/* //*Filter List */}
            <FilterSection header="Category" body={category} filter={filter} handleFilter={handleFilter}/> 
            <FilterSection header="Rating" body={RATING} filter={filter} handleFilter={handleFilter}/> 
            
        </ul>
    </div>
  )
}

export default FilterContainer