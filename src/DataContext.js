import React, { createContext, useEffect, useReducer, useContext, useState } from 'react';

export const ACTION = {
  LoadAllData: 'loadalldata',
  Search_Filter_Sort: 'search_filter_sort'
}


const DataTransfer = createContext()

const DataContext = ({children}) => {
//!Store initial Data from server
 const [initData, setInitData] = useState([]) 
 const [category, setCategory] = useState([]) 

 
 const [state, dispatch] = useReducer(reducer, []);

function reducer(states, action){
    switch (action.type){
      case ACTION.LoadAllData: 
          return action.payload;
      case ACTION.Search_Filter_Sort:
          return states 

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
      dispatch({type: ACTION.LoadAllData, payload: data})
      setCategory(JSON.parse(JSON.stringify(category)))
  })
}


//!Here fetch and Store data initial
useEffect(()=>{
  fetchData();
  
}, [])



  return (
    <DataTransfer.Provider value={{dispatch, state, category}}>
      {children}
    </DataTransfer.Provider>
  )
}

function GlobalContextData (){
  return useContext(DataTransfer)
}

export default DataContext;
export {GlobalContextData as GobalContextData}