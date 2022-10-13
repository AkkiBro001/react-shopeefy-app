import { useEffect, useState } from "react";
import SearchContainer from "../components/SearchContainer/SearchContainer";
import Navbar from "../components/Navbar/Navbar";
import FilterContainer from "../components/Filter/FilterContainer";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import { GobalContextData } from "../DataContext";
import { ACTION } from "../DataContext";

const Home = () => {
  const {state, dispatch, category} = GobalContextData()
 
  const [search, setSearch] = useState("")
  // const [filter, setFilter] = useState({category:[], price:25, rating:[]})
  
  // useEffect(()=>{
  //   dispatch({type: ACTION.Search_Filter_Sort, payload: {search}})
  // }, [search])
  
  return (
    <>
    <div className="mainHeader">
    <Navbar setSearch = {setSearch} search = {search}/>
    <SearchContainer search = {search}/>
    </div>
    <div className={`mainBody ${search ? '' : 'hideSearchOption'}`}>
      <FilterContainer category={category}/>
      <CardsContainer state={state}/>
    </div>
    </>
  )
}

export default Home