function NotionSVG() {
    const svgStyle = {
      fill: "#0d0c22",
      fillRule: "nonzero",
      stroke: "none",
      strokeWidth: "1",
      strokeLinecap: "butt",
      strokeLinejoin: "miter",
      strokeMiterlimit: "10",
      strokeDasharray: "",
      strokeDashoffset: "0",
      fontFamily: "none",
      fontWeight: "none",
      fontSize: "none",
      textAnchor: "none",
      mixBlendMode: "normal",
    };
  
    const pathStyle = {
      fill: "#0d0c22",
    };
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30%"
        height="30%"
        viewBox="0,0,256,256"
        style={svgStyle}
      >
        <g transform="scale(4,4)">
          <path
            d="M42.01953,4c-0.66923,-0.00188 -1.4497,0.04545 -2.4082,0.12695l-31.2168,2.28711c-2.518,0.216 -3.39453,1.85059 -3.39453,3.80859v33.9707c0,1.525 0.54633,2.82927 1.86133,4.57227l7.33789,9.47266c1.205,1.524 2.30152,1.85119 4.60352,1.74219l36.25391,-2.17969c3.066,-0.215 3.94336,-1.63139 3.94336,-4.02539v-38.2168c0,-1.307 -0.54936,-1.63208 -2.19336,-2.83008l-9.96484,-6.96875c-1.80675,-1.305 -2.81456,-1.75414 -4.82227,-1.75977zM41.37305,6.98828c1.97518,0.03198 3.10136,0.79022 3.97461,1.46484l5.20898,3.74805c0.221,0.11 0.77538,0.76953 0.10938,0.76953l-31.36719,1.875c-3.327,0.222 -3.99267,0.33044 -5.76367,-1.10156l-4.32227,-3.41797c-0.442,-0.442 -0.22028,-0.99256 0.88672,-1.10156l30.37305,-2.20312c0.3185,-0.0275 0.61822,-0.03777 0.90039,-0.0332zM53.67188,17.00977c0.91042,0.09186 1.32813,0.83198 1.32813,2.06836v32.22656c0,1.416 -0.2205,2.61566 -2.1875,2.72266l-33.97266,1.96094c-1.967,0.107 -2.83984,-0.54606 -2.83984,-2.28906v-32.44141c0,-1.415 0.43705,-2.07169 1.74805,-2.17969l35.50391,-2.06641c0.15037,-0.01375 0.28986,-0.01508 0.41992,-0.00195zM50,22.5l-7,0.5c-1.641,0.196 -2.5,1 -2.5,2l3,0.5v15l-11.5,-17l-7.79883,0.6875c-1.539,0.192 -2.07742,1.521 -1.85742,2.5l2.65625,0.3125v21l-1,0.5c-2,0.5 -1.5,1.5 -1.5,2l8,-0.5c2.5,-0.5 2.5,-2 2.5,-2l-4,-1v-16l10.93555,16.9707c1.309,1.629 1.81545,2.5293 3.56445,2.5293c1.5,0 3,-0.5 4,-1.5v-24l1.39258,-0.26758c1.107,-0.232 1.60742,-1.23242 1.10742,-2.23242z"
            style={pathStyle}
          ></path>
        </g>
      </svg>
    );
  }
  
  export default NotionSVG;
  