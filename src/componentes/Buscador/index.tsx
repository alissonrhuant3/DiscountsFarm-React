import style from './Buscador.module.css';
import { CgSearch } from 'react-icons/cg';

interface Props {
  pesquisar: string,
  setPesquisar: React.Dispatch<React.SetStateAction<string>>
}

function Buscador({ pesquisar, setPesquisar }: Props) {
  return (
    <div className={style.buscador}>
      <label htmlFor="pesquisar">Pesquisar</label>
      <input value={pesquisar} id='pesquisar' name='pesquisar' type='text' onChange={evento => setPesquisar(evento.target.value)} placeholder='Buscar'></input>
      <CgSearch size={20} color='#4C4D5E' style={{ position: 'fixed' }} />
    </div>
  );
}

export default Buscador;