import { Link } from "react-router-dom";
import React from 'react'

const Header = () => {
  const currentRoute = window.location.pathname;


  return (
    <div className="d-flex justify-content-between mb-5">
      <h1>Favorite Authors</h1>
      {currentRoute === '/'
        ? <Link to={'/authors/new'} className="btn btn-primary btn-lg"> Add New Author</Link>
        : <Link to={'/'} className="btn btn-secondary btn-lg"> Home</Link>
      }
    </div>
  )
}

export default Header
