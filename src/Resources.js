// Resources.jsx

import React from 'react';
import { FaBluetooth } from 'react-icons/fa';

const resources = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    Height: "30vh", 
    marginTop: "50px",
 }

 const row = {
        margin: "10px",/* Adjust margin as needed */
        padding: "30px", /* Adjust padding as needed */
        width: "500px",
        height: "230px",
        border: "1px solid #ccc", /* Add borders or styling as desired */
        textAlign: "center",
        borderColor: "black",
        boxShadow: "0 4px 8px rgba(155, 8, 215, 0.5)", // Purple shadow
        fontWeight: "bold",
 }

 const contact = {
    marginTop: "10px", // Adjust the top margin as needed
    color: "blue",
 }

 const subtitle = {
    fontSize: "14px",
    marginTop: "10px"
 }

 const imageStyle = {
    height: "50px",
    width: "100px",
    marginLeft: "175px",
 }
function Resources() {
   return (
        <div style={resources}>
         <div style={row}>
            988 Suicide and Crisis Lifeline
            <img src="./hello.png" alt="hello" style={imageStyle}></img>
            <div style = {subtitle}>
            "If you're thinking about suicide, are worried about a friend or loved one, or would like emotional support, the 988 Lifeline network is available 24/7 across the United States."
            </div>
            <div style={contact}>
               <a href="tel:998">Call now</a>
            </div>
         </div>


         <div style={row}>
            National Helpline
            <img src="./doc.png" alt="doc" style={imageStyle}></img>
            <div style = {subtitle}>
            "For individuals and family members facing mental and/or substance use disorders. This service provides referrals to local treatment facilities, support groups, and community-based organizations."
            </div>
            <div style={contact}>
               <a href="tel:1800662HELP(4357)">Call now</a>
            </div>
         </div>

         
         <div style={row}>
         Disaster Distress Helpline
         <img src="./pandemic.jpeg" alt="doc" style={imageStyle}></img>
            <div style = {subtitle}>
            "All residents in the U.S. and its territories who are experiencing emotional distress related to natural or human-caused disasters."
            </div>
            <div style={contact}>
               <a href="tel:18009855990">Call now</a>
            </div>
         </div>
         
      </div>
   );
}

export default Resources;