import styles from './Filter.module.scss';
import FilterSection from './FilterSection';

const FilterContainer = () => {
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

            {/* //*Filter List */}
            <FilterSection/>    
            
        </ul>
    </div>
  )
}

export default FilterContainer