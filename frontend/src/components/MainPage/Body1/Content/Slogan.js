import Typewriter from 'react-typewriter';
import { Container } from "react-bootstrap";


function Slogan() {

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1 id="slogan">
        <Typewriter
          delay={50}
          typing={0.5}
          minDelay={25}
          maxDelay={100}
        >
         dataMindHub : Unleashing Possibilities
        </Typewriter>
      </h1>
    </Container>
  );
}

export default Slogan;
