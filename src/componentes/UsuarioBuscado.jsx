import { useNavigate } from "react-router-dom";
let apiUsers = "https://fake-api-banco-ahorros-1.onrender.com/usuarios"

const UsuarioBuscado = ({ item, actualizarUsuarios }) => {
    let redireccion = useNavigate();

    function modificarUsuario() {
        redireccion(`/admin/modificar/${item.id}`);
    }

    function eliminarUsuario() {
        fetch(apiUsers + "/" + item.id, {
            method: "DELETE",
        }).then(()=> {
            actualizarUsuarios()
            alert("Usuario eliminado")
        }).catch((error) => {
            alert("Error al eliminar el usuario")
        })
        
    }

    return (
        <div className="usuario-item">
            <div className="info-usuario">
                <p>{item.nombre}</p>
                <p>{item.tipo}</p>
            </div>
            <div className="acciones-usuario">
                <button onClick={modificarUsuario}>✏️</button>
                <button onClick={eliminarUsuario}>❌</button>
            </div>
        </div>
    )
}

export default UsuarioBuscado;