import RutaProtegida from "../componentes/RutaProtegida";
import Home from "../Home";
import Login from "../paginas/Login";
import InicioAdmin from "../paginas/admin/InicioAdmin";
import VistaModificar from "../paginas/admin/VistaModificar";
import ModificarUsuario from "../paginas/admin/ModificarUsuario";
import CrearUsuario from "../paginas/admin/CrearUsuario";
import EditarPerfil from "../paginas/admin/EditarPerfil";
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
            path: "lista-modificar/:grupo",
            element: <VistaModificar />,
          },
          {
            path: "modificar/:id",
            element: <ModificarUsuario />,
          },
          {
            path: "crear/:grupo",
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