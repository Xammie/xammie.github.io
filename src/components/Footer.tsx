import Github from "../img/github.svg";
import Linkedin from "../img/linkedin.svg";
import React from "react";
import Icon from "./Icon";

export default function Footer() {
    return (
        <div className="flex justify-between items-center">
            <div>
                &copy; {new Date().getFullYear()} Max Hoogenbosch
            </div>
            <div className="flex">
                <Icon title="My Github Profile"
                      href="https://github.com/Xammie">
                    <Github className="h-8"/>
                </Icon>
                <Icon title="My LinkedIn Profile"
                      href="https://www.linkedin.com/in/maxhoogenbosch/">
                    <Linkedin className="h-8"/>
                </Icon>
            </div>
        </div>
    );
}
