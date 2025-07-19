import { Outlet } from "react-router-dom";
import Encabezado from "./componentes/Encabezado";

const Home = () => {
  return (
    <>
      <Encabezado />
      <Outlet />
    </>
  )
}

export default Home;
