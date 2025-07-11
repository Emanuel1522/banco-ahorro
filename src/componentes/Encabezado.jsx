import { useNavigate } from "react-router-dom";
import { cerrarSesion } from "../ayudas/funciones";

const Encabezado = () => {
    let redireccion = useNavigate();

    return (
        <header className="encabezado">
            <div className="contenedor-encabezado">
                <section>
                    <h1>Banco Ahorros</h1>
                </section>
                <section>
                    <nav>
                        <ul>
                            <li>option1</li>
                            <li>option2</li>
                            <li>option3</li>
                            <li>option4</li>
                        </ul>
                    </nav>
                </section>
                <section>
                    <button onClick={() => cerrarSesion(redireccion)} className="botonCierre">Cerrar sesion</button>
                </section>
            </div>
        </header>
    )
}

export default Encabezado;