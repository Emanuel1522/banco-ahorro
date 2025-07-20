import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Formularios.css";
let apiUsers = "https://fake-api-banco-ahorros-1.onrender.com/usuarios"

const ModificarUsuario = () => {
    const [loading, setLoading] = useState(true);
    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState("");
    const [grupo, setGrupo] = useState("");
    const [ahorro, setAhorro] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    let { id } = useParams();
    let redireccion = useNavigate();

    useEffect(() => {
        fetch(apiUsers)
            .then((res) => res.json())
            .then((data) => {
                setUsuarios(data)
                let usuarioBuscado = data.find(u => u.id === id);
                setNombre(usuarioBuscado.nombre || "");
                setGrupo(usuarioBuscado.grupo || "")
                setAhorro(usuarioBuscado.ahorro || "")
                setUsuario(usuarioBuscado.inicio || "");
                setContraseña(usuarioBuscado.contraseña || "");
                setLoading(false);
            });
    }, [id]);

    function editarUsuario(e) {
        e.preventDefault();
        let otrosUsuarios = usuarios.filter((u) => u.id !== id)
        let usuarioEncontrado = otrosUsuarios.find(u => u.inicio === usuario)
        let contraseñaEncontrada = otrosUsuarios.find(u => u.contraseña === contraseña)

        if (usuarioEncontrado) {
            alert("Por favor elija otro nombre de usuario")
            return;
        } else if (contraseñaEncontrada) {
            alert("Por favor elija otra contraseña")
            return;
        } else {
            let usuarioEditado = {
                id: id,
                nombre: nombre,
                grupo: grupo,
                ahorro: ahorro,
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
                redireccion(`/admin/lista-modificar/${grupo}`)
            })
        }
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
                    <select value={grupo} onChange={(e) => setGrupo(e.target.value)} className="input">
                        <option value="">Seleccione un grupo</option>
                        {["10-1", "10-2", "10-3", "10-4", "11-1", "11-2", "11-3", "11-4"].map((g) => (
                            <option key={g} value={g}>{g}</option>
                        ))}
                    </select>
                    <input value={ahorro} onChange={(e) => setAhorro(e.target.value)} placeholder="Ahorro" type="text" className="input" />
                    <input value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Nombre usuario" type="text" className="input" />
                    <input value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" type="text" className="input" />
                    <div className="botones">
                        <button onClick={editarUsuario} className="button">Confirmar</button>
                        <button onClick={() => { redireccion(`/admin/lista-modificar/${grupo}`) }} className="button-cancelar">Regresar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ModificarUsuario;