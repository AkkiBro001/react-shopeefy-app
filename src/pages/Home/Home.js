import SearchContainer from "../../components/SearchContainer/SearchContainer"
import Navbar from "../../components/Navbar/Navbar"
import FilterContainer from "../../components/Filter/FilterContainer"
import CardsContainer from "../../components/CardsContainer/CardsContainer"

const Home = () => {
  return (
    <>
    <div className="mainHeader">

    <Navbar/>
    <SearchContainer/>
    </div>
    <div className="mainBody">
      <FilterContainer/>
      <CardsContainer/>
    </div>
    </>
  )
}

export default Home