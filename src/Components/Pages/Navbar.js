import React from 'react';
import '../Styles/Navbar.css';
import LogoImg from '../Assets/logo.png';


function Navbar() {
  return (
    <header className='header'>
        <div className='header__wrapper'>
            <div className='header__logo-wrapper'>
                <img src= {LogoImg} className='header__logo-img'></img>
                <p className='header__logo-text'>Laboratorizz</p>
            </div>
        </div>
    </header>
  )
}

export default Navbar