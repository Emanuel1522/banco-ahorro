const UsuarioItem = ({ item }) => {
    return (
        <div className="usuario-item">
            <div className="info-usuario">
                <p>{item.nombre}</p>
                <p>{item.tipo}</p>
                <p>{item.grupo}</p>
                <p>{item.ahorro}</p>
            </div>
        </div>
    )
}
export default UsuarioItem;