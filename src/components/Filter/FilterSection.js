import styles from './Filter.module.scss';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { useState } from 'react';
import { titleCase, setStars } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { filterAndSort } from '../../redux_store/ProductSilce';
import { useRef } from 'react';


const FilterSection = ({ header, body, inputType }) => {

    const [hideFilter, setHideFilter] = useState(false)

    const {category: defaultCategory, rating: defaultRating} = useSelector(state => state.product)
    const dispatch = useDispatch()

    function handleCategory(e){
         const {value, checked} = e.target
         if(checked){
            dispatch(filterAndSort({type:"category", value:[...defaultCategory, value]}))
         }else{
            dispatch(filterAndSort({type:"category", value:defaultCategory.filter(category => category !== value)}))
         }
         
    }

    const preRatingVal = useRef(null)

    function handleRating(e){
        const {value} = e.target
        
        if(preRatingVal.current !== value){

            dispatch(filterAndSort({type: "rating", value: parseInt(value)}))
            preRatingVal.current = value
        }else{
            dispatch(filterAndSort({type: "rating", value: ""}))
            e.target.checked = false;
            preRatingVal.current = null;
        }
        
    }

    

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
                                    <input type={inputType} name={header} id={category} defaultValue={category} onChange={(e=>handleCategory(e))}
                                    checked = {defaultCategory.includes(category)}
                                    />
                                    <label htmlFor={category}>
                                        {titleCase(category)}
                                    </label>
                                </div>
                                :
                                <div className={styles.checkList}>
                                    <input type={inputType} name={header} id={category} value={category} style={{display: "none"}} className={styles.ratingCheck}
                                    onClick={(e)=> handleRating(e)}
                                    checked = {defaultRating === category && defaultRating !== ""}
                                    readOnly
                                    />
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