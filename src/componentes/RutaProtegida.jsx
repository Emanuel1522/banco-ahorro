import { Navigate, Outlet } from "react-router-dom";

function RutaProtegida({ rolesPermitidos  }) {
    const rol = localStorage.getItem("rol");

    if (!rol || !rolesPermitidos.includes(rol)) {
    return <Navigate to="/" replace />;
    }

    return <Outlet />
}
export default RutaProtegida;