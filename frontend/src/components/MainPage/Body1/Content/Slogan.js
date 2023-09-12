import Typewriter from 'react-typewriter';

function Slogan() {

  return (
    <>
      <h1 id="slogan">
        <Typewriter
          delay={50}
          typing={0.5}
          minDelay={25}
          maxDelay={100}
        >
         Welcome to datamindhub : Unleashing Possibilities
        </Typewriter>
      </h1>
    </>
  );
}

export default Slogan;
