import React from 'react';
import Logo from '../img/logo.png';

const Header = () => {
  return (
    <header className='header-container'>
      <div className='header-row user'>
        <img src={Logo} alt="" />
        <p>Hola, <br />
          <span>Juan Manuel!</span>
        </p>
      </div>

      <div className='header-row menu'>
        <nav>
          <ul>
            <li><a href="#" className='selected'>Panel</a></li>
            <li><a href="#">cotizaciones</a></li>
            <li><a href="#">Launchpad</a></li>
            <li><a href="#">Referidos</a></li>
            <li><a href="#">Configuración</a></li>
          </ul>
        </nav>
      </div>

      <div className='header-row products'>
        <span>Productos</span>
        <nav>
          <ul>
            <li><a href="#">Exchange</a></li>
            <li><a href="#">Inversiones <span>Nuevo!</span></a></li>
            <li><a href="#">Créditos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header