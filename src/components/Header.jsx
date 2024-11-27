import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="headerSection">
        <div className="left">
          <div className="title">
            <h2>Shopping Mall</h2>
          </div>
        </div>
        <div className="center">
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Childern</li>
            <li>Beauty</li>
          </ul>
        </div>
        <div className="searchBar">
          <input type="text" placeholder='Search...' />
        </div>
        <div className="right">
          <div className="signIn">
            Signin / Signup
          </div>
          <div className="cart">
            Cart
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header