import React, { useState } from 'react';
import style from './header.module.css';
import Rotas from './Rotas';

function Header() {
  const [active, setActive] = useState(`${style.nav__menu}`);
  const [toggleIcon, setToggleIcon] = useState(`${style.nav__toggler}`);

  // ativar o botão nav menu
  const navToggle = () => {
    active === `${style.nav__menu}`
      ? setActive(`${style.nav__menu} ${style.nav__active}`)
      : setActive(`${style.nav__menu}`);

    // TogglerIcon

    toggleIcon === `${style.nav__toggler}`
      ? setToggleIcon(`${style.nav__toggler} ${style.toggle}`)
      : setToggleIcon(`${style.nav__toggler}`);
  };

  const links = [{
    nome: 'Home',
    link: '/'
  }, {
    nome: 'Login',
    link: '/login'
  }, {
    nome: 'Inserir Jogo',
    link: '/administrador/jogos'
  }];

  return (
    <>
      <nav className={style.nav}>
        <div className={style.logo}>
          <img src='/img/discount2.svg' alt='logo' />
          <a href='#' className={style.marca}>DiscountsFaFrm</a>
        </div>
        <ul className={active}>
          {links.map((item, index) => (
            <Rotas
              key={index}
              {...item}
            />
          ))};
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className={style.line1}></div>
          <div className={style.line2}></div>
          <div className={style.line3}></div>
        </div>
      </nav>
    </>
  );
}

export default Header;