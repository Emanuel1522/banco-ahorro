import React, { useState } from 'react';
import "../Formularios.css";

export default function EditarPerfil() {
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const limpiarCampos = () => {
    setNombre('');
    setUsuario('');
    setContraseña('');
  };

  const guardarCambios = async (e) => {
    e.preventDefault();

    const datos = {
      nombre,
      usuario,
      contraseña
    };

    try {
      const res = await fetch('https://fake-api-banco-ahorros-1.onrender.com/usuarios', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });

      if (res.ok) {
        alert('✅ Cambios guardados correctamente');
      } else {
        alert('❌ Error al guardar los cambios');
      }
    } catch (error) {
      console.error(error);
      alert('💥 Error de conexión con el servidor');
    }
  };

  return (
    <div className="formulario-container">
      <div className="form-box">
        <h2 className="title">Editar perfil</h2>
        <form onSubmit={guardarCambios} className="formulario-principal">
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
            <button type="submit" className="button">Guardar</button>
            <button type="button" className="button-cancelar" onClick={limpiarCampos}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
