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
  javascriptIcon
} from "./TechStackIcons";

function TechStacks(){
    return(
        <>
        {html5Icon}
        {javascriptIcon}
        {typescriptIcon}
        {mySQLIcon}
        {nodejsIcon}
        {reactIcon}
        {AWSIcon}
        {linuxIcon}
        {gitIcon}
        {dockerIcon}
        {googlecloudIcon}
        {bootstrap5Icon}
        </>
    )
}

export default TechStacks;
