import React from 'react'
import './Main.style.css'
import SubContents from './subContents/SubContent'
import Advertisement from './advertisement/Advertisement'

const Main = () => {
  return (
    <div className="Main">
      <SubContents />
      <SubContents />
      <SubContents />
      <Advertisement />

    </div>
  )
}

export default Main
