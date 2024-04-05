import './menu.css'

import React from 'react';

const Menu = () => {
  return (
    <header className='menu'>
      <img 
        src='/imagens/Logo.svg' 
        alt='Logo' 
        className='menu__logo'
      />
      <ul className='menu__lista'>

        <li className='menu__links'>Home</li>
        <li className='menu__links'>Pages</li>
        <li className='menu__links'>Services</li>
        <li className='menu__links'>Project</li>
        <li className='menu__links'>Blog</li>
        <li className='menu__links'>Contact</li>

        <img
          src='/imagens/Lupa.svg'
          alt='Lupa de pesquisa'
        />
        
      </ul>
    </header>
  );
};

export default Menu;
