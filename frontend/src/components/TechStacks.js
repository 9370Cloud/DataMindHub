import React from "react";
import {
  AWSIcon,
  mySQLIcon,
  reactIcon,
  bootstrap5Icon,
  nodejsIcon,
  linuxIcon,
  gitIcon,
  googlecloudIcon,
  dockerIcon,
  javascriptIcon,
} from "./TechStackIcons";
import { Container } from "react-bootstrap";

function TechStacks() {
  const iconGrid = [
    [javascriptIcon, mySQLIcon, nodejsIcon, reactIcon, AWSIcon],
    [linuxIcon, gitIcon, dockerIcon, googlecloudIcon, bootstrap5Icon],
  ];

  const iconStyle = {
    width: "150px", // Adjust the width as needed
    height: "150px", // Adjust the height as needed
  };

  return (
    <Container style={{  backgroundColor:"#FFFBE9", width:"100%"  }}>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100px" }}
      >
        <h2 style={{color:"#374E34"}}>Tech Stacks</h2>
      </Container>
      <Container className="d-flex flex-column align-items-center">
        {iconGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="d-flex">
            {row.map((icon, columnIndex) => (
              <div key={columnIndex} style={{ margin: "10px" }}>
                {React.cloneElement(icon, { style: iconStyle })}
              </div>
            ))}
          </div>
        ))}
      </Container>
    </Container>
  );
}

export default TechStacks;
