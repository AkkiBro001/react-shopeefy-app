import React, { createContext, useEffect, useReducer, useContext, useState } from 'react';
import { AiOutlineCodepen } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

export const ACTION = {
  LoadAllData: 'loadalldata',
  Search_Filter_Sort: 'search_filter_sort',
  Display_Product: 'displayproduct'
}


const DataTransfer = createContext()

const DataContext = ({children}) => {
//!Store initial Data from server
 const [initData, setInitData] = useState([]) 
 const [category, setCategory] = useState([]) 

 const path = useLocation().pathname;
 const lastPath = path.split('/')[path.split('/').length-1];
 
 const [state, dispatch] = useReducer(reducer, []);

function reducer(states, action){
    
    switch (action.type){
      case ACTION.LoadAllData: 
          { 
            return action.payload;
          }
      case ACTION.Search_Filter_Sort:
          const {search, filter, sort} = action.payload;
          //!Grab Clone Data
          const mainData = JSON.parse(JSON.stringify(initData))
          // const relatedData = JSON.parse(JSON.stringify(initData))
          const products = mainData.filter(data => {
            //!1. Search
            if(data.title.toLowerCase().includes(search.toLowerCase()) || 
            data.description.toLowerCase().includes(search.toLowerCase())){
              return data
            }
          }).filter(data => {
            
            //!2. filter
            if(data.price <= parseInt(filter.price)
              && (filter.category.includes(data.category) || filter.category.length === 0)
              && (filter.rate.includes(Math.round(data.rating.rate).toString()) || filter.rate.length === 0)
              ){
                
              return data
            }
          })

          //!4. sorting
          if(sort === "priceLow"){
            
            products.sort((a, b) => {return a.price - b.price})
          }else if(sort === "priceHigh"){
            products.sort((a, b) => {return b.price - a.price})
          }else if(sort === "rate"){
            products.sort((a, b) => {return b.rating.rate - a.rating.rate})
          }else if(sort === "popular"){
            products.sort((a, b) => {return b.rating.count - a.rating.count})
          }

          return products;
        
          case ACTION.Display_Product : 
          {
            const mainData = JSON.parse(JSON.stringify(initData))
           return mainData.filter(data => data.id === parseInt(action.payload.id))
          }

      default: return states;

    }
}


async function fetchData () {

  const Product = await fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => data);

  const Category = await fetch('https://fakestoreapi.com/products/categories')
  .then(res => res.json())
  .then(data => data);

  Promise.all([Product, Category]).then(result => {
      const [data, category] = result;
      
      setInitData(JSON.parse(JSON.stringify(data)))
      
      if(lastPath === 'react-shopeefy-app'){
         dispatch({type: ACTION.LoadAllData, payload: data})
      }
      setCategory(JSON.parse(JSON.stringify(category)))
  })
}


//!Here fetch and Store data initial
useEffect(()=>{
  fetchData();
}, [])




  return (
    <DataTransfer.Provider value={{dispatch, state, category, initData}}>
      {children}
    </DataTransfer.Provider>
  )
}

function GlobalContextData (){
  return useContext(DataTransfer)
}

export default DataContext;
export {GlobalContextData as GobalContextData}