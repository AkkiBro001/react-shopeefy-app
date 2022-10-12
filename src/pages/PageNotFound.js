import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import {BiError} from 'react-icons/bi';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
  return (
    <>
      <Navbar/>
      <div className="notFound">
        <h2><BiError/> Page Not Found</h2>
        <Link to="/react-shopeefy-app">
          Goto Home Page
        </Link>
      </div>
    </>
  )
}

export default PageNotFound