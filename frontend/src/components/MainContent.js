import React from "react";
import Slogan from "./Slogan";
import TechStacks from "./TechStacks";
import Cards from "./Cards";
import Body4 from "./Body4";
import { Container } from "react-bootstrap";

import MainSample from "./MainSample";


function MainContent() {
  return (
    <Container>
      <MainSample/>
      <TechStacks />
      <Cards />
      <Body4 />
    </Container>
  );
}

export default MainContent;
