import React from 'react'
import './Menu.css'

const Menu = () => {
  return (
      <div className='menu'>
          <div className="MenuContainer">
              <div className="MenuHeader">
                  <p>MENU</p>
              </div>
              <div className="MenuListContainer">
                  <div className="MenuList">
                      <p>Invoice</p>
                  </div>
                  <div className="MenuList">
                      <p>Accounts</p>
                  </div>
                  <div className="MenuList">
                      <p>Settings</p>
                  </div>
                  <div className="MenuList">
                      <p>Logout</p>
                  </div>
              </div>
              <div className="MenuFotter">
                  <p>footter</p>
              </div>
          </div>
    </div>
  )
}

export default Menu