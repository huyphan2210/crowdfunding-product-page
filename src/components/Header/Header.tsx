import { MouseEvent } from 'react';

import './Header.css';

import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/icon-hamburger.svg';
import close from '../../assets/images/icon-close-menu.svg';

function Header() {
  function openMenu(e: MouseEvent<HTMLImageElement>) {
    document.getElementsByTagName('nav')[0].style.display = 'block';
    e.currentTarget.style.display = 'none';
    if (e.currentTarget.parentElement) {
      e.currentTarget.parentElement.getElementsByTagName('img')[2].style.display = 'block';
    }
  }

  function closeMenu(e: MouseEvent<HTMLImageElement>) {
    document.getElementsByTagName('nav')[0].style.display = '';
    e.currentTarget.style.display = 'none';
    if (e.currentTarget.parentElement) {
      e.currentTarget.parentElement.getElementsByTagName('img')[1].style.display = 'block';
    }
  }
  return (
    <div id="heading">
      <img src={logo} alt="Logo"></img>
      <img src={menu} alt="Menu" onClick={openMenu}></img>
      <img src={close} alt="Close Menu" onClick={closeMenu}></img>
      <nav>
        <button type='button'>About</button>
        <button type='button'>Discover</button>
        <button type='button'>Get Started</button>
      </nav>
    </div>
  )
}

export default Header;

