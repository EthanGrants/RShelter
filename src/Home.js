
import React from 'react';
import { Outlet, Link } from "react-router-dom";

export const homeStyle = {
    backgroundColor: '#bde6ec',
    width: "100%",
    color: "#fff",
    textShadow: "0 4px 8px rgba(155, 8, 215, 0.5)",
    fontSize: "40px",
    marginTop: "20px",

}


const linkContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // 2 columns with equal width
    //gap: "300px", // Adjust the gap between links
    textAlign: "center",
    //marginTop: "100px",
    // Center
    margin: "auto",
  };

export const linkStyle = {
    padding: "10px",
  backgroundColor: "#fff",
  border: "2px solid #5bd4ef",
  boxShadow: "0 4px 8px rgba(155, 8, 215, 0.5)",
  borderRadius: "5px", // Border radius for rounded corners
  textDecoration: "none",
  color: "#000", // Text color
  fontWeight: "bold",
  textShadow: "none",
  display: "flex",
  flexDirection: "column", // Display in a column
  alignItems: "center",
  }

  const imageStyle = {
    width:"350px", // Set maximum width to 100%
    height: "200px", // Set maximum height as needed
    marginBottom: "10px",
  };

  const highlightedText = {
    marginTop: "10px",
  };


function Home() {
    return (
      <div style={homeStyle}>
        <h2>R'Shelter</h2>

        <div style = {linkContainerStyle}>

  <Link to={"./weather"} style={linkStyle}>
  <div style={{marginBottom: "10px" }}>Weather</div>
    <img src="./RiversideMap.jpg" alt="Bus" style={imageStyle}  />
    <div style={{ fontSize: "20px", color: "#555", }}>Check the safety of your area</div>
  </Link>

  <Link to={"./transportation"} style={linkStyle}>
  <div style={{marginBottom: "10px" }}>Transportation</div>
    <img src="./UCBus.jpg" alt="Bus" style={imageStyle}  />
    <div style={{ fontSize: "20px", color: "#555" }}>Find public transportation for Riverside</div>
  </Link>

  <Link to={"./maps"} style={linkStyle}>
  <div style={{marginBottom: "10px" }}>Maps</div>
    <img src="./HomelessShelter.jpg" alt="Shelter" style={imageStyle}  />
    <div style={{ fontSize: "20px", color: "#555" }}>Find a local shelter near you</div>
  </Link>

  <Link to={"./resources"} style={linkStyle}>
  <div style={{marginBottom: "10px" }}>Resources</div>
    <img src="./ambulance.jpg" alt="Bus" style={imageStyle}  />
    <div style={{ fontSize: "20px", color: "#555" }}>Available emergency services</div>
  </Link>
      </div>
      </div>
    );
  }

export default Home;
