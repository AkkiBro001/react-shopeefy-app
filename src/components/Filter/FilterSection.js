import styles from './Filter.module.scss';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import { useState } from 'react';


const FilterSection = ({ header, body, filter, handleFilter}) => {
    
    const [hideFilter, setHideFilter] = useState(false)

    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function(word) {
          return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
      }

    

    return (
        <>

            <li className={styles.filterList}>
                {/* Header Section */}
                <div className={styles.filterHeader} style={{ marginBottom: '1em' }}>
                    <span>{header}</span>
                    <button
                    onClick={()=>setHideFilter(preVal => !preVal)}
                    >{hideFilter ? 'Show' : 'Hide'} 
                    <span>
                    {hideFilter ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                    </span>
                    </button>
                </div>

               

                {
                    !hideFilter &&
                    header === "Category" ?
                        body.map(data => {
                            return (
                                <div className={`${styles.filterBody} checkBoxList`} key={data}>
                                    <div className={styles.checkList}>
                                        <input type="checkbox" id={data} name="category" value={data} 
                                        onChange={handleFilter} 
                                        checked = {filter.category.includes(data)}
                                        />
                                        <label htmlFor={data}>{titleCase(data)}</label>
                                    </div>

                                </div>
                            )
                        })
                        :!hideFilter && header === "Rating" ? Array.from({length: body}, (_, i) => body - i).map(
                           data => {
                            
                            return (
                                <div className={`${styles.filterBody} checkBoxList`} key={data}>
                                    <div className={styles.checkList}>
                                        <input type="checkbox" id={data} name="rate" value={data} 
                                            onChange={handleFilter} 
                                            checked = {filter.rate.includes(data.toString())}
                                        />
                                        <label className={styles.star} htmlFor={data}>{
                                            Array.from({length: data}, (_, i) => data - i).map(
                                                num => <AiFillStar key={num}/>
                                            )
                                            }</label>
                                    </div>

                                </div>
                            )
                            }
                        )
                            
                        : null

                }
                        
            </li>


        </>
    )
}

export default FilterSection