import Home from "../Home";
import Login from "../paginas/login";
import RutaProtegida from "../componentes/RutaProtegida";

export const Enrutador = [
  {
    path: "/",
    element: <Login />
  },
  {
        path: "/inicio/",
        element: <RutaProtegida componente={<Home/>} />
    },
];