import React from "react";
import {
  AWSIcon,
  mySQLIcon,
  typescriptIcon,
  html5Icon,
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
  return (
    <Container style={{backgroundColor:'coral'}}>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100px" }}
      >
        <h2>Tech Stacks(바디2)</h2>
      </Container>
      <Container className="d-flex justify-content-center align-items-center">
        {javascriptIcon}
        {mySQLIcon}
        {nodejsIcon}
        {reactIcon}
        {AWSIcon}
        {linuxIcon}
        {gitIcon}
        {dockerIcon}
        {googlecloudIcon}
        {bootstrap5Icon}
      </Container>
    </Container>
  );
}

export default TechStacks;
