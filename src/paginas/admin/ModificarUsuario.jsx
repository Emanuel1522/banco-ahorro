import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Formularios.css";
let apiUsers = "https://fake-api-banco-ahorros-1.onrender.com/usuarios"

const ModificarUsuario = () => {
    const [loading, setLoading] = useState(true);
    const [nombre, setNombre] = useState("");
    const [grupo, setGrupo] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    let { id } = useParams();
    let redireccion = useNavigate();

    useEffect(() => {
        fetch(`${apiUsers}/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setNombre(data.nombre);
                setGrupo(data.grupo);
                setUsuario(data.inicio);
                setContraseña(data.contraseña);
                setLoading(false);
            });
    }, [id]);

    function editarUsuario(e) {
        e.preventDefault();

        let usuarioEditado = {
            id: id,
            nombre: nombre,
            inicio: usuario,
            contraseña: contraseña,
            tipo: "USER"
        }
        fetch(`${apiUsers}/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(usuarioEditado)
        }).then(() => {
            alert("Usuario modificado")
            redireccion("/admin/inicio")
        })
    }

    if (loading) {
        return (
            <div className="formulario-container">
                <div className="form-box">
                    <div className="title">Cargando usuario...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="formulario-container">
            <div className="form-box">
                <form className="formulario-principal">
                    <div className="title">Editar Usuario</div>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" type="text" className="input" />
                    <input value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Nombre usuario" type="text" className="input" />
                    <input value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" type="text" className="input" />
                    <div className="botones">
                        <button onClick={editarUsuario} className="button">Confirmar</button>
                        <button onClick={()=>{redireccion(`/admin/lista-modificar/${grupo}`)}} className="button-cancelar">Regresar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ModificarUsuario;