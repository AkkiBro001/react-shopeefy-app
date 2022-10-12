import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductContainer from '../components/Product/ProductContainer'





const Product = () => {
    return (
        <>
            <div className="mainHeader">

                <Navbar />

            </div>
            <div className="productMain">
                <ProductContainer />
            </div>
        </>

    )
}

export default Product