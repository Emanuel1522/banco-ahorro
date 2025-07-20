import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Formularios.css"
let apiUsers = "https://fake-api-banco-ahorros-1.onrender.com/usuarios"

const CrearUsuario = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    let redireccion = useNavigate();
    let { grupo } = useParams();

    useEffect(() => {
        fetch(apiUsers)
            .then((res) => res.json())
            .then((data) => {
                setUsuarios(data)
            });
    }, []);


    function crearUsuario(e) {
        e.preventDefault();
        let idEncontrado = usuarios.find(u => u.id === id)
        let usuarioEncontrado = usuarios.find(u => u.inicio === usuario)
        let contraseñaEncontrada = usuarios.find(u => u.contraseña === contraseña)

        if (!id || !nombre || !usuario || !contraseña) {
            alert("Por favor llena los campos!")
        } else if (idEncontrado){
            alert("Por favor ingresa un id diferente")
            return;
        } else if (usuarioEncontrado){
            alert("Por favor ingresa un nombre de usuario diferente")
        } else if (contraseñaEncontrada){
            alert("por favor ingresa una contraseña diferente")
        } else {
            let nuevoUsuario = {
                id: id,
                nombre: nombre,
                grupo: grupo,
                ahorro: "0",
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

    return (
        <div className="formulario-container">
            <div className="form-box">
                <form className="formulario-principal">
                    <h2 className="title">Crear Usuario</h2>
                    <input onChange={(e) => setId(e.target.value)} placeholder="ID" type="text" className="input" />
                    <input onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" type="text" className="input" />
                    <input onChange={(e) => setUsuario(e.target.value)} placeholder="Usuario" type="text" className="input" />
                    <input onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" type="text" className="input" />
                    <div className="botones">
                        <button onClick={crearUsuario} className="button">Confirmar</button>
                        <button onClick={() => { redireccion(`/admin/lista-modificar/${grupo}`) }} className="button-cancelar">Regresar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CrearUsuario;