import React from 'react';
import style from './rodape.module.css';


function Rodape() {
  return (
    <footer className={style.rodape}>
      <p className={style.rodape__paragrafo} id='name'>DiscountsFarm©<sup id='sup'>2023</sup></p>
      <p className={style.rodape__paragrafo} id='direitos'>Todos os Direitos reservados</p>
    </footer>
  );
}

export default Rodape;