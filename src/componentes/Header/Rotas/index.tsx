import style from '../header.module.css';
import { Link } from 'react-router-dom';

export default function Rotas({ nome, link }: { nome: string, link: string }) {
  return (
    <>
      <li className={style.nav__item}><Link to={link} className={style.nav__link}>{nome}</Link></li>
    </>
  );
}