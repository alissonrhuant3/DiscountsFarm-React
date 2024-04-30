import { useNavigate } from 'react-router-dom';
import style from './NotFound.module.css';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.container__voltar}>
        <button onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <img src='/img/not_found.svg' alt="Não Encontrado" />
    </div>

  );
}

export default NotFound;