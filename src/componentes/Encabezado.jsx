import { useNavigate } from "react-router-dom";
import { cerrarSesion, editar } from "../ayudas/funciones"
import { useState } from "react";

const Encabezado = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)
  let redireccion = useNavigate();

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenuYRedirigir = (accion) => {
    setMenuAbierto(false);
    accion(redireccion);
  };

  const rolGuardado = localStorage.getItem("rol")

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

        <div className="hamburguesa" onClick={toggleMenu}>
          ☰
        </div>

        <section className={`botones-encabezado ${menuAbierto ? "mostrar" : ""}`}>
          {rolGuardado === "admin" && (
            <button onClick={() => cerrarMenuYRedirigir(editar)} className="botonEditar">
              Editar perfil
            </button>
          )}
          <button onClick={() => cerrarMenuYRedirigir(cerrarSesion)} className="botonCierre">Cerrar sesion</button>
        </section>
      </div>
    </header>
  );
};

export default Encabezado;
