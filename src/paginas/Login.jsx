import "./Formularios.css";
import { tokenGenerator } from "../ayudas/funciones.js"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { usuarioss } from "../servicios/bd.js";
let apiUsers = "https://fake-api-banco-ahorros-1.onrender.com/usuarios"

const Login = () => {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [usuarios, setUsuarios] = useState([])
    let redireccion = useNavigate()

    function getUsers() {
        fetch(apiUsers)
            .then((response) => response.json())
            .then((data) => {
                const todosLosUsuarios = [...usuarioss, ...data]; 
                setUsuarios(todosLosUsuarios);
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getUsers();
    }, [])

    function buscarUsuario() {
        let usuarioEncontrado = usuarios.find((usuario) => usuario.inicio === nombre.trim() && usuario.contraseña === contraseña);
        return usuarioEncontrado;
    }

    function ingresar(e) {
        e.preventDefault();
        let usuarioEncontrado = buscarUsuario();
        if (usuarioEncontrado) {
            if (usuarioEncontrado.tipo === "USER") {
                alert("Bienvenido " + usuarioEncontrado.nombre);
                let token = tokenGenerator();
                localStorage.setItem("token", token);
                localStorage.setItem("rol", "user")
                redireccion("/user/inicio");
            } else if (usuarioEncontrado.tipo === "ADMIN") {
                alert("Bienvenido " + usuarioEncontrado.nombre);
                let token = tokenGenerator();
                localStorage.setItem("token", token);
                localStorage.setItem("rol", "admin")
                redireccion("/admin/inicio");
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        }
    }

    return (
        <div className="formulario">
            <div className="title">Inicio de Sesión</div>
            <form onSubmit={ingresar} className="formulario-principal">
                <input
                    type="text"
                    placeholder="Usuario"
                    value={nombre}
                    className="input"
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Contraseña"
                    value={contraseña}
                    className="input"
                    onChange={(e) => setContraseña(e.target.value)}
                />
                <button type="submit" className="button">Ingresar</button>
            </form>
        </div>
    )
}
export default Login;