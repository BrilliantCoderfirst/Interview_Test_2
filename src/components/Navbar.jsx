import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <div className="menuIcon">
                <MenuIcon />
            </div>
            <div className="logo">
                <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="" />
            </div>
            <div className="blank"></div>
        </nav>
    </>
  )
}

export default Navbar;