import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import UsuarioItem from "../../componentes/UsuarioItem.jsx";
let apiUsers = "https://fake-api-banco-ahorros-1.onrender.com/usuarios"

const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioBuscado, setUsuarioBuscado] = useState("");
    let { grupo } = useParams();
    let redireccion = useNavigate();

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
        <h2 className="titulo-grupo">{grupo}</h2>
            <form className="formulario-usuarios">
                <input
                    value={usuarioBuscado}
                    onChange={(e) => setUsuarioBuscado(e.target.value)}
                    className="input-usuarios"
                    placeholder="Nombre usuario" />
                <button onClick={() => redireccion(`/admin/lista-modificar/${grupo}`)} className="boton-añadir">Editar grupo</button>
                <button onClick={() => { redireccion("/admin/inicio") }} className="boton-cancelar">Regresar</button>
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