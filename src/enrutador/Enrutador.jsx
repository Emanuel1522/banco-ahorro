import RutaProtegida from "../componentes/RutaProtegida";
import Home from "../Home";
import Login from "../paginas/login";

import ModificarUsuario from "../paginas/ModificarUsuario";
import CrearUsuario from "../paginas/CrearUsuario";
import EditarPerfil from "../paginas/EditarPerfil";
import InicioAdmin from "../paginas/admin/InicioAdmin";
import VistaModificar from "../paginas/admin/VistaModificar";
import ListaUsuarios from "../paginas/admin/ListaUsuarios";
import InicioUser from "../paginas/usuario/InicioUser";

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
          {
            path:"editar",
            element: <EditarPerfil />
          }
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