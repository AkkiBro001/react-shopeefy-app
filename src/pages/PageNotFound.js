import React from 'react'

import {BiError} from 'react-icons/bi';
import { Link } from 'react-router-dom';


const PageNotFound = ({error, msg}) => {
  return (
    
      <div className="notFound">
        <h2><BiError/> {error}</h2>
        <Link to="/react-shopeefy-app">
          {msg}
        </Link>
      </div>
    
  )
}

export default PageNotFound