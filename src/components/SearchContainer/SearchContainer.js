import React, {useEffect, useRef} from 'react'
import styles from './SearchContainer.module.scss';
import { GobalContextData } from "../../DataContext";
import { Link } from 'react-router-dom';


let TITLE_TEXT_LIMIT = 25
let RELATED_PRODUCT_SHOW_LIMIT = 3;

export function getRelatedProduct (state, initData, search) {
  
  if(!state) return null
  const initDataClone = JSON.parse(JSON.stringify(initData))
  const stateID = state.map(state => state.id)
  const isExactFindBySearch = initDataClone.some(
    data => data.title.toLowerCase().includes(search.toLowerCase())
    && !stateID.includes(data.id)
    )
  return initDataClone.filter(data => {
    
    const stateCategory = [...new Set(state.map(state =>state.category))]
    const categoryPrfix = data.category.match(/\w+$/g)[0]
    if(!stateID.includes(data.id) && 
    (data.title.toLowerCase().includes(search.toLowerCase()) || 
    stateCategory.join().includes(categoryPrfix))){
      
      if(isExactFindBySearch && data.title.toLowerCase().includes(search.toLowerCase())){

        return data;
      }else if(!isExactFindBySearch){
        
        return data;
      }
    }
  })
}

const SearchContainer = ({search, state, handleRealatedSearch}) => {
  const {initData} = GobalContextData();

  const searchContainer = useRef()
  
  const getRelated = getRelatedProduct(state, initData, search).slice(0, RELATED_PRODUCT_SHOW_LIMIT);
  
function updateSearchHeight(){
    let root = document.documentElement;
    root.style.setProperty('--searchContainerHeight', searchContainer.current.offsetHeight + "px");
    
  }
 

  useEffect(()=>{
    if(!searchContainer.current) return
    updateSearchHeight()
    window.addEventListener('resize', updateSearchHeight);
    return () => window.removeEventListener('resize', updateSearchHeight);
  },[search])

  if(!search) return null;


  
  return (

    <div className={styles.searchContainer} ref={searchContainer}>
     

      <h2 className={styles.serchResult}>
        {search}
      </h2>

      {getRelated.length ? <div className={styles.serchRelated}>
        <p className={styles.serchRelated__lable}>Related: </p>
        <ul className={styles.searchRelated__List}>

            {
              getRelated.map(data => <li key={data.id}><Link to={`/react-shopeefy-app/product/${data.id}`} className='link' target="_blank" title={data.title}>{
              data.title.length > TITLE_TEXT_LIMIT ? data.title.slice(0,TITLE_TEXT_LIMIT) + "..." : data.title
              }</Link></li>) 
            
            }
          
          

        </ul>
      </div> : null
      }

    </div>



  )
}

export default SearchContainer