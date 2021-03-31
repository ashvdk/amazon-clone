import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon style={{
          color: 'white', backgroundColor: '#febd69', padding: '4px 5px', borderTopRightRadius: '3px',
          borderBottomRightRadius: '3px'
        }} />
      </div>


      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>

      <div className="header__optionBasket">
        <ShoppingBasket style={{ color: 'white' }} />
        <span className="header_optionLineTwo header_basketCount">0</span>
      </div>
    </div>
  )
}

export default Header
