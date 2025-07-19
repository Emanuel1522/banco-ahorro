import RutaProtegida from "../componentes/RutaProtegida";
import Home from "../Home";
import Login from "../paginas/login";
import InicioAdmin from "../paginas/admin/InicioAdmin"
import VistaModificar from "../paginas/admin/VistaModificar"
import ModificarUsuario from "../paginas/admin/ModificarUsuario";
import ListaUsuarios from "../paginas/admin/ListaUsuarios";
import CrearUsuario from "../paginas/admin/CrearUsuario";
import InicioUser from "../paginas/usuario/InicioUser"

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
            path: "usuarios/:grupo",
            element: <ListaUsuarios />,
          },
          {
            path: "lista-modificar",
            element: <VistaModificar />,
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