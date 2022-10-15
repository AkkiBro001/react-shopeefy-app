import { useEffect, useState } from "react";
import SearchContainer from "../components/SearchContainer/SearchContainer";
import Navbar from "../components/Navbar/Navbar";
import FilterContainer from "../components/Filter/FilterContainer";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import { GobalContextData } from "../DataContext";
import { ACTION } from "../DataContext";

const Home = () => {


  const { state, dispatch, category } = GobalContextData()

  const [search, setSearch] = useState("")
  const [relatedSearch, setRelatedSearch] = useState([])
  const [filter, setFilter] = useState({
    reset: false,
    price: 1000,
    category: [],
    rate: []
  })
  
  const [sort, setSort] = useState("category")

  function handleRealatedSearch(e){
    
  }
  
  function handleFilter(e) {
    
    const { name, value } = e.target;
    setFilter((preVal) => {
      if (name === 'reset') {
        return {
          reset: false,
          price: 1000,
          category: [],
          rate: []
        }
      } else if (name === 'price') {
        return { ...preVal, price: value }
      } else if (name === 'category') {
        const isChecked = preVal.category.includes(value)
        return {
          ...preVal,
          category: isChecked ? preVal.category.filter(v => v !== value) : [...preVal.category, value]
        }

      } else if (name === 'rate') {
        const isChecked = preVal.rate.includes(value)

        return {
          ...preVal,
          rate: isChecked ? preVal.rate.filter(v => v !== value) : [...preVal.rate, value]
        }

      }

    })

  }

  useEffect(()=>{
    dispatch({type: ACTION.Search_Filter_Sort, payload: {search, filter, sort}})
  }, [search, filter, sort])

  

  return (
    <>
      <div className="mainHeader">
        <Navbar setSearch={setSearch} search={search} />
        <SearchContainer search={search} state={state} handleRealatedSearch={handleRealatedSearch}/>
      </div>
      <div className={`mainBody ${search ? '' : 'hideSearchOption'}`}>
        <FilterContainer category={category} filter={filter} handleFilter={handleFilter} />
        <CardsContainer state={state} sort={sort} setSort={setSort} search={search}/>
      </div>
    </>
  )
}

export default Home