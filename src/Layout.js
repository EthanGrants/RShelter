import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <Link to={"./"}>
    Home
  </Link>

  <Link to={"./weather"}>
    Weather
  </Link>

  <Link to={"./transportation"}>
    Transportation
  </Link>
  <Link to={"./maps"}>
    Maps
  </Link>
  <Link to={"./resources"}>
    Resources
  </Link>


      <Outlet />
    </>
  )
};

export default Layout;