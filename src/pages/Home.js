import {useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import FilterContainer from "../components/Filter/FilterContainer";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import { fetchProductThunk } from "../redux_store/ProductSilce";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../redux_store/ProductSilce";


const Home = () => {

  const dispatch = useDispatch()
  
  const {data: products, status} = useSelector(state => state.product)

  const [search, setSearch] = useState("")
  
  
  const [sort, setSort] = useState("category")

  useEffect(()=>{
    if(products.length > 0) return 
    dispatch(fetchProductThunk())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 
  if(status === STATUS.LOADING){
    return <h2>Loading....</h2>
  }

  if(status === STATUS.ERROR){
    return <h2>Something Went Wrong</h2>
  }
  
  
  
  return (
    <>
      <div className="mainHeader">
        <Navbar setSearch={setSearch} search={search} />
        
      </div>
      <div className={`mainBody ${search ? '' : 'hideSearchOption'}`}>
        <FilterContainer  products={products}/>
        <CardsContainer sort={sort} setSort={setSort} search={search} products={products}/>
      </div>
    </>
  )
}

export default Home