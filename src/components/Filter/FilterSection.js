import styles from './Filter.module.scss';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

const FilterSection = () => {
    return (
        <>
        <li className={styles.filterList}>
                {/* Header Section */}
                <div className={styles.filterHeader} style={{marginBottom:'1em'}}>
                    <span>Filter</span>
                    <button>Hide <span><MdOutlineKeyboardArrowDown/></span></button>
                 </div>

                {/* Price Section */}
                {/* <div className={styles.filterBody}>
                    <input type="range" id="#price" name="price"/>
                    <div className={styles.priceLable}>Max. $1000</div>
                </div> */}

                {/* Other Checkbox Section */}
                <div className={`${styles.filterBody} checkBoxList`}>
                    <div className={styles.checkList}>
                    <input type="checkbox" id="name" name="name"/>
                    <label className={styles.priceLable} htmlFor="name">Mumbai</label>
                    </div>

                    <div className={styles.checkList}>
                    <input type="checkbox" id="name" name="name"/>
                    <label className={styles.priceLable} htmlFor="name">Mumbai</label>
                    </div>

                    <div className={styles.checkList}>
                    <input type="checkbox" id="name" name="name"/>
                    <label className={styles.priceLable} htmlFor="name">Mumbai</label>
                    </div>
                    
                </div>
            </li>
 
            </>
    )
}

export default FilterSection