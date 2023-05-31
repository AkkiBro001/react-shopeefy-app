import {useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import FilterContainer from "../components/Filter/FilterContainer";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import { fetchProductThunk } from "../redux_store/ProductSilce";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../redux_store/ProductSilce";
import Loading from "../components/Loading/Loading";
import PageNotFound from "./PageNotFound";


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
 
  
  
 
  
  return (
    <>
      <div className="mainHeader">
        <Navbar setSearch={setSearch} search={search} />
        
      </div>
      {status === STATUS.LOADING ? <Loading/> : status === STATUS.ERROR ? <PageNotFound error="Something went wrong !!!" msg="try after some time"/> :
      <div className={`mainBody ${search ? '' : 'hideSearchOption'}`}>
        <FilterContainer  products={products}/>
        <CardsContainer sort={sort} setSort={setSort} search={search} products={products}/>
      </div>}
    </>
  )
}

export default Home