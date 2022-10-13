import React, {useState} from 'react';
import styles from './Filter.module.scss';
import FilterSection from './FilterSection';
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md'

const RATING = 5;

const FilterContainer = ({category}) => {
  const [hideFilter, setHideFilter] = useState(false)

  function handleInput(e){
    e.preventDefault()
    
  }

  return (
    <div className={styles.filterContainer}>
        <ul className={styles.filterMenu}>
            {/* //*Filter Header */}
            <li className={styles.filterList}>
            <div className={styles.filterHeader} style={{height:'26px'}}>
                    <span>Filter</span>
                    <button name="reset" onClick={handleInput}>Reset</button>
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
                    <input type="range" id="price" name="price" onChange={handleInput} min="10" step="5" max="1000"/>
                    <div className={styles.priceLable}>
                    <span>{`> $10`}</span>
                    <span>Max : $1000</span>
                    </div>
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