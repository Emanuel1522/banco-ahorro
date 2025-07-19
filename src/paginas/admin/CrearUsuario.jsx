import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Formularios.css"
let apiUsers = "https://fake-api-banco-ahorros-1.onrender.com/usuarios"

const CrearUsuario = () => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    let redireccion = useNavigate();


    function crearUsuario(e) {
        e.preventDefault();

        if (!nombre || !usuario || !contraseña) {
            alert("Por favor llena los campos!")
        } else {
            let nuevoUsuario = {
                id: id,
                nombre: nombre,
                inicio: usuario,
                contraseña: contraseña,
                tipo: "USER"
            }

            fetch(apiUsers, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(nuevoUsuario)
            }).then(() => {
                alert("Usuario creado con exito!")
                redireccion("/admin/inicio")
            }).catch((error) => {
                alert("Error al crear el usuario!")
                console.log(error)
            })
        }
    }

    function volverInicio(e) {
        e.preventDefault();
        redireccion("/admin/inicio")
    }

    return (
        <div className="formulario-container">
            <div className="form-box">
                <form onSubmit={crearUsuario} className="formulario-principal">
                    <h2 className="title">Crear Usuario</h2>
                    <input onChange={(e) => setId(e.target.value)} placeholder="ID" type="text" className="input"/>
                    <input onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" type="text" className="input"/>
                    <input onChange={(e) => setUsuario(e.target.value)} placeholder="Usuario" type="text" className="input"/>
                    <input onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" type="text" className="input"/>
                    <div className="botones">
                        <button type="submit" className="button">Confirmar</button>
                        <button onClick={volverInicio} className="button-cancelar">Regresar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CrearUsuario;