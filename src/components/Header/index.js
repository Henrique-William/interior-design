import './header.css'

import React from 'react'

const Header = () => {
  return (
    <section className='header'> 
        <img 
          src='/imagens/Header_img.png'
          alt='Imagem de uma sala confotável'
          className='header__img'
        />
        <div className='header__texto'>
          <h1 className='header__titulo'>Let Your Home Be Unique</h1>
          <p className='header__subtitulo'>
            There are many variations of the passages of
            lorem Ipsum fromavailable, majority.
          </p>
          <a className='header__botao'
            href='https://www.instagram.com/beatrizrluciano?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' 
            target='new'
          >
            Get Started
            <img 
              src='/imagens/Flecha.svg'
              alt='Seta de link'
            />
          </a>
        </div>
        
    </section>
    
  );
};

export default Header;
