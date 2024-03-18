import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  
  return (
    <div className='header'>
        <div className='icon-con'>
            {/* <img className="chef-icon" src={chefImg} alt="chef"></img> */}
        </div>
        <div className='menus'>
            <ul className='menu-list'>
                <Link to="/" className='hdr-link'><li>Home</li></Link>
                <Link to="/recipe" className='hdr-link'><li>Recipes</li></Link>
                <Link className='hdr-link'><li>Contact Us</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header;