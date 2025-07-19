import { useState, useEffect } from "react";
import { usuarioss } from "../../servicios/bd.js";
import { useNavigate } from "react-router-dom";
import UsuarioBuscado from "../../componentes/UsuarioBuscado.jsx";
import "./VistaModificar.css";
let apiUsers = "https://fake-api-banco-ahorros-1.onrender.com/usuarios"

const VistaModificar = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioBuscado, setUsuarioBuscado] = useState("");
    let redireccion = useNavigate();

    function getUsers() {
        fetch(apiUsers)
            .then((response) => response.json())
            .then((data) => {
                const todosLosUsuarios = [...usuarioss, ...data];
                const soloUsers = todosLosUsuarios.filter((u) => u.tipo === "USER");
                setUsuarios(soloUsers);
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getUsers();
    }, [])

    function crearUsuario (e) {
        e.preventDefault();
        redireccion("/admin/crear")
    }

    const usuariosFiltrados = usuarioBuscado.trim() === ""
        ? usuarios
        : usuarios.filter((usuario) =>
            usuario.nombre.toLowerCase().includes(usuarioBuscado.toLowerCase())
        );

    return (
        <>
            <form onSubmit={crearUsuario} className="formulario-usuarios">
                <input
                    value={usuarioBuscado}
                    onChange={(e) => setUsuarioBuscado(e.target.value)}
                    className="input-usuarios"
                    placeholder="Nombre usuario" />
                <button type="submit" className="boton-añadir">Agregar</button>
            </form>

            {usuariosFiltrados.length === 0 ? (
                <div className="lista-usuarios">
                    <p>No hay usuarios</p>
                </div>
            ) : (
                <ul className="lista-usuarios">
                    {usuariosFiltrados
                        .map((usuario) => (
                            <UsuarioBuscado key={usuario.id} item={usuario} actualizarUsuarios={getUsers}/>
                        ))}
                </ul>
            )}
        </>
    );
}
export default VistaModificar;