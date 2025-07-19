import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UsuarioBuscado from "../../componentes/UsuarioBuscado.jsx";
import "./VistaModificar.css";
let apiUsers = "https://fake-api-banco-ahorros-1.onrender.com/usuarios"

const VistaModificar = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioBuscado, setUsuarioBuscado] = useState("");
    let redireccion = useNavigate();
    let {grupo} = useParams();

    function getUsers() {
        fetch(apiUsers)
            .then((response) => response.json())
            .then((data) => {
                const todosLosUsuarios = (data);
                const soloUsers = todosLosUsuarios.filter((u) => u.tipo === "USER" && u.grupo === grupo);
                setUsuarios(soloUsers);
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getUsers();
    }, [])

    function crearUsuario (e) {
        e.preventDefault();
        redireccion(`/admin/crear/${grupo}`)
    }

    function regresar (e) {
        e.preventDefault();
        redireccion(`/admin/usuarios/${grupo}`)
    }

    const usuariosFiltrados = usuarioBuscado.trim() === ""
        ? usuarios
        : usuarios.filter((usuario) =>
            usuario.nombre.toLowerCase().includes(usuarioBuscado.toLowerCase())
        );

    return (
        <>
            <form className="formulario-usuarios">
                <input
                    value={usuarioBuscado}
                    onChange={(e) => setUsuarioBuscado(e.target.value)}
                    className="input-usuarios"
                    placeholder="Nombre usuario" />
                <button onClick={crearUsuario} className="boton-añadir">Agregar</button>
                <button onClick={regresar} className="boton-cancelar">Regresar</button>
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