import { useNavigate } from "react-router-dom";
import { cerrarSesion } from "../ayudas/funciones"
import { editar } from "../ayudas/funciones";

const Encabezado = () => {
  let redireccion = useNavigate();

  return (
    <header className="encabezado">
      <div className="contenedor-encabezado">
        <section className="titulo">
          <h1>BEA</h1>

          <span className="barra">|</span>

          <div className="subtitulo">
            <p>Banco escolar Alpuma</p>
          </div>
        </section>

        <section>
          <button onClick={() => editar(redireccion)} className="botonEditar">
            Editar perfil 
          </button>
          <button
            onClick={() => cerrarSesion(redireccion)}
            className="botonCierre"
          >
            Cerrar sesion
          </button>
        </section>
      </div>
    </header>
  );
};

export default Encabezado;
