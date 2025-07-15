import { useState } from "react";
import { usuarios } from "../servicios/bd.js";
import UsuarioBuscado from "./UsuarioBuscado.jsx";
import "./BuscarUsuario.css";

const BuscarUsuario = () => {
    const [usuarioBuscado, setUsuarioBuscado] = useState("");
    const [usuariosFiltrados, setUsuariosFiltrados] = useState(usuarios.filter((u) => u.tipo === "USER"));

    function controlBusqueda(e) {
        let value = e.target.value;
        setUsuarioBuscado(value);

        if (value.trim() === "") {
            setUsuariosFiltrados(usuarios);
        } else {
            let filtrado = usuarios.filter((usuario) =>
                usuario.nombre.toLowerCase().includes(value.toLowerCase())
            )
            setUsuariosFiltrados(filtrado);
        }
    }

        return (
            <>
                <form className="formulario-usuarios">
                    <input
                        value={usuarioBuscado}
                        onChange={controlBusqueda}
                        className="input-usuarios"
                        placeholder="Nombre usuario" />
                        <button className="boton-añadir">Agregar</button>
                </form>

                {setUsuariosFiltrados.length === 0 ? (
                    <div className="lista-usuarios">
                        <p>No hay usuarios</p>
                    </div>
                ) : (
                    <ul className="lista-usuarios">
                        {usuariosFiltrados
                            .map((usuario) => (
                                <UsuarioBuscado key={usuario.id} item={usuario} />
                            ))}
                    </ul>
                )}
            </>
        );
    }

    export default BuscarUsuario;