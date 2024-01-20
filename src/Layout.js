import { Outlet, Link } from "react-router-dom";

const buttonContainerStyle = {
    textAlign: "center", // Center align the buttons
  };


const buttonStyle = {
    padding: "10px 50px",
    margin: "2px",
    backgroundColor: "#9a08d7",
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
    border: "50px",
    border: "2px solid #5bd4ef", // Border color
    lineHeight: "2",
  };

  

const Layout = () => {
  return (
    <div style={buttonContainerStyle}>
    <>
    <Link to={"./"} style={buttonStyle}>
    Home
  </Link>

  <Link to={"./weather"} style={buttonStyle}>
    Weather
  </Link>

  <Link to={"./transportation"} style={buttonStyle}>
    Transportation
  </Link>
  <Link to={"./maps"} style={buttonStyle}>
    Maps
  </Link>
  <Link to={"./resources"} style={buttonStyle}>
    Resources
  </Link>
   <Outlet />
    </>
    </div>
  )
};

export default Layout;