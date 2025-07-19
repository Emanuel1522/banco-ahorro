const UsuarioItem = ({ item }) => {
    return (
        <div className="usuario-item">
            <div className="info-usuario">
                <p className="info-item">{item.nombre}</p>
                <p className="info-item">{item.tipo}</p>
                <p className="info-item">{item.grupo}</p>
                <p className="info-item">{item.ahorro}</p>
            </div>
        </div>
    )
}
export default UsuarioItem;