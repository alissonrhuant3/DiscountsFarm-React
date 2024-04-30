import Slidee from 'componentes/Slidee';
import { Outlet } from 'react-router-dom';

function PaginaPadrao() {
  return (
    <>
      <div>
        <Slidee />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default PaginaPadrao;