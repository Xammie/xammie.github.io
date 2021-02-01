import Icon from "./Icon";
import Github from "../img/github.svg";
import Linkedin from "../img/linkedin.svg";
import Twitter from "../img/twitter.svg";
import React from "react";

export default function Socials() {
    return (
        <>
            <Icon title="My Github"
                  href="https://github.com/Xammie">
                <Github className="h-8"/>
            </Icon>
            <Icon title="My LinkedIn"
                  href="https://www.linkedin.com/in/maxhoogenbosch/">
                <Linkedin className="h-8"/>
            </Icon>
            <Icon title="My Twitter"
                  href="https://twitter.com/maxhoogenbosch">
                <Twitter className="h-8"/>
            </Icon>
        </>
    )
}