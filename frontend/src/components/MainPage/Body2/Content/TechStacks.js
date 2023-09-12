import {
  NodeJSIcon,
  MySQLIcon,
  JavaScriptIcon,
  GoogleCloudIcon,
  ReactIcon,
  DockerIcon,
  AWSIcon,
} from "./Icons";

import './TechStacks.css'

function TechStacks() {
  return (
    <article className="wrapper">
      <div className="marquee">
        <div className="marquee__group">
          <NodeJSIcon />
          <MySQLIcon />
          <JavaScriptIcon />
          <GoogleCloudIcon />
          <ReactIcon />
          <DockerIcon />
          <AWSIcon />
        </div>
        <div aria-hidden="true" class="marquee__group">
          <NodeJSIcon />
          <MySQLIcon />
          <JavaScriptIcon />
          <GoogleCloudIcon />
          <ReactIcon />
          <DockerIcon />
          <AWSIcon />
        </div>
      </div>

      <div className="marquee marquee--reverse">
        <div className="marquee__group">
          <AWSIcon />
          <NodeJSIcon />
          <MySQLIcon />
          <JavaScriptIcon />
          <GoogleCloudIcon />
          <ReactIcon />
          <DockerIcon />
        </div>

        <div aria-hidden="true" className="marquee__group">
          <AWSIcon />
          <NodeJSIcon />
          <MySQLIcon />
          <JavaScriptIcon />
          <GoogleCloudIcon />
          <ReactIcon />
          <DockerIcon />
        </div>
      </div>
    </article>
  );
}

export default TechStacks;
