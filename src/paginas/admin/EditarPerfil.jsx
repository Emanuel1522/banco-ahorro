import { useState, useEffect } from 'react';
import "../Formularios.css";
import { useNavigate } from 'react-router-dom';
const apiUsers = "https://fake-api-banco-ahorros-1.onrender.com/usuarios"

export default function EditarPerfil() {
  const [id, setId] = useState(localStorage.getItem("id"))
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  let redireccion = useNavigate();

  useEffect(() => {
    fetch(apiUsers)
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data)
        let usuarioBuscado = data.find(u => u.id === id);
        setNombre(usuarioBuscado.nombre || "");
        setUsuario(usuarioBuscado.inicio || "");
        setContraseña(usuarioBuscado.contraseña || "");
      });
  }, [id]);

  function guardarCambios(e) {
    e.preventDefault();
    let otrosUsuarios = usuarios.filter((u) => u.id !== id);
    let usuarioEncontrado = otrosUsuarios.find(u => u.inicio === usuario)
    let contraseñaEncontrada = otrosUsuarios.find(u => u.contraseña === contraseña)

    if (usuarioEncontrado) {
      alert("Por favor ingresa otro nombre de usuario")
      return;
    } else if (contraseñaEncontrada) {
      alert("Por favor ingresa otra contraseña")
      return;
    } else {
      let datos = {
        id: id,
        nombre: nombre,
        inicio: usuario,
        contraseña: contraseña,
        tipo: "ADMIN"
      };

      fetch(`${apiUsers}/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(datos)
      }).then(() => {
        alert("Administrador modificado con exito!")
        redireccion("/admin/inicio")
      }).catch((error) => {
        alert("Error al guardar los cambios")
        console.log(error)
      })
    }
  }

  return (
    <div className="formulario-container">
      <div className="form-box">
        <form className="formulario-principal">
          <h2 className="title">Editar perfil</h2>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            type="text"
            className="input"
          />
          <input
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Usuario"
            type="text"
            className="input"
          />
          <input
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            placeholder="Contraseña"
            type="text"
            className="input"
          />
          <div className="botones">
            <button onClick={guardarCambios} className="button">Guardar</button>
            <button className="button-cancelar" onClick={() => { redireccion("/admin/inicio") }}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
