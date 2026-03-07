import React from 'react'
import "./header.scss"
import TopHeader from '../components/TopHeader'

const Header = () => {
  return (
    <>
      <header>
        <div className="header_container container">
          <TopHeader/>
        </div>
      </header>
    </>
  )
}

export default Header
