import { Outlet } from "react-router-dom";
import Encabezado from "./componentes/encabezado";

const Home = () => {
  return (
    <>
      <Encabezado />
      <Outlet />
    </>
  )
}

export default Home;
