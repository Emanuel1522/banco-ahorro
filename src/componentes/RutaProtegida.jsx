import { Navigate } from "react-router-dom";

function RutaProtegida({ componente }) {
    let token = localStorage.getItem("token");
    return token ? componente : <Navigate to="/" replace />;
}
export default RutaProtegida;