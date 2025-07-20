const UsuarioItem = ({ item }) => {
    return (
        <div className="usuario-item">
            <div className="info-usuario">
                <p className="nombre-item">{item.nombre}</p>
                <div className="detalles-usuario">
                    <p className="info-item">{item.ahorro}</p>
                    <p className="info-item">{item.grupo}</p>
                    <p className="info-item">{item.tipo}</p>
                </div>
            </div>
        </div>
    )
}
export default UsuarioItem;