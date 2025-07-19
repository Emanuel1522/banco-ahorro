import { useNavigate } from "react-router-dom"
import "./InicioAdmin.css"

const InicioAdmin = () => {
    let redireccion = useNavigate();

    function redirigirGrupo (grupo) {
        redireccion(`/admin/usuarios/${grupo}`)
    }

    return (
        <main className="contenedor-principal-main">
            <h2>Grupos</h2>
            <div className="contenedor-grupos">
                {["10-1", "10-2", "10-3", "10-4", "11-1", "11-2", "11-3", "11-4"].map((grupo) => (
                    <button
                        key={grupo}
                        onClick={() => redirigirGrupo(grupo)}
                        className="boton-grupo"
                    >
                        {grupo}
                    </button>
                ))}
            </div>
        </main>
    )
}
export default InicioAdmin;