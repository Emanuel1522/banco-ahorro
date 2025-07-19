import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import UsuarioItem from "../../componentes/UsuarioItem.jsx";
let apiUsers = "https://fake-api-banco-ahorros-1.onrender.com/usuarios"

const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioBuscado, setUsuarioBuscado] = useState("");
    let { grupo } = useParams();

    function getUsers() {
        fetch(apiUsers)
            .then((response) => response.json())
            .then((data) => {
                const todosLosUsuarios = data;
                const soloUsers = todosLosUsuarios.filter((u) => u.tipo === "USER" && u.grupo === grupo);
                setUsuarios(soloUsers);
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getUsers();
    }, [])

    const usuariosFiltrados = usuarioBuscado.trim() === ""
        ? usuarios
        : usuarios.filter((usuario) =>
            usuario.nombre.toLowerCase().includes(usuarioBuscado.toLowerCase())
        );

    return (
        <>
            <form className="formulario-usuarios">
                <input
                    className="input-usuarios"
                    placeholder="Nombre usuario" />
                <button className="boton-añadir">Agregar</button>
            </form>

            {usuariosFiltrados.length === 0 ? (
                <div className="lista-usuarios">
                    <p>No hay usuarios</p>
                </div>
            ) : (
                <ul className="lista-usuarios">
                    {usuariosFiltrados
                        .map((usuario) => (
                            <UsuarioItem key={usuario.id} item={usuario} />
                        ))}
                </ul>
            )}
        </>
    )
}
export default ListaUsuarios;