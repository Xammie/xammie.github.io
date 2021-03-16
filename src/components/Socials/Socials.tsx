import Icon from "../Icon";
import Github from "../../img/github.svg";
import Linkedin from "../../img/linkedin.svg";
import Twitter from "../../img/twitter.svg";
import React from "react";

export default function Socials() {
    return (
        <div className="flex" role="navigation" aria-label="Links">
            <Icon title="GitHub"
                  rel="noopener"
                  href="https://github.com/Xammie">
                <Github className="h-8"/>
            </Icon>
            <Icon title="LinkedIn"
                  rel="noopener"
                  href="https://www.linkedin.com/in/maxhoogenbosch/">
                <Linkedin className="h-8"/>
            </Icon>
            <Icon title="Twitter"
                  rel="noopener"
                  href="https://twitter.com/maxhoogenbosch">
                <Twitter className="h-8"/>
            </Icon>
        </div>
    )
}