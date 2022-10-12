import { useState } from "react";
import SearchContainer from "../components/SearchContainer/SearchContainer";
import Navbar from "../components/Navbar/Navbar";
import FilterContainer from "../components/Filter/FilterContainer";
import CardsContainer from "../components/CardsContainer/CardsContainer";

const Home = () => {
  const [search, setSearch] = useState("")
  
  
  return (
    <>
    <div className="mainHeader">
    <Navbar setSearch = {setSearch} search = {search}/>
    <SearchContainer search = {search}/>
    </div>
    <div className={`mainBody ${search ? '' : 'hideSearchOption'}`}>
      <FilterContainer/>
      <CardsContainer/>
    </div>
    </>
  )
}

export default Home