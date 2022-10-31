import React, { createContext, useEffect, useReducer, useContext, useState } from 'react';
import { AiOutlineCodepen } from 'react-icons/ai';
import { MdImageNotSupported } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

export const ACTION = {
  LoadAllData: 'loadalldata',
  Search_Filter_Sort: 'search_filter_sort',
  Display_Product: 'displayproduct',
  Cart_Update: 'cartupdate'
}


const DataTransfer = createContext()

const DataContext = ({children}) => {
//!Store initial Data from server
 const [initData, setInitData] = useState([]) 
 const [category, setCategory] = useState([]) 
 const [state, dispatch] = useReducer(reducer, []);
 const [cart, setCart] = useState([])
 const [initialLoad, setInitialLoad] = useState(true);


 

function reducer(states, action){
    
    switch (action.type){
      case ACTION.LoadAllData: 
          { 
            setInitData(()=>{
              return action.payload.map(data => {
                  if(data.category.includes('clothing') && !data.title.includes('Laptops')){
                    return {...data, size:'S', cart: 0}
                  }else{
                    return {...data, cart: 0}
                  }
              })
            })

            

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

          case ACTION.Cart_Update : 
          {

            
            
            
          }

      default: return states;

    }
}


function handleCart(id, count, size){

    
    const updatedSize = state.some(value => value.id === id 
      && value.category.includes('clothing')
      && !value.title.includes('Laptops')) ? size : null

      if(cart.length === 0 || !cart.some(val => val.id === id)){
        setCart((preVal)=>{
          return [...preVal, {...state.find(items => items.id === id), size: updatedSize, cart: count}]
        })
      }else if(cart.some(val => val.id === id) && cart.some(val => val.size === updatedSize)){
        
        setCart(data => {
          return data.map(items => {
            
            if(items.id === id && items.size === updatedSize){
              return {...items, size: updatedSize, cart: count}
            }else{
              return items
            }
          })
          
        })
      }else{
        setCart((preVal)=>{
          return [...preVal, {...state.find(items => items.id === id), size: updatedSize, cart: count}]
        })
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
      
      // setInitData(JSON.parse(JSON.stringify(data)))
      
      if(initialLoad){
         dispatch({type: ACTION.LoadAllData, payload: data})
         
         setInitialLoad(false)
      }
       
      setCategory(JSON.parse(JSON.stringify(category)))
      
  })
}



//!Here fetch and Store data initial
useEffect(()=>{
  fetchData();
}, [])



  return (
    <DataTransfer.Provider value={{dispatch, state, category, initData, initialLoad, handleCart, cart}}>
      {children}
    </DataTransfer.Provider>
  )
}

function GlobalContextData (){
  return useContext(DataTransfer)
}

export default DataContext;
export {GlobalContextData as GobalContextData}