import styles from './Filter.module.scss';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { useState } from 'react';
import { titleCase, setStars } from '../../utils/utils';

const FilterSection = ({ header, body, inputType }) => {

    const [hideFilter, setHideFilter] = useState(false)





    return (
        <>

            <li className={styles.filterList}>
                {/* Header Section */}
                <div className={styles.filterHeader} style={{ marginBottom: '1em' }}>
                    <span>{header}</span>
                    <button
                        onClick={() => setHideFilter(preVal => !preVal)}
                    >{hideFilter ? 'Show' : 'Hide'}
                        <span>
                            {hideFilter ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                        </span>
                    </button>
                </div>



                {
                    !hideFilter ?



                        body.map((category, index) => <div key={index} className={`${styles.filterBody} checkBoxList`}>
                            {
                                header === "Category" ?
                                <div className={styles.checkList}>
                                    <input type={inputType} name={header} id={category} value={category} />
                                    <label htmlFor={category}>
                                        {titleCase(category)}
                                    </label>
                                </div>
                                :
                                <div className={styles.checkList}>
                                    <input type={inputType} name={header} id={category} value={category} style={{display: "none"}} className={styles.ratingCheck}/>
                                    <label htmlFor={category} className={styles.star}>
                                        {setStars(category)}
                                    </label>
                                </div>
                            }

                        </div>)


                        : null

                }

            </li>


        </>
    )
}

export default FilterSection