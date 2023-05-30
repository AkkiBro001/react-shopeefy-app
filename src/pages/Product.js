import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductContainer from '../components/Product/ProductContainer'
import {GobalContextData} from '../DataContext';
import { useParams } from 'react-router-dom';




const Product = ({hideSearch}) => {
    const {id} = useParams()
    const {state, initData, dispatch} = GobalContextData()
    const [product, setProduct] = useState([])
    
    useEffect(()=>{
        if(state.length === 0){
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json()).then(data => setProduct([data]))
        }else{
            
            setProduct(state)
        }
        
        
    },[id])

    

    return (
        <>
            <div className="mainHeader">

                <Navbar hideSearch = {hideSearch}/>

            </div>
            <div className="productMain">
                <ProductContainer product={product} intialData={initData} dispatch={dispatch} />
            </div>
        </>

    )
}

export default Product