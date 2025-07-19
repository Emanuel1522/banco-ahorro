import Home from "../Home";
import InicioAdmin from "../paginas/InicioAdmin"
import InicioUser from "../paginas/InicioUser"
import Login from "../paginas/login";
import RutaProtegida from "../componentes/RutaProtegida";
import ModificarUsuario from "../paginas/ModificarUsuario";
import CrearUsuario from "../paginas/CrearUsuario";

export const Enrutador = [
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/admin",
    element: (
      <RutaProtegida rolesPermitidos={["admin"]} />
    ),
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "inicio",
            element: <InicioAdmin />,
          },
          {
            path: "modificar/:id",
            element: <ModificarUsuario />,
          },
          {
            path: "crear",
            element: <CrearUsuario />,
          },
        ],
      },
    ],
  },
  {
    path: "/user",
    element: (
      <RutaProtegida rolesPermitidos={["user"]} />
    ),
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "inicio",
            element: <InicioUser />,
          },
        ],
      },
    ],
  },
];