

const UsuarioBuscado = ({ item }) => {

    return (
        <div className="usuario-item">
            <div className="info-usuario">
                <p>{item.nombre}</p>
                <p>{item.tipo}</p>
            </div>
            <div className="acciones-usuario">
                <button>✏️</button>
                <button>❌</button>
            </div>
        </div>
    )
}

export default UsuarioBuscado;